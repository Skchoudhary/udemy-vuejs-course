import { createRouter, createWebHistory } from 'vue-router';

import CoachesList from './pages/coaches/CoachesList.vue';
import CoachDetails from './pages/coaches/CoachDetails.vue';
import CoachRegistration from './pages/coaches/CoachRegistration.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestReceived from './pages/requests/RequestReceived.vue';
import NotFound from './pages/NotFound.vue';
import UserAuth from './pages/auth/UserAuth.vue';
import store from './store/index.js';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/coaches' },
        { path: '/coaches', component: CoachesList },
        {
            path: '/coaches/:id', component: CoachDetails, props: true, children: [
                { path: 'contact', component: ContactCoach }
            ]
        },
        { path: '/register', component: CoachRegistration, meta:{requireAuth: true} },
        { path: '/requests', component: RequestReceived , meta:{requireAuth: true}},
        { path: '/auth', component: UserAuth , meta:{requireUnAuth: true}},
        { path: '/:notFound(.*)', component: NotFound }
    ]
});

router.beforeEach(function(to, _, next){
    if(to.meta.requireAuth && !store.getters.isLoggedIn){
        next('/auth');
    } else if(to.meta.requireUnAuth && store.getters.isLoggedIn){
        next('/coaches');
    } else{
        next();
    }
});

export default router;
