import Home from './components/Home.vue'
import Login from './components/auth/Login.vue'
import Register from './components/auth/Register.vue'
import User from './components/user/User.vue'

import Article from './components/article/Article.vue'
import ArticleAll from './components/article/ArticleAll.vue'
import ArticleDetail from './components/article/ArticleDetail.vue'
import ArticleNew from './components/article/ArticleNew.vue'
import ArticleEdit from './components/article/ArticleEdit.vue'

export const routes = [
  { path: '/login', component: Login},
  { path: '/register', component: Register},
  { path : '', component: Home },
  { path : '/users', component: User},

  { path : '/articles', component:Article, children: [
    {path: '', component: ArticleAll},
    {path: 'new', component: ArticleNew},
    {path: ':id', component: ArticleDetail},
    {path: ':id/edit', component: ArticleEdit},
    {path: '/article/:slug', component: ArticleDetail}

  ]},
]
