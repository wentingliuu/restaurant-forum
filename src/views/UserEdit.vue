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
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import { emptyImageFilter } from './../utils/mixins'

const dummyData = {
  "profile": {
      "id": 3,
      "name": "user2",
      "email": "user2@example.com",
      "password": "$2a$10$zb8.59Blk6CI48UgggU4V.MccMbEBEdIZk/L4miDS0NN5dVRKL.qa",
      "isAdmin": false,
      "image": null
  }
}

export default {
  mixins: [emptyImageFilter],
  data () {
    return {
      user: {
        id: -1,
        name: '',
        email: '',
        image: '',
      }
    }
  },
  created () {
    const { id } = this.$route.params
    this.fetchUser(id)
  },
  methods: {
    fetchUser (userId) {
      console.log('fetchUser id:', userId)
      const { id, name, email, image } = dummyData.profile
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
    handleSubmit (e) {
      const form = e.target
      const formData = new FormData(form)
      // 透過 API 將表單資料送到伺服器
      for (let [name, value] of formData.entries()) {
        console.log(name + ': ' + value)
      }
    }
  }
}
</script>