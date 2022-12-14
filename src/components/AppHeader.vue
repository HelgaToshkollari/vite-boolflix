<template lang="">
    <div>
        <div class="row p-2 justify-content-between align-items-center ">
            <div class="col d-flex">
                <div class="my-logo">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="">
                </div>
                <div class="my-nav">
                    <ul class="list-unstyled d-flex text-white fs-5">
                        <li>Home</li>
                        <li>Serie Tv</li>
                        <li>Film</li>
                        <li>Originals</li>
                        <li>Recently added</li>
                        <li>My list</li>
                    </ul>
                </div>
            </div>
            <div class="col-sm-2">
                <form action="" @submit.prevent="onSearch" class=" d-flex align-items-center " >
                    <div class="">
                        <input type="text" class="form-control" placeholder="Title" v-model="searching" >
                    </div>
                    <div class="">
                        <button @click="onSearch" class="btn btn-danger m-2">Search</button> 
                    </div>
                </form>
            </div>
        </div>
        
    </div>
</template>
<script>
import { store } from "../store";
export default {
    data(){
        return{
            store,
            searching:"",
           
        }
    },
    methods:{
        onSearch(){
            this.$emit("inputTitle",this.searching);
        }
    }
}
</script>
<style lang="scss">
@use '../styles/partials/variables' as *;

.my-logo{
    width: 150px;
    img{
        width: 100%;
    }
};
.my-nav{
    ul{
        padding-left: 2rem;
        li{
            padding: 10px;
            color: rgb(85, 88, 88);

            &:hover{
                color: white;
            }
            
        }
    }
}

</style>