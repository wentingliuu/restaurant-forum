<template>
  <div class="container py-5">
    <!-- UserProfileCard -->
    <UserProfileCard
      :user="user"
      :is-current-user="currentUser.id === user.id"
      :initial-is-followed="isFollowed"
    />
  
    <div class="row">
      <div class="col-md-4">
        <!-- UserFollowingsCard -->
        <UserFollowingsCard
          :followings="followings"
        />
        <!-- UserFollowersCard -->
        <UserFollowersCard
          :followers="followers"
        />
      </div>
      <div class="col-md-8">
        <!-- UserCommentsCard -->
        <UserCommentsCard
          :comments="comments"
        />
        <!-- UserFavoritedRestaurantsCard -->
        <UserFavoritedRestaurantsCard
          :favorited-restaurants="favoritedRestaurants"
        />
      </div>
    </div>
  </div>
</template>

<script>
import UserProfileCard from './../components/UserProfileCard'
import UserFollowingsCard from './../components/UserFollowingsCard'
import UserFollowersCard from './../components/UserFollowersCard'
import UserCommentsCard from './../components/UserCommentsCard'
import UserFavoritedRestaurantsCard from './../components/UserFavoritedRestaurantsCard'
import usersAPI from './../apis/users'
import { Toast } from './../utils/helpers'
import { mapState } from 'vuex'

export default {
  name: "User",
  components: {
    UserProfileCard,
    UserFollowingsCard,
    UserFollowersCard,
    UserCommentsCard,
    UserFavoritedRestaurantsCard
  },
  data () {
    return {
      user: {
        id: 0,
        image: '',
        name: '',
        email: '',
        followingsLength: 0,
        followersLength: 0,
        commentsLength: 0,
        favoritedRestaurantsLength: 0
      },
      isFollowed: false,
      followings: [],
      followers: [],
      comments: [],
      favoritedRestaurants: [],
    }
  },
  computed: {
    ...mapState(['currentUser'])
  },
  beforeRouteUpdate (to, from, next) {
    const { id: userId } = to.params
    this.fetchUser(userId)
    next()
  },
  created() {
    const { id: userId } = this.$route.params
    this.fetchUser(userId)
  },
  methods: {
    async fetchUser (userId) {
      try {
        const { data, statusText } = await usersAPI.getUser({
          userId
        })

        if (statusText !== 'OK') {
          throw new Error(statusText)
        }

        const { profile, isFollowed } = data
        const { id, image, name, email, Followings, Followers, Comments, FavoritedRestaurants } = profile
        
        this.user = {
          ...this.user,
          id,
          image,
          name,
          email,
          followingsLength: Followings.length,
          followersLength: Followers.length,
          commentsLength: Comments.length,
          favoritedRestaurantsLength: FavoritedRestaurants.length
        }

        this.comments = Comments.filter(comment => comment.Restaurant)
        this.isFollowed = isFollowed
        this.followings = Followings
        this.followers = Followers
        this.favoritedRestaurants = FavoritedRestaurants
      } catch {
        Toast.fire({
          icon: 'error',
          title: '無法取得使用者資料，請稍後再試'
        })
      }
    }
  }
}
</script>