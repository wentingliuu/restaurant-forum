<template>
  <div class="container py-5">
    <form @submit.stop.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          id="name"
          v-model="user.name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          required
        >
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <img
          :src="user.image | emptyImage"
          class="d-block img-thumbnail mb-3"
          width="200"
          height="200"
        >
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file"
          @change="handleFileChange"
        >
      </div>

      <button
        type="submit"
        class="btn btn-primary"
      >
        {{ isProcessing ? "資料更新中..." : "Submit" }}
      </button>
    </form>
  </div>
</template>

<script>
import usersAPI from './../apis/users'
import { Toast } from './../utils/helpers'
import { mapState } from 'vuex'
import { emptyImageFilter } from './../utils/mixins'

export default {
  mixins: [emptyImageFilter],
  data () {
    return {
      user: {
        id: -1,
        name: '',
        email: '',
        image: '',
      },
      isProcessing: false
    }
  },
  computed: {
    ...mapState(['currentUser'])
  },
  watch: {
    currentUser () {
      this.setUser()
    }
  },
  created () {
    const { id } = this.$route.params
    if (id.toString() !== this.currentUser.id.toString()) {
      this.$router.push({ name: 'not-found' })
      return
    }
    this.setUser()
  },
  beforeRouteUpdate (to, from, next) {
    const { id } = to.params
    if (id.toString() !== this.currentUser.id.toString()) {
      this.$router.push({ name: 'not-found' })
      return
    }
    this.setUser()
    next()
  },
  methods: {
    setUser () {
      const { id, name, email, image } = this.currentUser
      this.user = {
        ...this.user,
        id,
        name,
        email,
        image
      }
    },
    handleFileChange (e) {
      const files = e.target.files

      if (files.length === 0) {
        // 使用者沒有選擇上傳的檔案
        this.user.image = ''
      } else {
        // 否則產生預覽圖
        const imageURL = window.URL.createObjectURL(files[0])
        this.user.image = imageURL
      }
    },
    async handleSubmit (e) {
      if (!this.user.name) {
        Toast.fire({
          icon: 'warning',
          title: '您尚未填寫姓名'
        })
        return
      }

      const form = e.target
      const formData = new FormData(form)

      try {
        this.isProcessing = true
        const { data } = await usersAPI.update({
          userId: this.user.id,
          formData
        })

        if (data.status !== "success") {
          throw new Error(data.message)
        }

        this.$router.push({ name: 'user', params: { id: this.user.id } })
      } catch {
        this.isProcessing = false
        Toast.fire({
          icon: 'error',
          title: '無法更新使用者資料，請稍後再試'
        })
      }
    }
  }
}
</script>