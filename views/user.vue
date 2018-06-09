<template lang="pug">
  div
    h1 {{ title || "Hello world!" }}
    div(v-if="user")
      p(class="test2") {{user.name}}
      p I am {{user.age}} years old
    div(v-else)
      p User Not Found
    h3
      a(v-bind:href="'/'") Back
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
