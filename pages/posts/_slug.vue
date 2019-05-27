<template>
    <div>
        <h1>{{ $route.params.slug }}</h1>
        {{ $store.getters.getPost($route.params.slug) }}
    </div>
</template>

<script>
    export default {

    }
</script>