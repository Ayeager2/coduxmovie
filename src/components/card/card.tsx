import classNames from 'classnames';
import styles from './card.module.scss';
import { useContext } from 'react';
import { FavoriteContext } from '../../context/FavoriteContext';

export interface CardProps {
    className?: string;
    movie: {
        id: number;
        poster_path?: string;
        title: string;
        overview: string;
        vote_average: number;
        release_date: string;
    };
}

export const Card = ({ movie }: CardProps) => {
    const { dispatch } = useContext(FavoriteContext);

    return (
        <div className={classNames(styles.root)}>
            {movie.poster_path && (
                <img
                    src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    className={styles.card_img}
                />
            )}

            <div className={styles.card_detail}>
                <h1 className={styles.card_h1}>{movie.title.substring(0, 26)}</h1>
                <span className={styles['card_span-rating']}>{movie.vote_average.toFixed(1)}</span>
                <p className={styles['card_p-desc']}>{movie.overview.substring(0, 220)}</p>
                <button
                    className={styles.card_btn}
                    onClick={() => dispatch({ type: 'ADD_MOVIE', payload: movie })}
                >
                    +
                </button>
            </div>
        </div>
    );
};
