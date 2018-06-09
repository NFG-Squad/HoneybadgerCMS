<template lang="pug">
  div
    ul
      li(v-for='user in users')
        a.test(v-bind:href="'/u/' + user.name") {{ user.name }} : {{ user.age }}
</template>

<script>
  export default {
    props: ['title', 'users']
  }
</script>

<style lang="css">
  .test {
    color: pink;
    font-size: 20px;
  }
</style>
