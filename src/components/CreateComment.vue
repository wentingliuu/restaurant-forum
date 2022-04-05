<template>
  <form @submit.stop.prevent="handleSubmit">
    <div class="form-group mb-4">
      <label for="text">留下評論：</label>
      <textarea
        v-model="text"
        class="form-control"
        rows="3"
        name="text"
      />
    </div>
    <div class="d-flex align-items-center justify-content-between">
      <button
        type="button"
        class="btn btn-link"
        @click="$router.back()"
      >回上一頁
      </button>
      <button
        type="submit"
        class="btn mr-0"
        :disabled="isProcessing"
      >
        Submit
      </button>
    </div>
  </form>
</template>

<script>
import commentsAPI from './../apis/comments'
import { Toast } from './../utils/helpers'
import { mapState } from 'vuex'

export default {
  name: 'CreateComment',
  props: {
    restaurantId: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      text: '',
      isProcessing: false
    }
  },
  computed: {
    ...mapState(['currentUser'])
  },
  methods: {
    async handleSubmit () {
      try {
        if (!this.text) {
          Toast.fire({
            icon: 'warning',
            title: '您尚未填寫任何評論'
          })
          return
        }

        this.isProcessing = true
        const { data } = await commentsAPI.create({ 
          UserId: this.currentUser.id, 
          restaurantId: this.restaurantId,
          text: this.text
        })
        
        if (data.status === 'error') {
          throw new Error(data.message)
        }

        this.$emit('after-create-comment', {
          commentId: data.commentId,
          restaurantId: this.restaurantId,
          text: this.text
        })
        
        this.isProcessing = false
        this.text = ''
      } catch {
        this.isProcessing = false
        Toast.fire({
          icon: 'error',
          title: '無法新增餐廳資料，請稍後再試'
        })
      }
    }
  }
}
</script>

<style scoped>
.form-group {
  margin: 21px 0 8px;
}
</style>