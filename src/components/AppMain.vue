<template lang="">
    <div class="p-4">
       
        <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 " >
            <div class="col" v-for="getMovie in store.theMovies ">
                <AppCard :mediaInfos="getMovie"></AppCard>
                
            </div>
            <div class="col" v-for="getSerie in store.theSeries ">
                <AppCard :mediaInfos="getSerie"></AppCard>
                
            </div>
        </div>
         <div class="py-3 d-flex justify-content-end">
            <Pagination :page="store.page" @changePage="onPageChange"></Pagination>
        </div>
    </div>
</template>
<script>
import { store, fetchMovie,  fetchSeries } from "../store";
import AppCard from "./AppCard.vue";
import Pagination from "./Pagination.vue";
export default {
    components:{ AppCard , Pagination},
    data(){
        return{
            store
        }
    },
    methods:{
        onPageChange(newPage){
            store.page = newPage;
            fetchMovie();
            fetchSeries();
        }
    },
  
}
</script>
<style lang="">
    
</style>