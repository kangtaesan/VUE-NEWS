import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import ItemView from '../views/ItemView.vue';
import UserView from '../views/UserView.vue';
// import createListView from '../views/CreateListView.js';
import { createWebHistory, createRouter } from 'vue-router';
import store from '../store/index'

const routes = [
    {
        //path : url 주소
        path: '/',
        //redirect : 다시 해당 url 주소로 요청하는 것
        redirect: '/news'
        //로그인이 안되어 있을 때 로그인 페이지를 요청(리다이렉트)하듯이
        //사용자에게 진행과정 중 필요한 컴포넌트를 띄우고 다시 기존 진행과정으로 보내는 형태
    },
    {
        //path : url 주소
        path: '/news',
        name: 'news',
        // component: url 주소로 갔을 때 표시될 컴포넌트
        component: NewsView,
        // component: createListView('NewsView'),

        //beforeEnter는 라우트에 진입할 때만 트리거 되는 속성
        beforeEnter: (to, from, next) => {
            store.dispatch('FETCH_LIST', to.name)
                .then(() => {
                    console.log('fetched');
                    next();
                })
                .catch((error) => {
                    console.log(error);
                })
            // console.log('to', to); //이동할 URL의 라우팅 정보
            // console.log('from', from); //현재 URL의 라우팅 정보
            // console.log('next', next); //function
            // next(); //next를 호출해야만 이동 가능하다.
        }
    },
    {
        //path : url 주소
        path: '/ask',
        name: 'ask',
        // component: url 주소로 갔을 때 표시될 컴포넌트
        component: AskView,
        // component: createListView('AskView'),
        beforeEnter: (to, from, next) => {
            store.dispatch('FETCH_LIST', to.name)
                .then(() => {
                    console.log('fetched');
                    next();
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    },
    {
        //path : url 주소
        path: '/jobs',
        name: 'jobs',
        // component: url 주소로 갔을 때 표시될 컴포넌트
        component: JobsView,
        // component: createListView('JobsView'),
        beforeEnter: (to, from, next) => {
            store.dispatch('FETCH_LIST', to.name)
                .then(() => {
                    console.log('fetched');
                    next();
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    },
    {
        //path : url 주소
        path: '/item/:id',
        // component: url 주소로 갔을 때 표시될 컴포넌트
        component: ItemView,
    },
    {
        //path : url 주소
        //클릭된 아이디 값을 유저로 넘기기 위해 파라미터 콜론(:)으로 라우트를 매칭
        path: '/user/:id',
        // component: url 주소로 갔을 때 표시될 컴포넌트
        component: UserView,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router 