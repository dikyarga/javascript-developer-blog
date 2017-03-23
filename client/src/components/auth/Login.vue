<template>
<div class="">
    <router-view></router-view>
    <h2>Login</h2>
    <el-row>
        <el-col :span="12">
          <el-form ref="form" :model="form" label-width="120px">
              <el-form-item label="Email">
                  <el-input v-model="form.email"></el-input>
              </el-form-item>
              <el-form-item label="Password">
                  <el-input type="password" v-model="form.password"></el-input>
              </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="login">Login</el-button>
          <el-button>Cancel</el-button>
        </el-form-item>
      </el-form>
        </el-col>
    </el-row>
</div>
</template>

<script>
import axios from 'axios';
let host = 'http://localhost:3000/api';

export default {
    data() {
        return {
            form: {
              email: '',
              password: ''
            }
        }
    },
    created() {
    },
    methods: {
        login(){
          let self = this
          axios.post(host + '/auth/login/', self.form).then(x => {
              if (x.data.success) {
                localStorage.setItem('token', x.data.token)
                  self.$router.push('/')
              } else {
                  console.log('something wrong');
              }
          })
          console.log('submit!');
        }
    }
}
</script>

<style>
.el-card {
    margin-bottom: 30px;
}
</style>
