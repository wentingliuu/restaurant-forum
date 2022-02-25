<template>
  <div class="container py-5">
    <!-- RestaurantDetail -->
    <RestaurantDetail
      :initial-restaurant="restaurant"
    />
    <hr>
    <!-- RestaurantComments -->
    <RestaurantComments
      :restaurant-comments="restaurantComments"
      @after-delete-comment="afterDeleteComment"
    />
    <!-- CreateComment -->
  </div>
</template>

<script>
import RestaurantDetail from './../components/RestaurantDetail'
import RestaurantComments from './../components/RestaurantComments'

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
    "updatedAt": "2022-02-24T08:17:39.431Z",
    "CategoryId": 1,
    "Category": {
        "id": 1,
        "name": "中式料理",
        "createdAt": "2022-02-16T16:32:50.000Z",
        "updatedAt": "2022-02-16T16:32:50.000Z"
    },
    "FavoritedUsers": [],
    "LikedUsers": [],
    "Comments": [
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
        }
    ]
  },
  "isFavorited": false,
  "isLiked": false
}

export default {
  components: {
    RestaurantDetail,
    RestaurantComments
  },
  data () {
    return {
      restaurant: {
        id: -1,
        name: '',
        categoryName: '',
        image: '',
        openingHours: '',
        tel: '',
        address: '',
        description: '',
        isFavorited: false,
        isLiked: false
      },
      restaurantComments: []
    }
  },
  created () {
    const { id: restaurantId } = this.$route.params
    this.fetchRestaurant(restaurantId)
  },
  methods: {
    fetchRestaurant (restaurantId) {
      console.log('fetchRestaurant id: ', restaurantId)
      const { restaurant, isFavorited, isLiked } = dummyData
      const { id, name, Category, image, opening_hours:openingHours, tel, address, description, Comments } = restaurant

      this.restaurant = {
        id,
        name,
        categoryName: Category.name,
        image,
        openingHours,
        tel,
        address,
        description,
        isFavorited,
        isLiked,
      }

      this.restaurantComments = Comments
    },
    afterDeleteComment (commentId) {
      this.restaurantComments = this.restaurantComments.filter(
        comment => comment.id !== commentId
      )
    }
  }
}
</script>