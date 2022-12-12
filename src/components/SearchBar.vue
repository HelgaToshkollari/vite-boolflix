<template lang="">
    <div>
        <form action="" @submit.prevent="onSearch" >
            <div class="row py-2 justify-content-center" >
                <div class="col-sm-6 m-4 text-center">
                    <input type="text" class="form-control" placeholder="Title" v-model="searching" >
                    <button @click="onSearch" class="btn btn-dark m-2">Search</button> 
                </div>

            </div>
        </form>
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
<style lang="">
    
</style>