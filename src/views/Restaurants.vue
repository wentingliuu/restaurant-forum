<template>
  <div class="container py-5">
    <NavTabs />
    <!-- RestaurantsNavPills -->
    <RestaurantsNavPills 
      :categories="categories"
    />

    <div class="row">
      <!-- RestaurantsCard -->
      <RestaurantCard 
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        :initial-restaurant="restaurant"
      />
    </div>
  
    <!-- Pagination -->
    <RestaurantsPagination
        v-if="totalPage.length > 1"
        :current-page="currentPage"
        :total-page="totalPage"
        :category-id="categoryId"
        :previous-page="previousPage"
        :next-page="nextPage"
    />
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs'
import RestaurantCard from './../components/RestaurantCard'
import RestaurantsNavPills from './../components/RestaurantsNavPills'
import RestaurantsPagination from './../components/RestaurantsPagination'

const dummyData = {
    "restaurants": [
        {
            "id": 1,
            "name": "Kailee Little",
            "tel": "1-658-340-0490 x85134",
            "address": "39791 Lubowitz Forges",
            "opening_hours": "08:00",
            "description": "Consequatur doloremque sint sit ut non. Assumenda ",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=33.995012181224695",
            "viewCounts": 0,
            "createdAt": "2022-02-16T16:32:50.000Z",
            "updatedAt": "2022-02-16T16:32:50.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2022-02-16T16:32:50.000Z",
                "updatedAt": "2022-02-16T16:32:50.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 2,
            "name": "Lera Stiedemann",
            "tel": "941.114.5487 x086",
            "address": "0645 O'Connell Pike",
            "opening_hours": "08:00",
            "description": "Omnis nulla veritatis impedit praesentium. Deserun",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=3.0788818771849913",
            "viewCounts": 0,
            "createdAt": "2022-02-16T16:32:50.000Z",
            "updatedAt": "2022-02-16T16:32:50.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2022-02-16T16:32:50.000Z",
                "updatedAt": "2022-02-16T16:32:50.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 3,
            "name": "Davonte Cole",
            "tel": "1-768-671-0637 x1246",
            "address": "7225 Libbie Streets",
            "opening_hours": "08:00",
            "description": "Est beatae sunt soluta dolorem. Dolor voluptatibus",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=31.135046447042434",
            "viewCounts": 0,
            "createdAt": "2022-02-16T16:32:50.000Z",
            "updatedAt": "2022-02-16T16:32:50.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2022-02-16T16:32:50.000Z",
                "updatedAt": "2022-02-16T16:32:50.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 4,
            "name": "Isobel Pouros",
            "tel": "1-021-801-8943 x88311",
            "address": "68538 Jacques Plaza",
            "opening_hours": "08:00",
            "description": "Molestiae repellendus quod ratione illum aspernatu",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=95.3728311384579",
            "viewCounts": 0,
            "createdAt": "2022-02-16T16:32:50.000Z",
            "updatedAt": "2022-02-16T16:32:50.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2022-02-16T16:32:50.000Z",
                "updatedAt": "2022-02-16T16:32:50.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 5,
            "name": "Rafael Runte",
            "tel": "004-897-7359 x991",
            "address": "048 Howe Lake",
            "opening_hours": "08:00",
            "description": "Facere ipsam provident non enim exercitationem.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=45.488202684824365",
            "viewCounts": 0,
            "createdAt": "2022-02-16T16:32:50.000Z",
            "updatedAt": "2022-02-16T16:32:50.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2022-02-16T16:32:50.000Z",
                "updatedAt": "2022-02-16T16:32:50.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 6,
            "name": "Mr. Bessie Wuckert",
            "tel": "701.174.6741 x52704",
            "address": "915 Magnus Ports",
            "opening_hours": "08:00",
            "description": "Et rem nam sit.\nEarum enim corporis veritatis quis",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=2.069586190723638",
            "viewCounts": 0,
            "createdAt": "2022-02-16T16:32:50.000Z",
            "updatedAt": "2022-02-16T16:32:50.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2022-02-16T16:32:50.000Z",
                "updatedAt": "2022-02-16T16:32:50.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 7,
            "name": "Lora Nitzsche",
            "tel": "(756) 089-7097",
            "address": "86836 Waylon Landing",
            "opening_hours": "08:00",
            "description": "Voluptatem perspiciatis suscipit dolores distincti",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=37.313231840273595",
            "viewCounts": 0,
            "createdAt": "2022-02-16T16:32:50.000Z",
            "updatedAt": "2022-02-16T16:32:50.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2022-02-16T16:32:50.000Z",
                "updatedAt": "2022-02-16T16:32:50.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 8,
            "name": "Isidro Kshlerin",
            "tel": "1-552-520-3802 x1922",
            "address": "5542 Genevieve Walks",
            "opening_hours": "08:00",
            "description": "perferendis laborum autem",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=75.01471630989593",
            "viewCounts": 0,
            "createdAt": "2022-02-16T16:32:50.000Z",
            "updatedAt": "2022-02-16T16:32:50.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2022-02-16T16:32:50.000Z",
                "updatedAt": "2022-02-16T16:32:50.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 9,
            "name": "Myra Hirthe",
            "tel": "654-810-6166 x66787",
            "address": "7945 Mike Pines",
            "opening_hours": "08:00",
            "description": "Dolor ut necessitatibus doloremque sint totam. Ass",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=35.95350385685776",
            "viewCounts": 0,
            "createdAt": "2022-02-16T16:32:50.000Z",
            "updatedAt": "2022-02-16T16:32:50.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2022-02-16T16:32:50.000Z",
                "updatedAt": "2022-02-16T16:32:50.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 10,
            "name": "Hester Bartoletti",
            "tel": "218-693-6816",
            "address": "311 Schiller Hills",
            "opening_hours": "08:00",
            "description": "ea molestiae eum",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=63.39093753518732",
            "viewCounts": 0,
            "createdAt": "2022-02-16T16:32:50.000Z",
            "updatedAt": "2022-02-16T16:32:50.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2022-02-16T16:32:50.000Z",
                "updatedAt": "2022-02-16T16:32:50.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        }
    ],
    "categories": [
        {
            "id": 1,
            "name": "中式料理",
            "createdAt": "2022-02-16T16:32:50.000Z",
            "updatedAt": "2022-02-16T16:32:50.000Z"
        },
        {
            "id": 2,
            "name": "日本料理",
            "createdAt": "2022-02-16T16:32:50.000Z",
            "updatedAt": "2022-02-16T16:32:50.000Z"
        },
        {
            "id": 3,
            "name": "義大利料理",
            "createdAt": "2022-02-16T16:32:50.000Z",
            "updatedAt": "2022-02-16T16:32:50.000Z"
        },
        {
            "id": 4,
            "name": "墨西哥料理",
            "createdAt": "2022-02-16T16:32:50.000Z",
            "updatedAt": "2022-02-16T16:32:50.000Z"
        },
        {
            "id": 5,
            "name": "素食料理",
            "createdAt": "2022-02-16T16:32:50.000Z",
            "updatedAt": "2022-02-16T16:32:50.000Z"
        },
        {
            "id": 6,
            "name": "美式料理",
            "createdAt": "2022-02-16T16:32:50.000Z",
            "updatedAt": "2022-02-16T16:32:50.000Z"
        },
        {
            "id": 7,
            "name": "複合式料理",
            "createdAt": "2022-02-16T16:32:50.000Z",
            "updatedAt": "2022-02-16T16:32:50.000Z"
        }
    ],
    "categoryId": "",
    "page": 1,
    "totalPage": [
        1,
        2,
        3,
        4,
        5
    ],
    "prev": 1,
    "next": 2
}

export default {
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantsNavPills,
    RestaurantsPagination
  },
  data () {
    return {
      restaurants: [],
      categories: [],
      categoryId: -1,
      currentPage: 1,
      totalPage: [],
      previousPage: -1,
      nextPage: -1

    }
  },
  created(){
    this.fetchRestaurants()
  },
  methods: {
    fetchRestaurants () {
      const {
        restaurants,
        categories,
        categoryId,
        page,
        totalPage,
        prev,
        next
      } = dummyData
      this.restaurants = restaurants
      this.categories = categories
      this.categoryId = categoryId
      this.currentPage = page
      this.totalPage = totalPage
      this.previousPage = prev
      this.nextPage = next
    }
  }
}
</script>