import { createBoard } from '@wixc3/react-board';
import { FavoriteCard } from '../../../components/favorite-card/favorite-card';

export default createBoard({
    name: 'FavoriteCard',
    Board: () => (
        <FavoriteCard
            movie={{
                id: 25,
                overview:
                    "'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum '",
                release_date: '2020',
                title: 'She-Ra',
                vote_average: 10,
                poster_path:
                    'https://m.media-amazon.com/images/M/MV5BNzdiOTJiMWMtYTY0MS00NTUzLWE3OWUtZTc4YzE2YzVmMzdhXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
            }}
        />
    ),
    environmentProps: {
        canvasHeight: 1844,
        windowHeight: 930,
        canvasWidth: 153,
    },
});
