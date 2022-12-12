<template lang="">
    <div>
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" :src="`https://image.tmdb.org/t/p/w500/${movieInfos.poster_path}`" >
            <div class="card-body">
                <h5 class="card-title">{{movieInfos.title}}</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">{{movieInfos.original_title}}</li>
                    <li class="list-group-item">{{movieInfos.original_language}}</li>
                    <li class="list-group-item">{{movieInfos.vote_average}}</li>
                </ul>
            </div>
            
        </div>
    </div>
</template>
<script>
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
    }
    
}
</script>
<style lang="">
    
</style>