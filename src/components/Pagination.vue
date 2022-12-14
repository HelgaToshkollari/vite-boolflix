<template lang="">
    <div>
        <nav class="d-flex justify-content-end">
            <ul class="pagination">
                <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous" @click="onPrevClick">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li class="page-item">
                    <a class="page-link" href="#" aria-label="current">
                        {{page}} 
                    </a>

                </li>
            
                <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next" @click="onNextClick">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
        
    </div>
</template>
<script>
import { store, } from "../store";
export default {
    props:{
        page:{
            type: Number,
            default: 1,
            
        }
    },
    data() {
        return {
            store,
            
        }
    },
    methods:{
        onPrevClick(){
            this.$emit("changePage", this.page - 1);
        },
        onNextClick(){
            this.$emit("changePage",this.page + 1);
        }
    }
    
    
}
</script>
<style lang="scss">
@use '../styles/partials/variables' as *;
.pagination{
    li a{
        background-color: rgb(22, 21, 21);
        border-color:rgb(49, 49, 49); ;
        color: rgb(218, 218, 218);
    }
}
    
</style>