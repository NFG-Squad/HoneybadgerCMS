<template lang="pug">
  div
    h1 {{title}}
    p Welcome to the {{title}} demo. Click a link:
    button(type='button', name='button', v-on:click='addUser(username, age)') Say FOO
    input(v-model='username', placeholder='name')
    input(v-model='age', placeholder='age')
    br
    input(v-model='message', placeholder='edit me', value='message')
    message-comp(:message='message')
    users(:users='users')
    p
      a(href='/') English
      a(href='/?lang=es-mx') Español
    h3 {{ lang.pack["this.is.a.key"] || "Hello!"}}
    h3 {{ lang.pack["this.is.another.key"] || "Welcome!"}}
</template>

<script>
import messageComp from './components/message-comp.vue';
import users from './components/users.vue';
import exampleMixin from './mixins/exampleMixin';
export default {
    mixins: [exampleMixin],
    data: function () {
        return {
        }
    },
    components: {
        messageComp: messageComp,
        users: users
    }
}
</script>

<style lang="css">
</style>
