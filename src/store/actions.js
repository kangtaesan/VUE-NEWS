import { fetchUserInfo, fetchItemId, fetchList } from '../api/index';
export default {
    //API를 Vuex에서 호출해야한다면 actions에서 해야한다.
    // FETCH_NEWS(context) {
    //     context.commit('START_SPINNER');
    //     fetchNewsList()
    //         .then(response => {
    //             //this.users = response.data; NewView.vue의 data인 users배열에 response의
    //             //data를 담을때처럼 Vuex로 들고왔으니 state의 news 배열에 담아준다.
    //             //actions를 state로 데이터를 넘겨주기 위해서는 구조상 mutations를 거쳐야한다.
    //             //context.commit('로직명', 넘겨줄 데이터)
    //             setTimeout(() => {
    //                 console.log(response.data);
    //                 context.commit('SET_NEWS', response.data);
    //                 context.commit('END_SPINNER');
    //                 console.log('fetched');
    //             }, 500);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    // },
    //destructuring 구조분해분법 (response) -> ({ data }) / conetext -> { commit }
    //response의 data를 가져온 것이고 인자 context의 commit을 따로 뺀 것이라 보면 된다.
    // FETCH_JOBS({ commit }) {
    //     commit('START_SPINNER');
    //     fetchJobsList()
    //         .then(({ data }) => {
    //             setTimeout(() => {
    //                 console.log(data);
    //                 commit('SET_JOBS', data);
    //                 commit('END_SPINNER');
    //                 console.log('fetched');
    //             }, 500);
    //             //context.commit('SET_JOBS', data);
    //         })
    //         .catch(error => console.log(error));
    // },
    // FETCH_ASKS({ commit }) {
    //     commit('START_SPINNER');
    //     fetchAskList()
    //         .then(({ data }) => {
    //             setTimeout(() => {
    //                 console.log(data);
    //                 commit('SET_ASKS', data);
    //                 commit('END_SPINNER');
    //                 console.log('fetched');
    //             }, 500);
    //         })
    //         .catch(error => console.log(error));
    // },
    /* FETCH_LIST({ commit }, pageName) {
        commit('START_SPINNER');
        return fetchList(pageName)
            .then((response) => {
                commit('SET_LIST', response.data);
                commit('END_SPINNER');
                console.log('fetched');
                return response;
            })
            .catch(error => console.log(error))
    }, */
    async FETCH_LIST(context, pageName) {
        context.commit('START_SPINNER');
        const response = await fetchList(pageName);
        context.commit('SET_LIST', response.data);
        context.commit('END_SPINNER');
        return response;
    },
    /* FETCH_USER({ commit }, userName) {
        return fetchUserInfo(userName)
            .then(({ data }) => {
                console.log(data);
                commit('SET_USER', data);
            })
            .catch(error => console.log(error))
    }, */
    async FETCH_USER({ commit }, userName) {
        const response = await fetchUserInfo(userName);
        commit('SET_USER', response.data);
        console.log(response.data);
    },
    /* FETCH_ITEM({ commit }, itemId) {
        return fetchItemId(itemId)
            .then(({ data }) => {
                console.log(data);
                commit('SET_ITEM', data);
            })
            .catch(error => console.log(error))
    }, */
    async FETCH_ITEM({ commit }, itemId) {
        const response = await fetchItemId(itemId)
        commit('SET_ITEM', response.data);
        console.log(response.data);
    },
    //호출함수 앞에 return을 넣는 이유는 화면에서 dispatch로 호출한 뒤에 then으로 promise 체이닝을
    //해야하는데 return값으로 데이터가 넘어오지않으면 비동기처리가 진행되지 않기 때문이다.
}