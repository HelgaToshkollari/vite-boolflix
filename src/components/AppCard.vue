<template lang="">
    <div>
        <div class="card" style="width: 100%;">
            <img class="card-img-top" :src="`https://image.tmdb.org/t/p/w500/${movieInfos.poster_path}`" >
            <div class="card-body">
                <h5 class="card-title">{{movieInfos.title}}</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">{{movieInfos.original_title}}</li>
                    <li class="list-group-item "><span v-if="flagsForLang()" :class="flagsForLang()"></span> <span v-else class="fi fi-xx">{{movieInfos.original_language}}  </span></li>
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
        } else if (this.movieInfos.original_language === "it"){
            return `fi fi-it`
        }else if (this.movieInfos.original_language === "fr"){
            return `fi fi-fr`
        }else if (this.movieInfos.original_language === "de"){
            return `fi fi-de`
        }else if (this.movieInfos.original_language === "es"){
            return `fi fi-es`
        }else if (this.movieInfos.original_language === "ko"){
            return `fi fi-kr`
        }else if (this.movieInfos.original_language === "ja"){
            return `fi fi-jp`
        }else if (this.movieInfos.original_language === "zh"){
            return `fi fi-cn`
        } else {
            return false 
        } 

       }
    } 
    
}
</script>
<style lang="scss">
  
</style>