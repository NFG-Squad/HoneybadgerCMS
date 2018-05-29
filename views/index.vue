<template>
    <div>
        <h1>{{title}}</h1>
        <p>Welcome to the {{title}} demo. Click a link:</p>
        <button type="button" name="button" v-on:click="addUser">Say FOO</button>
        <input v-model="message" placeholder="edit me">
        <message-comp :message="message"></message-comp>
        <users :users="users"></users>
        <p>
            <a href="/">English</a>
            <a href="/?lang=es-mx">Español</a>
        </p>
        <h3>{{ lang.pack["this.is.a.key"]}}</h3>
        <h3>{{ lang.pack["this.is.another.key"]}}</h3>
    </div>
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
