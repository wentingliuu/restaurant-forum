<template>
  <ul class="nav nav-tabs mb-4">
    <li
      v-for="tab in tabs"
      :key="tab.id"
      class="nav-item"
    >
      <router-link
        :to="tab.path"
        class="nav-link"
      >
        {{ tab.title }}
      </router-link>
    </li>
  </ul>
</template>

<script>
import {v4 as uuidv4} from 'uuid'
export default {
  data () {
    return {
      tabs: [
        {
          id: uuidv4(),
          title: '首頁',
          path: '/restaurants'
        },
        {
          id: uuidv4(),
          title: '最新動態',
          path: '/restaurants/feeds'
        },
        {
          id: uuidv4(),
          title: 'TOP 10 人氣餐廳',
          path: '/restaurants/top'
        },
        {
          id: uuidv4(),
          title: '美食達人',
          path: '/users/top'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .nav-tabs {
    border-bottom: 1px solid #bd2333;
  }

  .nav-tabs .nav-link:focus,
  .nav-tabs .nav-link:hover,
  .nav-tabs .nav-item.show .nav-link,
  .nav-tabs .nav-link.active {
    border-color: #bd2333;
    background-color: #bd2333;
    color: white;
}
</style>