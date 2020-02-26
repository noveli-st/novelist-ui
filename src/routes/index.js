import VueRouter from 'vue-router'
import cmpIndex from '../components/index/Index'
import cmpBooks from '../components/content/Books'
import cmpReviews from '../components/content/Reviews'
import cmp404 from '../components/errors/404'

export default new VueRouter({
  routes: [
    {
        path: '',
        component: cmpIndex
    },
    {
        path: '/books',
        component: cmpBooks
    },
    {
        path: '/reviews',
        component: cmpReviews
    },
    {
        path: '*',
        component: cmp404
    }
  ],
  mode: 'history'
})
