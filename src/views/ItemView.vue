<template>
  <div>
    <section>
      <!-- 사용자 정보 -->
      <user-profile :info="fetchedItem">
        <template v-slot:username>
          <router-link :to="`/user/${fetchedItem.user}`">{{ fetchedItem.user }}</router-link>
        </template>
        <template v-slot:time>{{ 'Posted ' + fetchedItem.time_ago }}</template>
      </user-profile>
    </section>
    <section>
      <h2>{{ fetchedItem.title }}</h2>
    </section>
    <section>
      <!-- 질문 댓글 -->
      <div v-html="fetchedItem.content"></div>
      <!-- html태그가 다 보이는 경우 v-html 디렉티브를 사용하여 기존에 {{ 입력 }}로 스크린에 -->
      <!-- 바인딩 했던 것을 v-html="입력"으로 변경하고 {{  }}는 지워준다. -->
    </section>
  </div>
</template>

<script>
import UserProfile from '@/components/UserProfile.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    UserProfile,
  },
  computed: {
    ...mapGetters(['fetchedItem']),
    /* ItemId(){
      return this.$store.state.item;
    } */
  },
  created() {
    const itmeId = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', itmeId);
    
  }
}
</script>

<style scoped>

</style>