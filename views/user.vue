<template>
    <div>
        <h1>{{ title }}</h1>
        <div v-if="user">
          <p class="test2">{{user.name}}</p>
          <p>I am {{user.age}} years old</p>
        </div>
        <div v-else>
          <p>User not found.</p>
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {}
    }
}
</script>

<style>
.test2 {
    color: blue;
}
</style>
