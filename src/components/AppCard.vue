<template lang="">
    <div>
        <div class="card" style="width: 100%;">
            <img class="card-img-top" :src="`https://image.tmdb.org/t/p/w342/${mediaInfos.poster_path}`" >
            <div class="card-body">
                <h5 class="card-title">{{mediaInfos.title}}{{mediaInfos.name}}</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">{{mediaInfos.original_title}}{{mediaInfos.original_name}}</li>
                    <li class="list-group-item "><span v-if="flagsForLang()" :class="flagsForLang()"></span> <span v-else class="fi fi-xx">{{mediaInfos.original_language}}  </span></li>
                    <li class="list-group-item ">   
                        <div class="my-stars"> 
                            <p>Vote :</p>
                            <div class="empty-star">
                                <i v-for="star in 5" class="fa-regular fa-star text-warning "></i> 
                            </div>
                            <div class="full-star">
                                <i v-for="star in vote()" class="fa-solid fa-star text-warning "></i>
                            </div>
                        </div>
                        
                    </li>
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
        mediaInfos:{
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
        if(this.mediaInfos.original_language === "en"){
            return `fi fi-gb`
        } else if (this.mediaInfos.original_language === "it"){
            return `fi fi-it`
        }else if (this.mediaInfos.original_language === "fr"){
            return `fi fi-fr`
        }else if (this.mediaInfos.original_language === "de"){
            return `fi fi-de`
        }else if (this.mediaInfos.original_language === "es"){
            return `fi fi-es`
        }else if (this.mediaInfos.original_language === "ko"){
            return `fi fi-kr`
        }else if (this.mediaInfos.original_language === "ja"){
            return `fi fi-jp`
        }else if (this.mediaInfos.original_language === "zh"){
            return `fi fi-cn`
        } else {
            return false 
        } 

       },
       vote(){
        return Math.ceil(this.mediaInfos.vote_average / 2);
       }
       
    }

    
}
</script>
<style lang="scss">
@use '../styles/partials/variables' as *;

.my-stars{
    position: relative;
    .empty-star , .full-star{
        position: absolute;
        bottom: 0;
        left: 3.1rem;
        
    }
    

}
  
</style>