import classNames from 'classnames';
import styles from './cards.module.scss';
import { Card } from '../card/card';
import { useState, useEffect, useContext } from 'react';
import { SearchContext } from '../../context/SearchContext';

export interface CardsProps {
    className?: string;
}

export interface Movie {
    id: number;
    poster_path?: string;
    title: string;
    overview: string;
    vote_average: number;
    release_date: string;
}

export const Cards = ({ className }: CardsProps) => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const { state } = useContext(SearchContext);

    const { sortBy, genre, query } = state;

    useEffect(() => {
        fetch(
            query !== ''
                ? `https://api.themoviedb.org/3/search/movie?api_key=359a309e91777d6a77a28dfec0d2e62a&query=${query}`
                : `https://api.themoviedb.org/3/discover/movie?api_key=359a309e91777d6a77a28dfec0d2e62a&sort_by=${sortBy}&with_genres=${genre}`
        )
            .then((response) => response.json())
            .then((data) => setMovies(data.results))
            .catch((err) => console.log(err));
    }, [sortBy, genre, query]);

    console.log(movies);
    return (
        <div className={classNames(styles.root, className)}>
            {movies.map((movie) => (
                <Card key={movie.id} movie={movie} />
            ))}
        </div>
    );
};
