<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />

    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">
            #
          </th>
          <th scope="col">
            Email
          </th>
          <th scope="col">
            Role
          </th>
          <th
            scope="col"
            width="140"
          >
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr 
          v-for="user in users"
          :key="user.id"
        >
          <th scope="row">
            {{ user.id }}
          </th>
          <td>{{ user.email }}</td>
          <td>{{ user.isAdmin ? 'admin' : 'user'}}</td>
          <td>
            <button
              v-if="user.id !== currentUser.id"
              type="button"
              class="btn btn-link"
              @click.stop.prevent="toggleUserRole(user.id)"
            >
              {{ user.isAdmin ? 'set as user' : 'set as admin' }}
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from './../components/AdminNav'

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
        "updatedAt": "2022-02-16T16:32:50.000Z"
    },
    {
        "id": 2,
        "name": "user1",
        "email": "user1@example.com",
        "password": "$2a$10$kAU7v6.uThW1PC76HIISVOYOkY2ov.oSRDR.hpx.hrDD1Gev2sAyO",
        "isAdmin": false,
        "image": null,
        "createdAt": "2022-02-16T16:32:50.000Z",
        "updatedAt": "2022-02-16T16:32:50.000Z"
    },
    {
        "id": 3,
        "name": "user2",
        "email": "user2@example.com",
        "password": "$2a$10$zb8.59Blk6CI48UgggU4V.MccMbEBEdIZk/L4miDS0NN5dVRKL.qa",
        "isAdmin": false,
        "image": null,
        "createdAt": "2022-02-16T16:32:50.000Z",
        "updatedAt": "2022-02-16T16:32:50.000Z"
    }
  ]
}

const dummyUser = {
  currentUser: {
    id: 1,
    name: 'Admin',
    email: 'root@example.com',
    image: 'https://i.pravatar.cc/300',
    isAdmin: true
  },
  isAuthenticated: true
}

export default {
  name: 'AdminUsers',
  components: {
    AdminNav
  },
  data() {
    return {
      users: [],
      currentUser: dummyUser.currentUser
    }
  },
  created () {
    this.fetchUsers()
  },
  methods: {
    fetchUsers() {
      this.users = dummyData.users
    },
    toggleUserRole(userId) {
      this.users = this.users.map(user => {
        if (user.id === userId) {
          return {
            ...user,
            isAdmin: !user.isAdmin
          }
        }
        return user
      })
    }
  }
}
</script>