<template lang="">
    <div>
        <div class="my-card">
            <img v-if="mediaInfos.poster_path!=null" class="card-img-top" :src="`https://image.tmdb.org/t/p/w342/${mediaInfos.poster_path}`" >
            <img v-else  class="not-found" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/No_image_available_450_x_600.svg/450px-No_image_available_450_x_600.svg.png" alt="">        
            <div class="card-body text-white overlay py-4 px-2">
                <h4 class="card-title text-center my-title">{{mediaInfos.title}}{{mediaInfos.name}}</h4>
                <ul class="">
                    <li><h6>Original title :</h6>  {{mediaInfos.original_title}}{{mediaInfos.original_name}}</li>
                    <li><h6>Original language :</h6><span v-if="flagsForLang()" :class="flagsForLang()"></span> <span v-else class="fi fi-xx text-dark">{{mediaInfos.original_language}}</span></li>
                    <li>   
                        <div class="my-stars"> 
                            <h6>Vote :</h6>
                            <div class="empty-star">
                                <i v-for="star in 5" class="fa-regular fa-star text-warning "></i> 
                            </div>
                            <div class="full-star">
                                <i v-for="star in vote()" class="fa-solid fa-star text-warning "></i>
                            </div>
                        </div>
                    </li>
                    <li> <h6>Overview : </h6> {{mediaInfos.overview}}</li>
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
    
};
.my-card{
    position: relative;

    img{
        display: block;
        width: 100%;
        
    }
    .overlay{
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        opacity: 0;
        background-color: #161718da;
        overflow: auto;

        &::-webkit-scrollbar {
        display: none;
        }

        &:hover{
            opacity: 1;
        }
    }
    ul{
        list-style: none;
        padding: 0;
        
        li{
            padding: 5px 0;
        }
    }

    .my-title{
        background-color: rgba(133, 133, 133, 0.459);
        border: 1px solid rgb(138, 138, 138);
        border-radius: 10px;
        padding: 5px;
    }
    .not-found{
      
    }
}
  
</style>