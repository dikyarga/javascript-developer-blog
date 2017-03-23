<template>
<div class="">
    <el-button type="primary" @click.native="backToList">back to list</el-button>
    <br/>
    <br/>
    <h2>Add new article</h2>
    <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="Title">
            <el-input v-model="form.title" @blur="slugIt()"></el-input>
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
  <el-form-item label="Author">
      <el-input v-model="form.author"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">Add article</el-button>
    <el-button>Cancel</el-button>
  </el-form-item>
</el-form>
  </div>
</template>

<script>
import slug from 'slug'
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
    methods: {
        backToList() {
            this.$router.push('/articles/')
        },
        onSubmit() {
            let self = this
            this.axios.post('/articles/', self.form).then(x => {
                if (x.status) {
                    self.$router.push('/articles')
                } else {
                    console.log('something wrong');
                }
            })
            console.log('submit!');
        },
        slugIt() {
            this.form.slug = slug(this.form.title, {
                lower: true
            })
        },
    }
}
</script>
