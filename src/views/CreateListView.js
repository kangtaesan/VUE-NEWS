import ListView from "./ListView.vue"
import { h } from 'vue'

function createListView(name){
    return {
        //재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리

        //name(속성): name(인자) / 인자부분에 넣는 name이 routes 폴더 아래 정리한 이름으로 된다. 
        name: name, //name: 'NewsView' 등이 되는 것이다.
        created() {
            this.$store.dispatch('FETCH_LIST', this.$route.name)
            .then(() => {
                console.log('fetched');
            })
            .catch((error) => {
                console.log(error);
            })
        },
        render() {
            return h(ListView);
        }
        //내부적으로 템플릿을 compilation(편집) 할 때 render 함수를 사용한다.
    }
}

export default createListView