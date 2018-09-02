<template>
    <v-toolbar>
        <v-toolbar-title @click="navigateTo('home')">Jabber</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-btn v-if="isLoggedIn" outline color="indigo">{{getUserName}}</v-btn>
            <v-btn v-if="isLoggedIn" @click="logout" outline color="indigo">Logout</v-btn>
            <v-btn v-else @click="navigateTo('login')" outline color="indigo">Log In</v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
    import {SET_TOKEN, SET_USER} from '@/store//mutation-types';

export default {
    name: 'page-header',
    data () {
        return {};
    },
    computed: {
        isLoggedIn () {
            return this.$store.getters.isUserLoggedIn;
        },
        getUserName () {
            return this.$store.getters.user.email;
        },
    },
    methods: {
        navigateTo (routeName) {
            this.$router.push({
                name: routeName,
            });
        },
        logout () {
            this.$store.dispatch(SET_TOKEN, null);
            this.$store.dispatch(SET_USER, null);

            this.navigateTo('home');
        },
    },
};
</script>
