<template lang="">
     <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 " >
        <div class="col" v-for="getMovie in store.theMovies ">
            <AppCard :mediaInfos="getMovie"></AppCard>

        </div>
        <div class="col" v-for="getSerie in store.theSeries ">
            <AppCard :mediaInfos="getSerie"></AppCard>

        </div>
    </div>
    
</template>
<script>
import { store, fetchMovie,  fetchSeries } from "../store";
import AppCard from "./AppCard.vue";
export default {
    components:{ AppCard },
    data(){
        return{
            store
        }
    },
    created() {
        fetchMovie();
        fetchSeries();
    },
}
</script>
<style lang="">
    
</style>