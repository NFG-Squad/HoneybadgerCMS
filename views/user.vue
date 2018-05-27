<template>
    <div>
        <h1>{{ title }}</h1>
        <p class="test2">{{(user && user.name) ? user.name : '?' }}</p>
        <p>I am {{(user && user.age) ? user.age : '?'}} years old</p>
    </div>
</template>

<script>
export default {
    data: function() {
        return {}
    },
    created: function() {
        console.log('this')
        console.log(this.user)
        if (!this.user) console.log('bad user');
    }
}
</script>

<style>
.test2 {
    color: blue;
}
</style>
