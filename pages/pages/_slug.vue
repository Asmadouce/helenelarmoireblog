<template>
  <div>
    <h1>{{ $route.params.slug }}</h1>
    {{ $store.getters.getPage($route.params.slug) }}
  </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>

</style>
