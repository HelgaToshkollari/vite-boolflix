<template>
  <AppHeader></AppHeader>
  <AppMain></AppMain>
</template>

<script>
import AppHeader from "./components/AppHeader.vue"
import AppMain from "./components/AppMain.vue"
import axios from "axios";
import { store } from "./store";
export default{
  components:{AppMain , AppHeader},
  data(){
    return{
      store
    }
  },
  fetchMovie (){
    axios.get( store.baseApiUrl,{
        
      params:{
          api_key: "1c6cb7d9e9e6fbde55731500b8758dd6",
          query:"",
      }
      
    })
  }
}

</script>

<style lang="scss">
@use "./styles/general.scss";

</style>
