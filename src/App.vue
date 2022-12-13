<template>
  <div class="bg-dark">
    <AppHeader></AppHeader>
    <div class="container">
      <SearchBar @inputTitle="searchTitle"></SearchBar>
      <AppMain></AppMain>
    </div>
  </div>
 
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppCard from "./components/AppCard.vue";
import SearchBar from "./components/SearchBar.vue"
import { store, fetchMovie } from "./store";

export default{
  components:{AppMain , AppHeader, SearchBar , AppCard},
  data(){
    return{
      store,

      
    }
  },
  methods:{
  
    searchTitle(getTitle){
      this.store.myTitle = getTitle;

      fetchMovie();

    }

  },
 
 
}

</script>

<style lang="scss">
@use "./styles/general.scss";

</style>
