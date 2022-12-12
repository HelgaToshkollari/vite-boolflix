<template lang="">
     <div class="row row-cols-1 row-cols-md-3 row-cols-lg-3 g-4 " >
        <div class="col" v-for="getMovie in store.theMovies ">
            <AppCard :movieInfos="getMovie"></AppCard>
        </div>
    </div>
    
</template>
<script>
import { store, fetchMovie } from "../store";
import AppCard from "./AppCard.vue";
export default {
    components:{ AppCard },
    data(){
        return{
            store
        }
    },
    created() {
        fetchMovie()
    },
}
</script>
<style lang="">
    
</style>