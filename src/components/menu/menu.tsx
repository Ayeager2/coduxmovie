import classNames from 'classnames';
import styles from './menu.module.scss';
import { useContext } from 'react';
import { SearchContext } from '../../context/SearchContext';

export interface MenuProps {
    className?: string;
}
const sortBy: { q: string; text: string }[] = [
    { q: 'popularity.desc', text: 'Popularity' },
    { q: 'vote_count.desc', text: 'Most Voted' },
    { q: 'release_date.desc', text: 'Release Date' },
];

const genre: { id: string; text: string }[] = [
    {
        id: `28`,
        text: 'Action',
    },
    {
        id: `12`,
        text: 'Adventure',
    },
    {
        id: `16`,
        text: 'Animation',
    },
    {
        id: `35`,
        text: 'Comedy',
    },
    {
        id: `80`,
        text: 'Crime',
    },
    {
        id: ` 99`,
        text: 'Documentary',
    },
    {
        id: `18`,
        text: 'Drama',
    },
    {
        id: `10751`,
        text: 'Family',
    },
    {
        id: `14`,
        text: 'Fantasy',
    },
    {
        id: `36`,
        text: 'History',
    },
    {
        id: `27`,
        text: 'Horror',
    },
    {
        id: `10402`,
        text: 'Music',
    },
    {
        id: `9648`,
        text: 'Mystery',
    },
    {
        id: `10749`,
        text: 'Romance',
    },
    {
        id: `878`,
        text: 'Science Fiction',
    },
    {
        id: `10770`,
        text: 'TV Movie',
    },
    {
        id: `53`,
        text: 'Thriller',
    },
    {
        id: `10752`,
        text: 'War',
    },
    {
        id: `37`,
        text: 'Western',
    },
];

export const Menu = ({ className }: MenuProps) => {
    const { dispatch, state } = useContext(SearchContext);
    return (
        <div className={classNames(styles.root, className)}>
            <div color="" className={styles.logo}>
                <img
                    src="https://cdn-icons-png.flaticon.com/512/3418/3418886.png"
                    alt=""
                    className={styles.logo_img}
                />
                <span className={styles.logo_text}>NinnyMovie</span>
            </div>
            <span className={styles.title}>Sort By</span>
            <hr className={styles.hr} />
            <ul className={styles.nav_list}>
                {sortBy.map((item) => (
                    <li
                        className={classNames(
                            styles.nav_item,
                            styles.nav_item_li,
                            styles.nav_list_li
                        )}
                        key={item.q}
                        onClick={() => dispatch({ type: 'SORT_BY', payload: item.q })}
                    >
                        {item.text}
                    </li>
                ))}
            </ul>
            <span className={styles.title}>Genre</span>
            <hr className={styles.hr} />
            <ul className={styles.nav_list}>
                {genre.map((item) => (
                    <li
                        className={classNames(styles.nav_item, styles.nav_list_li)}
                        key={item.id}
                        onClick={() => dispatch({ type: 'ADD_GENRE', payload: item.id })}
                    >
                        {item.text}
                    </li>
                ))}
            </ul>
        </div>
    );
};
