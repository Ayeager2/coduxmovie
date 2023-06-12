import { useState } from 'react';
import classNames from 'classnames';
import { ReactComponent as ReactLogo } from './assets/react.svg';
import { ReactComponent as ViteLogo } from './assets/vite.svg';
import { ReactComponent as TypescriptLogo } from './assets/typescript.svg';
import { ReactComponent as ScssLogo } from './assets/scss.svg';
import styles from './App.module.scss';
import { Container } from './components/container/container';
import { Favorite } from './components/favorite/favorite';
import { Menu } from './components/menu/menu';
import { FavoriteContextProvider } from './context/FavoriteContext';
import { SearchContextProvider } from './context/SearchContext';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.App}>
        <SearchContextProvider>
            <Menu />
            <FavoriteContextProvider>
                <Container />
                <Favorite />
            </FavoriteContextProvider>
        </SearchContextProvider>
        </div>
    );
}

export default App;
