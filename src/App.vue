<template>
  <AppHeader></AppHeader>
  <div class="container">
    <SearchBar></SearchBar>
    <AppMain></AppMain>
  </div>
 
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import SearchBar from "./components/SearchBar.vue"
import { store, fetchMovie } from "./store";
//import axios from "axios";
export default{
  components:{AppMain , AppHeader, SearchBar},
  data(){
    return{
      store,
      
    }
  },
  methods:{
    /*
    fetchMovie(){
      const myApi = store.baseApiUrl + store.apiLink.movies;
        axios.get( myApi,{
          params:{
            api_key: "1c6cb7d9e9e6fbde55731500b8758dd6",
            query:"futuro",
            language: 'it-IT',
          }

        }).then((resp) => {
          console.log(resp.data.results);
      })

    }*/

  },
  created(){
    fetchMovie()
  }
 
}

</script>

<style lang="scss">
@use "./styles/general.scss";

</style>
