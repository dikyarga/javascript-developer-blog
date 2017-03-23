<template>
<div class="">
    <el-row>
        <el-col :span="20">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span style="line-height: 36px; font-size: 20px;">{{ article.title }}</span>
                    <el-button style="float: right; margin-right: 20px;">by {{ article.author[0].local.name }}</el-button>

                </div>
                <div class="">
                    {{ article.content }}
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
            article: {}
        }
    },
    created() {
        this.getItem()
    },
    methods: {
        getItem() {
            let self = this
            console.log('isi : ', self.$route.params.slug);
            this.axios.get('/articles/slug/' + self.$route.params.slug).then(article => {
                self.article = article.data.data
            })
        }
    }
}
</script>
<style>
map {
    width: 100%;
    height: 600px;
    display: block;
}
</style>
