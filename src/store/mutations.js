export default {
    //state로 넘겨주어야하기에 state를 첫번째 인자로 선언하고
    //두번째 인자는 response.data를 newsData라는 이름으로 받아주어 연결해준다.
    // SET_NEWS(state, newsData) {
    //     state.news = newsData;
    // },
    // SET_JOBS(state, jobsData) {
    //     state.jobs = jobsData;
    // },
    // SET_ASKS(state, asksData) {
    //     state.asks = asksData;
    // },
    SET_USER(state, userData) {
        state.user = userData;
    },
    SET_ITEM(state, itemData) {
        state.item = itemData;
    },
    START_SPINNER(state){
        state.loadingStatus = true;
    },
    END_SPINNER(state){
        state.loadingStatus = false;
    },
    SET_LIST(state, listData) {
        state.list = listData;
    }
}