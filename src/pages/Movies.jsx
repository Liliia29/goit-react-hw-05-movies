
import { useEffect, useRef, useState } from "react";
import { getMoviesByQuery } from "services/movieAPI";
import Searchbar from "components/Searchbar/Searchbar";
import MoviesList from 'components/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [query, setQuery] = useState('');
    const [error, setError] = useState(null);
    const abortCtrl = useRef();

    useEffect(() => {
        if (query === '') {
            return;
        }

        const getMovieInfo = async () => {
            if (abortCtrl.current) {
                abortCtrl.current.abort();
              }
        
              abortCtrl.current = new AbortController();
        
              try {
                setIsLoading(true);
                setError(null);
             
                const movies = await getMoviesByQuery(query, abortCtrl.current.signal);

                setMovies(movies);
                setError(null);
            } catch (error){
                if (error.code !== 'ERR_CANCELED') {
                    setError(error.message);
                  }
              } finally{
                setIsLoading(false);
              }
        };
        getMovieInfo();
        }, [query]);

        const onQueryChange = searchQuery => {
            if (searchQuery === query){
                return;
            }
            setQuery(searchQuery);
            setError(null);
        };

        return (
            <>
            <Searchbar onQueryChange={onQueryChange} />

            {isLoading && <Loader />}
            {error && <p>{error}</p> }

            {!isLoading && movies.length > 0 && <MoviesList movieItem={movies}/>}
            </>
        );
};

export default Movies;

