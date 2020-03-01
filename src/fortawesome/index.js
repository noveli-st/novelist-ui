import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'

import {
    faSearch,
    faPenNib,
    faUsers,
    faFlag,
    faBackspace,
    faExclamationTriangle,
    faIdCard,
    faWallet,
    faBookReader,
    faGlasses,
    faPenAlt,
    faComments,
    faChartArea,
    faInbox,
    faUserPlus,
    faUserCog,
    faQuestionCircle,
    faSignInAlt,
    faSignOutAlt,
    faTimes,
    faInfoCircle,
    faRecycle,
    faCalendarDay,
    faArrowAltCircleRight
} from '@fortawesome/free-solid-svg-icons'

import {
    faFacebook,
    faInstagram,
    faTwitter
} from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
    faFacebook,
    faInstagram,
    faTwitter,
    faSearch,
    faPenNib,
    faUsers,
    faFlag,
    faBackspace,
    faExclamationTriangle,
    faIdCard,
    faWallet,
    faBookReader,
    faGlasses,
    faPenAlt,
    faComments,
    faChartArea,
    faInbox,
    faUserPlus,
    faUserCog,
    faQuestionCircle,
    faSignInAlt,
    faSignOutAlt,
    faTimes,
    faInfoCircle,
    faRecycle,
    faCalendarDay,
    faArrowAltCircleRight
)

Vue.component('font-awesome-icon', FontAwesomeIcon)