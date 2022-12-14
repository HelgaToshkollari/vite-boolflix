<template>
  <div class="bg-dark">
    
    <div class="container">
      <AppHeader @inputTitle="searchTitle"></AppHeader>
      <AppMain></AppMain>
    </div>
  </div>
 
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppCard from "./components/AppCard.vue";
import Pagination from "./components/Pagination.vue"
import { store, fetchMovie, fetchSeries  } from "./store";

export default{
  components:{AppMain , AppHeader,  AppCard ,Pagination},
  data(){
    return{
      store,

      
    }
  },
  methods:{
  
    searchTitle(getTitle){
      this.store.myTitle = getTitle;

      fetchMovie();
      fetchSeries();

    }

  },
 
 
}

</script>

<style lang="scss">
@use "./styles/general.scss";

</style>
