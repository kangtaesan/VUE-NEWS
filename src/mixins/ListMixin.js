export default {
    //재사용할 컴포넌트 옵션 & 로직
    created(){
        // this.$store.dispatch('FETCH_LIST', this.$route.name)
        //     .then(() => {
        //         console.log('fetched');
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     })
    },
    mounted() {
        console.log('In_Vuex_spinner_end')
    }
}