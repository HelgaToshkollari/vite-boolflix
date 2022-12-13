import { reactive } from "vue";
import axios from "axios";


export const store = reactive ({
    baseApiUrl: "https://api.themoviedb.org/3/",
    apiLink:{
        movies: "search/movie",
        series: "search/tv",
    },
    theMovies:[],
    myTitle:"",
    

});

export function fetchMovie(){
    const myApi = store.baseApiUrl + store.apiLink.movies;
      axios.get( myApi,{
        params:{
          api_key: "1c6cb7d9e9e6fbde55731500b8758dd6",
          query: store.myTitle,
          language: 'en-ENG',
          
        }
        
      }).then((resp) => {
        //console.log(resp.data.results);
        store.theMovies = resp.data.results;
        console.log(store.theMovies)

    })

}

