<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.categoryName }}
      </span>
    </div>

    <hr>

    <ul>
      <li>評論數： {{ restaurant.commentsLength }}</li>
      <li>瀏覽次數： {{ restaurant.viewCounts }}</li>
    </ul>

    <button
      type="button"
      class="btn btn-link"
      @click="$router.back()"
    >
      回上一頁
    </button>
  </div>
</template>

<script>
const dummyData = {
  "restaurant": {
    "id": 1,
    "name": "Kailee Little",
    "tel": "1-658-340-0490 x85134",
    "address": "39791 Lubowitz Forges",
    "opening_hours": "08:00",
    "description": "Consequatur doloremque sint sit ut non. Assumenda incidunt odio quidem quia aliquam natus ea molestiae nihil. Velit eius distinctio. Explicabo nam iste doloribus et voluptas possimus qui minus aut. Ut placeat quia quasi error voluptatibus ea. Et fuga atque dignissimos repellat consequatur qui.",
    "image": "https://loremflickr.com/320/240/restaurant,food/?random=33.995012181224695",
    "viewCounts": 1,
    "createdAt": "2022-02-16T16:32:50.000Z",
    "updatedAt": "2022-02-24T08:17:39.000Z",
    "CategoryId": 1,
    "Category": {
        "id": 1,
        "name": "中式料理",
        "createdAt": "2022-02-16T16:32:50.000Z",
        "updatedAt": "2022-02-16T16:32:50.000Z"
    },
    "Comments": [
        {
            "id": 1,
            "text": "Omnis accusamus necessitatibus delectus culpa asperiores quibusdam.",
            "UserId": 3,
            "RestaurantId": 1,
            "createdAt": "2022-02-16T16:32:50.000Z",
            "updatedAt": "2022-02-16T16:32:50.000Z",
            "User": {
                "id": 3,
                "name": "user2",
                "email": "user2@example.com",
                "password": "$2a$10$zb8.59Blk6CI48UgggU4V.MccMbEBEdIZk/L4miDS0NN5dVRKL.qa",
                "isAdmin": false,
                "image": null,
                "createdAt": "2022-02-16T16:32:50.000Z",
                "updatedAt": "2022-02-16T16:32:50.000Z"
            }
        },
        {
            "id": 51,
            "text": "Quia aut eum.",
            "UserId": 2,
            "RestaurantId": 1,
            "createdAt": "2022-02-16T16:32:50.000Z",
            "updatedAt": "2022-02-16T16:32:50.000Z",
            "User": {
                "id": 2,
                "name": "user1",
                "email": "user1@example.com",
                "password": "$2a$10$kAU7v6.uThW1PC76HIISVOYOkY2ov.oSRDR.hpx.hrDD1Gev2sAyO",
                "isAdmin": false,
                "image": null,
                "createdAt": "2022-02-16T16:32:50.000Z",
                "updatedAt": "2022-02-16T16:32:50.000Z"
            }
        },
        {
            "id": 101,
            "text": "Expedita ut commodi cumque similique.",
            "UserId": 2,
            "RestaurantId": 1,
            "createdAt": "2022-02-16T16:32:50.000Z",
            "updatedAt": "2022-02-16T16:32:50.000Z",
            "User": {
                "id": 2,
                "name": "user1",
                "email": "user1@example.com",
                "password": "$2a$10$kAU7v6.uThW1PC76HIISVOYOkY2ov.oSRDR.hpx.hrDD1Gev2sAyO",
                "isAdmin": false,
                "image": null,
                "createdAt": "2022-02-16T16:32:50.000Z",
                "updatedAt": "2022-02-16T16:32:50.000Z"
            }
        }
    ]
  }
}

export default {
  data () {
    return {
      restaurant: {
        id: -1,
        name: '',
        categoryName: '',
        commentsLength: 0,
        viewCounts: 0
      }
    }
  },
  created(){
    this.fetchRestaurant()
  },
  methods: {
    fetchRestaurant () {
      const { id, name, Category, Comments, viewCounts } = dummyData.restaurant
      this.restaurant = {
        ...this.restaurant,
        id,
        name,
        categoryName: Category ? Category.name : '未分類',
        commentsLength: Comments.length,
        viewCounts
      }
    }
  }
}
</script>