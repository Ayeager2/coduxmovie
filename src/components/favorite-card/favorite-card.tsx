import classNames from 'classnames';
import styles from './favorite-card.module.scss';
import { FavoriteContext } from '../../context/FavoriteContext';
import { useContext } from 'react';

export interface FavoriteCardProps {
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

export const FavoriteCard = ({ className, movie }: FavoriteCardProps) => {
    const { dispatch } = useContext(FavoriteContext);

    return (
        <div className={classNames(styles.root, className)}>
            {movie.poster_path && (
                <img
                    src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    className={classNames(styles.card_img, styles['img-favorite'])}
                />
            )}
            <div className={styles.detail}>
                <h1 className={styles.detail_h1}>{movie.title}</h1>
                <span>{movie.vote_average}</span>
            </div>
            <div
                className={styles['delete-btn']}
                onClick={() => dispatch({ type: 'REMOVE_MOVIVE', payload: movie })}
            >
                <img
                    className={styles['btn-delete']}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0GYfIpeKQDYS2C2cb1ot_Jpa8hydwv0ZFuQ&amp;usqp=CAU"
                />
            </div>
        </div>
    );
};
