<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      人氣餐廳
    </h1>

    <hr>
    <div
      v-for="restaurant in restaurants"
      :key="restaurant.id"
      class="card mb-3"
      style="max-width: 540px;margin: auto;"
    >
      <div class="row no-gutters">
        <div class="col-md-4">
          <a href="#">
            <img
              class="card-img"
              :src="restaurant.image"
            >
          </a>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">
              {{ restaurant.name }}
            </h5>
            <span class="badge badge-secondary">收藏數：{{ restaurant.FavoriteCount }}</span>
            <p class="card-text">
              {{ restaurant.description }}
            </p>
            <a
              href="#"
              class="btn btn-primary mr-2"
            >Show</a>

            <button
              v-if="restaurant.isFavorited"
              @click.stop.prevent="deleteFavorite(restaurant.id)"
              type="button"
              class="btn btn-danger mr-2"
            >
              移除最愛
            </button>
            <button
              v-else
              @click.stop.prevent="addFavorite(restaurant.id)"
              type="button"
              class="btn btn-primary"
            >
              加到最愛
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs'

const dummyData = {
  "restaurants": [
    {
        "id": 50,
        "name": "Orrin Johnson",
        "tel": "116.989.3491",
        "address": "926 Irma Bridge",
        "opening_hours": "08:00",
        "description": "facilis",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=59.13250560419474",
        "viewCounts": 0,
        "createdAt": "2022-02-16T16:32:50.000Z",
        "updatedAt": "2022-02-16T16:32:50.000Z",
        "CategoryId": 4,
        "FavoritedUsers": [],
        "isFavorited": false,
        "FavoriteCount": 0
    },
    {
        "id": 49,
        "name": "Liana Hackett",
        "tel": "736.204.2094",
        "address": "1045 Hettinger Shoals",
        "opening_hours": "08:00",
        "description": "Sed sit nihil magni temporibus.\nIncidunt eaque neq",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=52.55755977721901",
        "viewCounts": 0,
        "createdAt": "2022-02-16T16:32:50.000Z",
        "updatedAt": "2022-02-16T16:32:50.000Z",
        "CategoryId": 1,
        "FavoritedUsers": [],
        "isFavorited": false,
        "FavoriteCount": 0
    },
    {
        "id": 48,
        "name": "Deangelo Murray",
        "tel": "(978) 267-2643 x317",
        "address": "94021 Bogan Radial",
        "opening_hours": "08:00",
        "description": "Minus consequatur qui tempora molestiae officiis p",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=28.945212248286587",
        "viewCounts": 0,
        "createdAt": "2022-02-16T16:32:50.000Z",
        "updatedAt": "2022-02-16T16:32:50.000Z",
        "CategoryId": 3,
        "FavoritedUsers": [],
        "isFavorited": false,
        "FavoriteCount": 0
    },
    {
        "id": 47,
        "name": "Miss Myra Weimann",
        "tel": "1-325-605-8761",
        "address": "370 Romaguera Walk",
        "opening_hours": "08:00",
        "description": "Iusto rerum veritatis voluptatem praesentium quos.",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=96.00094493663028",
        "viewCounts": 0,
        "createdAt": "2022-02-16T16:32:50.000Z",
        "updatedAt": "2022-02-16T16:32:50.000Z",
        "CategoryId": 5,
        "FavoritedUsers": [],
        "isFavorited": false,
        "FavoriteCount": 0
    },
    {
        "id": 46,
        "name": "Grant Deckow",
        "tel": "315.222.1362 x183",
        "address": "3227 Julius Island",
        "opening_hours": "08:00",
        "description": "A esse aperiam ipsam. Fugiat perferendis accusanti",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=45.2604619017523",
        "viewCounts": 0,
        "createdAt": "2022-02-16T16:32:50.000Z",
        "updatedAt": "2022-02-16T16:32:50.000Z",
        "CategoryId": 3,
        "FavoritedUsers": [],
        "isFavorited": false,
        "FavoriteCount": 0
    },
    {
        "id": 45,
        "name": "Blanche Gibson",
        "tel": "367.979.3493 x3078",
        "address": "8621 Reichert Ville",
        "opening_hours": "08:00",
        "description": "Eos officiis minus. Blanditiis perferendis tempori",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=8.690939153012266",
        "viewCounts": 0,
        "createdAt": "2022-02-16T16:32:50.000Z",
        "updatedAt": "2022-02-16T16:32:50.000Z",
        "CategoryId": 5,
        "FavoritedUsers": [],
        "isFavorited": false,
        "FavoriteCount": 0
    },
    {
        "id": 44,
        "name": "Leila Gorczany DDS",
        "tel": "(851) 011-7599 x679",
        "address": "75861 Fadel Lakes",
        "opening_hours": "08:00",
        "description": "At dolore enim doloremque iure rerum.\nExplicabo qu",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=21.78460358466254",
        "viewCounts": 0,
        "createdAt": "2022-02-16T16:32:50.000Z",
        "updatedAt": "2022-02-16T16:32:50.000Z",
        "CategoryId": 5,
        "FavoritedUsers": [],
        "isFavorited": false,
        "FavoriteCount": 0
    },
    {
        "id": 43,
        "name": "Coralie Bechtelar",
        "tel": "823-355-4865 x40077",
        "address": "91424 Danny Ways",
        "opening_hours": "08:00",
        "description": "laudantium",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=37.364359252361744",
        "viewCounts": 0,
        "createdAt": "2022-02-16T16:32:50.000Z",
        "updatedAt": "2022-02-16T16:32:50.000Z",
        "CategoryId": 3,
        "FavoritedUsers": [],
        "isFavorited": false,
        "FavoriteCount": 0
    },
    {
        "id": 42,
        "name": "Myrtis Gulgowski",
        "tel": "(843) 782-6806 x996",
        "address": "627 Alberto Junction",
        "opening_hours": "08:00",
        "description": "Quia quam explicabo et.",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=6.972508037073255",
        "viewCounts": 0,
        "createdAt": "2022-02-16T16:32:50.000Z",
        "updatedAt": "2022-02-16T16:32:50.000Z",
        "CategoryId": 5,
        "FavoritedUsers": [],
        "isFavorited": false,
        "FavoriteCount": 0
    },
    {
        "id": 41,
        "name": "Madaline Zboncak",
        "tel": "1-722-053-8310 x95998",
        "address": "19489 Rodger Meadow",
        "opening_hours": "08:00",
        "description": "Qui vitae vel accusamus ut quasi et. Ea eligendi i",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=23.307262918138672",
        "viewCounts": 0,
        "createdAt": "2022-02-16T16:32:50.000Z",
        "updatedAt": "2022-02-16T16:32:50.000Z",
        "CategoryId": 3,
        "FavoritedUsers": [],
        "isFavorited": false,
        "FavoriteCount": 0
    }
  ]
}

export default {
  name: 'RestaurantsTop',
  components: {
    NavTabs
  },
  data () {
    return {
      restaurants: []
    }
  },
  created(){
    this.fetchRestaurants()
  },
  methods: {
    fetchRestaurants () {
      this.restaurants = dummyData.restaurants

    },
    addFavorite (restaurantId) {
      this.restaurants = this.restaurants.map(res => {
        return {
          ... res,
          isFavorited: res.id === restaurantId ? true : res.isFavorited
        }
      })
    },
    deleteFavorite (restaurantId) {
      this.restaurants = this.restaurants.map(res => {
        return {
          ... res,
          isFavorited: res.id === restaurantId ? false : res.isFavorited
        }
      })
    }
  }
}
</script>