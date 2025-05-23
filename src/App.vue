<template>
  <div id="app">
    <!-- 파스칼케이스로 등록한 컴포넌트를 스크립트단에 들고올 때 소문자단어 사이 하이픈으로 연결 -->
    <!-- kebab-case라고 불리우며 VSCode에서 제공하는 플러그인, art하고 누르면 해당 컴포넌트 -->
    <!-- 내용을 확인할 수 있는 편리한 기능을 제공하기에 사용 -->
    <tool-bar></tool-bar>
    <!-- Vue3 router-view와 transition 사용법 -->
    <router-view v-slot="{ Component }">
      <transition class="page">
        <component :is="Component" />
      </transition>
    </router-view>
    <spinner-loading :loading="fetchedSpinner"></spinner-loading>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar';
import SpinnerLoading from './components/SpinnerLoading.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    ToolBar,
    SpinnerLoading,
  },
  computed: {
    ...mapGetters(['fetchedSpinner']),
  },
}
</script>

<style>
a {
  color: #34495e;
  text-decoration: none;
}
a:hover {
  color: #42b883;
  text-decoration: underline;
}
a.router-link-exact-active.router-link-active {
  text-decoration: underline;
}

/* Router Transition */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
