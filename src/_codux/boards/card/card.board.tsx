import { createBoard } from '@wixc3/react-board';
import { Card } from '../../../components/card/card';

export default createBoard({
    name: 'Card',
    Board: () => (
        <Card
            movie={{
                id: 123,
                overview:
                    "'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum '",
                release_date: '2002',
                title: 'She-Ra',
                vote_average: 7,
                poster_path:
                    'https://m.media-amazon.com/images/M/MV5BMjI3MTI2NzY0M15BMl5BanBnXkFtZTgwNDY3MjA1NjM@._V1_.jpg',
            }}
        />
    ),
});
