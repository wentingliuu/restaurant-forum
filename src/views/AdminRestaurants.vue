<template>
  <div class="container py-5">
    <!-- AdminNav -->
    <AdminNav />

    <a
      href="#"
      class="btn btn-primary mb-4"
    >
      New Restaurant
    </a>

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