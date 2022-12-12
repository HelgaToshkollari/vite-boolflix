import { reactive } from "vue";


export const store = reactive ({
    baseApiUrl: "https://api.themoviedb.org/3",
    apiLink:{
        movies: "/search/movie",
        series: "/search/tv",
    }
});

