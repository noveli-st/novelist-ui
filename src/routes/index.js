import VueRouter            from 'vue-router'

import cmpIndex             from '../components/index/Index'
import cmpBooks             from '../components/content/Books'
import cmpReviews           from '../components/content/Reviews'
import cmpWriters           from '../components/content/Writers'
import cmpReviewers         from '../components/content/Reviewers'
import cmpRegInfo           from '../components/mail/RegistrationInfo'
import cmpRegSuccess        from '../components/mail/RegistrationSuccess'
import cmpResInfo           from '../components/mail/ResetpassInfo'
import cmpResSuccess        from '../components/mail/ResetpassSuccess'

import cmpSettings          from '../components/personal/settings/Settings'
import cmpAccount           from '../components/personal/settings/Account'
import cmpAccountTerminate  from '../components/personal/settings/Terminate'
import cmpProfileEdit       from '../components/personal/settings/Profile'
import cmpBooksList         from '../components/personal/workroom/BooksList'
import cmpEditBook          from '../components/personal/workroom/EditBook'
import cmpCyclesList        from '../components/personal/workroom/CyclesList'
import cmpEditCycle         from '../components/personal/workroom/EditCycle'

import cmp404               from '../components/errors/Error404'

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
            path: '/settings',
            component: cmpSettings
        },
        {
            path: '/account',
            component: cmpAccount
        },
        {
            path: '/account/terminate',
            component: cmpAccountTerminate
        },
        {
            path: '/profile/edit',
            component: cmpProfileEdit
        },
        {
            path: '/books-list',
            component: cmpBooksList
        },
        {
            path: '/edit-book',
            component: cmpEditBook
        },
        {
            path: '/cycles-list',
            component: cmpCyclesList
        },
        {
            path: '/edit-cycle',
            component: cmpEditCycle
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
