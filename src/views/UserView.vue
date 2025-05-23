<template>
  <div>
    <!-- UserView에서 state로 바로 접근하는 것이 아니라 UserProfile을 따로 만들어 연결 -->
    <user-profile :info="userInfo">
      <template v-slot:username>{{ userInfo.id }}</template>
      <template v-slot:time>{{ 'Joined ' + userInfo.created }}</template>
      <template v-slot:karma>{{ userInfo.karma }}</template>
    </user-profile>
  </div>
</template>

<script>
import UserProfile from '@/components/UserProfile.vue';

export default {
  components: {
    UserProfile,
  },
  computed: {
    userInfo(){
      return this.$store.state.user;
    }
  },
  //this.$route.params.id를 api에 태워서 호출하는 것 / axios 호출
  created(){
    const userName = this.$route.params.id;
    /* axios.get(`https://api.hnpwa.com/v0/user/${userName}.json`); */
    //api > index.js로 넘겨 함수 생성
    this.$store.dispatch('FETCH_USER', userName);
  },
  
}
</script>

<style>

</style>