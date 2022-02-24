<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      美食達人
    </h1>
    <hr>
    <div class="row text-center">
      <div 
        v-for="user in users"
        :key="user.id" 
        class="col-3"
      >
        <a href="#">
          <img
            :src="user.image ? user.image : 'http://via.placeholder.com/300x300?text=No+Image'"
            width="140px"
            height="140px"
          >
        </a>
        <h2>{{ user.name }}</h2>
        <span class="badge badge-secondary">追蹤人數：{{ user.FollowerCount }}</span>
        <p class="mt-3">
          <button
            v-if="user.isFollowed"
            type="button"
            class="btn btn-sm btn-danger"
            @click.stop.prevent="deleteFollow(user)"
          >
            取消追蹤
          </button>
          <button
            v-else
            type="button"
            class="btn btn-sm btn-primary"
            @click.stop.prevent="addFollow(user)"
          >
            追蹤
          </button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs'

const dummyData = {
  "users": [
      {
          "id": 1,
          "name": "root",
          "email": "root@example.com",
          "password": "$2a$10$3G1NR/0UaujsPqypobU/5emL1FrxqS.J6W7T2qco2bR349c5JtdX2",
          "isAdmin": true,
          "image": null,
          "createdAt": "2022-02-16T16:32:50.000Z",
          "updatedAt": "2022-02-16T16:32:50.000Z",
          "Followers": [],
          "FollowerCount": 0,
          "isFollowed": false
      },
      {
          "id": 2,
          "name": "user1",
          "email": "user1@example.com",
          "password": "$2a$10$kAU7v6.uThW1PC76HIISVOYOkY2ov.oSRDR.hpx.hrDD1Gev2sAyO",
          "isAdmin": false,
          "image": null,
          "createdAt": "2022-02-16T16:32:50.000Z",
          "updatedAt": "2022-02-16T16:32:50.000Z",
          "Followers": [],
          "FollowerCount": 0,
          "isFollowed": false
      },
      {
          "id": 3,
          "name": "user2",
          "email": "user2@example.com",
          "password": "$2a$10$zb8.59Blk6CI48UgggU4V.MccMbEBEdIZk/L4miDS0NN5dVRKL.qa",
          "isAdmin": false,
          "image": null,
          "createdAt": "2022-02-16T16:32:50.000Z",
          "updatedAt": "2022-02-16T16:32:50.000Z",
          "Followers": [],
          "FollowerCount": 0,
          "isFollowed": false
      }
  ]
}

export default {
  components: {
    NavTabs
  },
  data () {
    return {
      users: []
    }
  },
  created () {
    this.fetchFeeds()
  },
  methods: {
    fetchFeeds () {
      this.users = dummyData.users
    },
    addFollow (targetUser) {
      this.users = this.users.map((user) => {
        return { 
          ...user,
          isFollowed: targetUser.id === user.id ? true : user.isFollowed
        }
      })
    },
    deleteFollow (targetUser) {
      this.users = this.users.map((user) => {
        return { 
          ...user,
          isFollowed: targetUser.id === user.id ? false : user.isFollowed
        }
      })
    }
  }
}
</script>