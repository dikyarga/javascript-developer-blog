<template>
<div id="app">

    <el-menu  :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1" @click.native="toHome">JS Developer Blog</el-menu-item>
        <el-submenu index="2">
            <template slot="title">Blogpost
            </template>
            <el-menu-item index="2-1"><router-link to="/articles">Show All</router-link></el-menu-item>
            <el-menu-item index="2-2">Create</el-menu-item>
          </el-submenu>
      <el-menu-item index="3" style="float: right;" @click.native="logout" v-if="isLogined">Logout</el-menu-item>
      <el-menu-item index="3" style="float: right;" v-if="!isLogined"><router-link to="/login">Login</router-link></el-menu-item>
      <el-menu-item index="3" style="float: right;" v-if="!isLogined"><router-link to="/register">Register</router-link></el-menu-item>
    </el-menu>
<br/>
<br/>

<el-row :gutter="10">
  <el-col :xs="24" :sm="24" :md="24" :lg="20" :offset="3">
    <router-view></router-view>
  </el-col>
</el-row>

    <!-- <img src="./assets/logo.png"> -->
    <!-- <h1>{{ msg }}</h1> -->
    <!-- <el-button @click.native="startHacking">Let's do it</el-button> -->
  </div>
</template>

<script>
export default {
    data() {
        return {
            msg: 'Pakai Vue 2.0 sekarang!',
            activeIndex: '1',
            activeIndex2: '2',
            isLogined: false
        }
    },
    methods: {
        toHome(){
          this.$router.push('/')
        },
        logout(){
          localStorage.removeItem('token')
          this.isLogined = false
        },
        startHacking() {
            this.$notify({
                title: 'It Works',
                message: 'We have laid the groundwork for you. Now it\'s your time to build something epic!',
                duration: 6000
            })
        },
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        isLogin(){
          if (localStorage) {
            this.isLogined = true
          }
        }
    }
}
</script>

<style>
body {
    font-family: Helvetica, sans-serif;
}

.el-menu-item a {
  display: block;
}
</style>
