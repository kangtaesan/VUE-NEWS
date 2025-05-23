<template>
    <div>
        <ul class="news-list">
            <li v-for="item in listItems" v-bind:key="item.id" class="post">
                <!-- 포인트 영역 -->
                <div class="points" v-if="item.points">
                    {{ item.points }}
                </div>
                <div class="points" v-else>
                    {{ item.points || 0 }}
                </div>
                <!-- 기타 정보영역 -->
                <div>
                    <!-- 타이틀 영역 -->
                    <p class="news-title">
                        <!-- template라는 가상의 태그를 사용하여 분기 처리 하는법 -->
                        <!-- v-if/v-else로 AskView에서 뿌려주던 router-link를 사용 가능 -->
                        <template v-if="item.domain">
                            <a v-bind:href="item.url">
                                {{ item.title }}
                            </a>
                        </template>
                        <template v-else>
                            <router-link :to="`/item/${item.id}`">
                                {{ item.title }}
                            </router-link>
                        </template>
                    </p>
                    <small class="link-text">
                        ({{ item.time_ago }}) by
                        <!-- 가상의 태그를 사용하지 않고 직접 태그에 v-if/v-else -->
                        <!-- 사용하여 분기처리 -->
                        <router-link v-if="item.user" v-bind:to="`/user/${item.user}`" class="link-text">
                            {{ item.user }}
                        </router-link>
                        <a v-else :href="item.url" class="link-text">
                            {{ item.domain }}
                        </a>
                        <!-- router-link 태그의 to는 문자열만 입력 가능하고 변수 사용이 불가능하다. -->
                        <!-- 모든 태그 안에 변수사용이 불가능하지만 가능하도록 도와주는 것이 v-bind -->

                        <!-- vue 개발자 도구창의 UserView탭을 보면 route 아래 params가 보이는데 -->
                        <!-- 그 아래 id가 찍히는 이유는 index.js에서 파라미터 콜론(:) 즉, :id로 지정해서이다. -->
                        <!-- 기존 해커뉴스는 $route 아래 쿼리값으로 url을 넘겨받았다. -->
                        <!-- 실무에서는 백엔드에서 쿼리값으로 넘겨받는 경우가 종종 있으므로 확인해보고 공부해보기 -->
                    </small>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import store from '../store/index'

//데이터 요청은 created나 beforeMount에서 많이 활용
export default {
    created() {
        // console.log(this.$route); 
        // const name = this.$route.name;
        // if (name === 'news') {
        //     this.$store.dispatch('FETCH_NEWS');
        // } else if (name === 'ask') {
        //     this.$store.dispatch('FETCH_ASKS');
        // } else if (name === 'jobs') {
        //     this.$store.dispatch('FETCH_JOBS');
        // }
    }, //각 created에 위치하던 로직을 route명에 따른 호출로 변경한다.
    computed: {
        listItems() {
            //return this.$store.state.list;
            return store.state.list;
            // const name = this.$route.name;
            // if (name === 'news') {
            //     return this.$store.state.news;
            // } else if (name === 'ask') {
            //     return this.$store.getters.fetchedAsk;
            // } else {
            //     return this.$store.state.jobs;
            // }
        },
        //ask의 경우 store.js에서 정의한 getters에 state로 접근하는 로직이 잡혀있으므로
        //getters로 접근해주어 스크린에 나타나도록 한다.(state로 접근하면 안나옴)
    }
}
</script>

<style scoped>
.news-list {
    margin: 0;
    padding: 0;
}

.post {
    list-style: none;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
}

.points {
    width: 80px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #42b883;
}

.news-title {
    margin: 0;
}

.link-text {
    color: #828282;
}
</style>