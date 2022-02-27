<template>
  <div class="container py-5">
    <!-- AdminNav -->
    <AdminNav />

    <router-link
      to="/admin/restaurants/new"
      class="btn btn-primary mb-4"
    >
      New Restaurant
    </router-link>

    <!-- AdminRestaurantsTable -->
    <AdminRestaurantsTable />
  </div>
</template>

<script>
import AdminNav from './../components/AdminNav'
import AdminRestaurantsTable from './../components/AdminRestaurantsTable'

export default {
  components: {
    AdminNav,
    AdminRestaurantsTable
  }
}
</script>