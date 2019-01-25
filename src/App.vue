<template>
    <div id="app">
        <NavBar></NavBar>
        <router-view></router-view>
        <LogDrawer></LogDrawer>
        <!--<Home></Home>-->
    </div>

</template>

<script>

    import NavBar from "@/components/NavBar";
    import LogDrawer from "@/components/LogDrawer";
    import Home from "@/views/Home";

    export default {
        name: 'app',
        components: {
            NavBar,
            LogDrawer,
            Home,
        }
    }
</script>

<style>

</style>
