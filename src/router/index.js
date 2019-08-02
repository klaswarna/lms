import Vue from 'vue'
import Router from 'vue-router'
import StartPage from '@/components/StartPage'
import Addition from '@/components/Addition'
import Subtraktion from '@/components/Subtraktion'
import Multiplikation from '@/components/Multiplikation'
import Division from '@/components/Division'
import Avrundning from '@/components/Avrundning'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name: 'StartPage',
        component: StartPage,
    },
    {
        path: '/addition',
        name: 'Addition',
        component: Addition,
        meta: {title: "Sune"}
    },
    {
        path: '/subtraktion',
        name: 'Subtraktion',
        component: Subtraktion
    },
    {
        path: '/multiplikation',
        name: 'Multiplikation',
        component: Multiplikation
    },
    {
        path: '/division',
        name: 'Division',
        component: Division
    },
    {
        path: '/avrundning',
        name: 'Avrundning',
        component: Avrundning
    }

  ]
})
