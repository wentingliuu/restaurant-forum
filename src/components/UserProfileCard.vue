<template>
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img
          :src="user.image | emptyImage"
          width="300px"
          height="300px"
        >
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">
            {{ user.name }}
          </h5>
          <p class="card-text">
            {{ user.email }}
          </p>
          <ul class="list-unstyled">
            <li>
              <strong>{{ user.commentsLength }}</strong> 已評論餐廳
            </li>
            <li>
              <strong>{{ user.favoritedRestaurantsLength }}</strong> 收藏的餐廳
            </li>
            <li>
              <strong>{{ user.followingsLength }}</strong> followings (追蹤者)
            </li>
            <li>
              <strong>{{ user.followersLength }}</strong> followers (追隨者)
            </li>
          </ul>
          <template v-if="isCurrentUser">
            <router-link
              :to="{
                name: 'user-edit',
                params: { id: user.id }
              }"
              class="btn"
            >
            Edit
            </router-link>
          </template>
          <template v-else>
            <button
              v-if="isFollowed"
              type="button"
              class="btn"
              @click.stop.prevent="deleteFollowing(user.id)"
            >
              取消追蹤
            </button>
            <button
              v-else
              type="button"
              class="btn"
              @click.stop.prevent="addFollowing(user.id)"
            >
              追蹤
            </button>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import usersAPI from './../apis/users'
import { Toast } from './../utils/helpers'
import { emptyImageFilter } from './../utils/mixins'

export default {
  mixins: [emptyImageFilter],
  props: {
    user: {
      type: Object,
      required: true
    },
    isCurrentUser: {
      type: Boolean,
      required: true
    },
    initialIsFollowed: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      isFollowed: this.initialIsFollowed
    }
  },
  watch: {
    initialIsFollowed (newValue) {
      this.isFollowed = {
        ...this.isFollowed,
        ...newValue
      }
    }
  },
  methods: {
    async addFollowing (userId) {
      try {
        const { data } = await usersAPI.addFollowing({ userId })

        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.isFollowed = true
      } catch {
        Toast.fire({
          icon: 'error',
          title: '無法追蹤用戶，請稍後再試'
        })
      }
    },
    async deleteFollowing (userId) {
      try {
        const { data } = await usersAPI.deleteFollowing({ userId })

        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.isFollowed = false
      } catch {
        Toast.fire({
          icon: 'error',
          title: '無法取消追蹤用戶，請稍後再試'
        })
      }
    }
  }
}
</script>