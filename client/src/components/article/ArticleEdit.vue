<template>
<div class="">
    <el-button type="primary" @click.native="backToList">back to list</el-button>
    <br/>
    <br/>
    <h2>Edit an article</h2>
    <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="Title">
            <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="Slug">
            <el-input placeholder="slug" v-model="form.slug">
                <template slot="prepend">http://dikyarga.com/
                </template>
              </el-input>
      </el-form-item>
      <el-form-item label="Content">
    <el-input type="textarea" v-model="form.content"></el-input>
  </el-form-item>
  <el-form-item label="User ID">
      <el-input v-model="form.author"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">Update article</el-button>
    <el-button>Cancel</el-button>
  </el-form-item>
</el-form>
  </div>
</template>

<script>
export default {
    data() {
        return {
          form: {
            title: '',
            slug: '',
            content: '',
            author: ''
          }
        }
    },
    created() {
      this.getItem()
    },
    methods: {
        backToList() {
            this.$router.push('/articles/')
        },
        onSubmit() {
          let self = this
          this.axios.put('/articles/' + self.$route.params.id, self.form).then(x => {
            console.log(x);
              if(x.status){
                self.$router.push('/articles')
              } else {
                console.log('something wrong');
              }
          })
          console.log('submit!');
        },
        getItem(){
          let self = this
          this.axios.get('/articles/' + self.$route.params.id).then(item => {
            self.form = item.data.data
          })
        }
    }
}
</script>
