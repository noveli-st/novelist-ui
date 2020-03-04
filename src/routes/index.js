import VueRouter        from 'vue-router'

import cmpIndex         from '../components/index/Index'
import cmpBooks         from '../components/content/Books'
import cmpReviews       from '../components/content/Reviews'
import cmpWriters       from '../components/content/Writers'
import cmpReviewers     from '../components/content/Reviewers'
import cmpRegInfo       from '../components/mail/RegistrationInfo'
import cmpRegSuccess    from '../components/mail/RegistrationSuccess'
import cmpResInfo       from '../components/mail/ResetpassInfo'
import cmpResSuccess    from '../components/mail/ResetpassSuccess'
import cmp404           from '../components/errors/Error404'

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
            path: '/writers',
            component: cmpWriters
        },
        {
            path: '/reviewers',
            component: cmpReviewers
        },
        {
            path: '/registration-info',
            component: cmpRegInfo
        },
        {
            path: '/registration-success',
            component: cmpRegSuccess
        },
        {
            path: '/resetpass-info',
            component: cmpResInfo
        },
        {
            path: '/resetpass-success',
            component: cmpResSuccess
        },
        {
            path: '*',
            component: cmp404
        }
    ],
    mode: 'history',
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition)
            return savedPosition
        else
            return { x: 0, y: 0 }
    }  
})
