<template lang="">
    <div>
        <div class="card" style="width: 100%;">
            <img class="card-img-top" :src="`https://image.tmdb.org/t/p/w500/${movieInfos.poster_path}`" >
            <div class="card-body">
                <h5 class="card-title">{{movieInfos.title}}</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">{{movieInfos.original_title}}</li>
                    <li class="list-group-item">{{movieInfos.original_language}} <span :class="flagsForLang()"></span></li>
                    <li class="list-group-item">{{movieInfos.vote_average}}</li>
                </ul>
            </div>
            
        </div>
    </div>
</template>
<script>
import "/node_modules/flag-icons/css/flag-icons.min.css";  
import { store } from "../store";
export default {
    props:{
        movieInfos:{
            type: Object,
        },
    },
    data(){
        return{
            store
        }
    },
    methods:{
       flagsForLang(){
        if(this.movieInfos.original_language === "en"){
            return `fi fi-gb`
        }

       }
    } 
    
}
</script>
<style lang="scss">
  
</style>