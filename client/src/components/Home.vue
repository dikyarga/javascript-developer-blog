<template>
<div class="">
    <router-view></router-view>
    <h2>Blogpost</h2>
    <el-row>
        <el-col :span="20">
            <el-card class="box-card" v-for="item in articles">
                <div slot="header" class="clearfix">
                    <span style="line-height: 36px; font-size: 20px;">{{ item.title }}</span>

                    <el-button style="float: right; " type="primary" @click.native="toDetailArticle(item.slug)">Countinue reading</el-button>
                    <el-button style="float: right; margin-right: 20px;">by {{ item.author[0].local.name }}</el-button>
                </div>
                <div class="">
                    {{ item.content }}
                </div>
                <br>
            </el-card>
        </el-col>
    </el-row>
</div>
</template>

<script>
export default {
    data() {
        return {
            articles: []
        }
    },
    created() {
        this.getData()
    },
    methods: {
        getData() {
            let self = this;
            this.axios.get('/home')
                .then(response => {
                    // JSON responses are automatically parsed.
                    console.log('response:', response.data);
                    self.articles = response.data.data
                })
                .catch(e => {
                    console.log(e);
                })
        },
        toDetailArticle(slug){
          this.$router.push('/question/' + slug)
        }
    }
}
</script>

<style>
.el-card {
    margin-bottom: 30px;
}
</style>
