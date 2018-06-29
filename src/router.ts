import Vue from 'vue';
import Router from 'vue-router';
import PageNotFound from './views/PageNotFound.vue';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Signin from './views/Signin.vue';
import Dashboard from './views/Dashboard.vue';
import Overview from './views/dashboard/Overview.vue';
import DiscordOverview from './views/dashboard/discord/DiscordOverview.vue';
import DiscordWelcome from './views/dashboard/discord/DiscordWelcome.vue';

import store from './store';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter: (to, from, next) => { store.state.logged ? next('dashboard') : next(); }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signin',
      name: 'signin',
      component: Signin
    },
    {
      path: '/dashboard',
      component: Dashboard,
      children: [
        {
          path: '',
          name: 'overview',
          component: Overview,
          beforeEnter: (to, from, next) => { store.state.logged ? next() : next('/'); }
        },
        {
          path: 'discord',
          name: 'discord-overview',
          component: DiscordOverview,
          beforeEnter: (to, from, next) => { store.state.logged ? next() : next('/'); }
        },
        {
          path: 'discord/welcome',
          name: 'discord-welcome',
          component: DiscordWelcome,
          beforeEnter: (to, from, next) => { store.state.logged ? next() : next('/'); }
        }
      ]
    },
    {
      path: '**',
      name: 'page-not-found',
      component: PageNotFound
    }
  ]
});
