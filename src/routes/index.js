import VueRouter            from 'vue-router'

import store                from '../store/index.js'

import cmpIndex             from '../components/index/Index'
import cmpBooks             from '../components/content/Books'
import cmpReviews           from '../components/content/Reviews'
import cmpWriters           from '../components/content/Writers'
import cmpReviewers         from '../components/content/Reviewers'
import cmpRegInfo           from '../components/mail/RegistrationInfo'
import cmpRegSuccess        from '../components/mail/RegistrationSuccess'
import cmpResInfo           from '../components/mail/ResetpassInfo'
import cmpResSuccess        from '../components/mail/ResetpassSuccess'
import cmpActivation        from '../components/mail/Activation'

import cmpSettings          from '../components/personal/settings/Settings'
import cmpAccount           from '../components/personal/settings/Account'
import cmpAccountTerminate  from '../components/personal/settings/Terminate'
import cmpProfileEdit       from '../components/personal/settings/Profile'

import cmpWorkroom          from '../components/personal/workroom/Workroom'
import cmpBooksList         from '../components/personal/workroom/BooksList'
import cmpEditBook          from '../components/personal/workroom/EditBook'
import cmpEditBookContent   from '../components/personal/workroom/EditBookContent'
import cmpEditBookMentions  from '../components/personal/workroom/EditBookMentions'
import cmpEditBookSettings  from '../components/personal/workroom/EditBookSettings'
import cmpEditBookTerminate from '../components/personal/workroom/EditBookTerminate'
import cmpCyclesList        from '../components/personal/workroom/CyclesList'
import cmpEditCycle         from '../components/personal/workroom/EditCycle'


import cmpProfile           from '../components/profile/Profile'
import cmpProfileInfo       from '../components/profile/Info'
import cmpProfileBooks      from '../components/profile/Books'
import cmpProfileCycles     from '../components/profile/Cycles'
import cmpProfileReviews    from '../components/profile/Reviews'
import cmpProfileLibrary    from '../components/profile/Library'
import cmpProfileFollows    from '../components/profile/Follows'
import cmpProfileActivity   from '../components/profile/Activity'

import cmpBook              from '../components/book/Book'
import cmpBookInfo          from '../components/book/Info'
import cmpBookMentions      from '../components/book/Mentions'
import cmpBookIllustrations from '../components/book/Illustrations'
import cmpBookQuotations    from '../components/book/Quotations'
import cmpBookReviews       from '../components/book/Reviews'
import cmpBookReview        from '../components/book/Review'
import cmpBookGuestbook     from '../components/book/Guestbook'
import cmpBookInBookmarks   from '../components/book/InBookmarks'
import cmpBookActivity      from '../components/book/Activity'
import cmpBookStatistic     from '../components/book/Statistic'

import cmpReader            from '../components/reader/Reader'

import cmp404               from '../components/errors/Error404'

function guardMyroute(to, from, next) {
    if(store.getters.isAuthenticated)
        next()
    else
        next('/')
}

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
            path: '/reader/:id',
            meta: {
                layout: 'reader'
            },
            component: cmpReader
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
            path: '/activate/:uid/:token',
            component: cmpActivation
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
            beforeEnter: guardMyroute,
            component: cmpSettings
        },
        {
            path: '/account',
            beforeEnter: guardMyroute,
            component: cmpAccount
        },
        {
            path: '/account/terminate',
            beforeEnter: guardMyroute,
            component: cmpAccountTerminate
        },
        {
            path: '/my-workroom',
            beforeEnter: guardMyroute,
            component: cmpWorkroom
        },
        {
            path: '/books/my',
            beforeEnter: guardMyroute,
            component: cmpBooksList
        },
        {
            path: '/book/:id/edit',
            beforeEnter: guardMyroute,
            component: cmpEditBook,
            children: [
                {
                    path: '/',
                    redirect: 'content'
                },
                {
                    path: 'content',
                    component: cmpEditBookContent
                },
                {
                    path: 'settings',
                    component: cmpEditBookSettings
                },
                {
                    path: 'mentions',
                    component: cmpEditBookMentions
                },
                {
                    path: 'terminate',
                    component: cmpEditBookTerminate
                }
            ]
        },
        {
            path: '/my-cycles',
            beforeEnter: guardMyroute,
            component: cmpCyclesList
        },
        {
            path: '/my-cycle',
            beforeEnter: guardMyroute,
            component: cmpEditCycle
        },
        {
            path: '/profile/edit',
            beforeEnter: guardMyroute,
            component: cmpProfileEdit
        },
        {
            path: '/books-list',
            beforeEnter: guardMyroute,
            component: cmpBooksList
        },
        {
            path: '/cycles-list',
            beforeEnter: guardMyroute,
            component: cmpCyclesList
        },
        {
            path: '/edit-cycle',
            beforeEnter: guardMyroute,
            component: cmpEditCycle
        },
        {
            path: '/book/:id',
            component: cmpBook,
            children: [
                {
                    path: '/',
                    redirect: 'info'
                },
                {
                    path: 'info',
                    component: cmpBookInfo,
                },
                {
                    path: 'mentions',
                    component: cmpBookMentions,
                },
                {
                    path: 'illustrations',
                    component: cmpBookIllustrations,
                },
                {
                    path: 'quotations',
                    component: cmpBookQuotations,
                },
                {
                    path: 'reviews',
                    component: cmpBookReviews,
                },
                {
                    path: 'review',
                    component: cmpBookReview,
                },
                {
                    path: 'guestbook',
                    component: cmpBookGuestbook,
                },
                {
                    path: 'in-bookmarks',
                    component: cmpBookInBookmarks,
                },
                {
                    path: 'activity',
                    component: cmpBookActivity,
                },
                {
                    path: 'statistic',
                    component: cmpBookStatistic,
                }
            ]
        },
        {
            path: '/profile/:id',
            component: cmpProfile,
            children: [
                {
                    path: '/',
                    redirect: 'info'
                },
                {
                    path: 'info',
                    component: cmpProfileInfo,
                },
                {
                    path: 'books',
                    component: cmpProfileBooks
                },
                {
                    path: 'cycles',
                    component: cmpProfileCycles
                },
                {
                    path: 'reviews',
                    component: cmpProfileReviews
                },
                {
                    path: 'library',
                    component: cmpProfileLibrary
                },
                {
                    path: 'follows',
                    component: cmpProfileFollows
                },
                {
                    path: 'activity',
                    component: cmpProfileActivity
                }
            ]
        },
        {
            path: '*',
            component: cmp404
        }
    ],
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition)
            return savedPosition
        else
            return { x: 0, y: 0 }
    }  
})
