import { useContext } from 'react';
import {Link} from 'react-router-dom';

import classes from './MainNavigation.module.css';
import FavContext from '../../store/fav-contexts';

function MainNavigation() {
    const favContext = useContext(FavContext);

    return (
        <header className={classes.header}>
            <div className={classes.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>All Meetups</Link>
                    </li>
                    <li>
                        <Link to='/meetups'>Add New Meetup</Link>
                    </li>
                    <li>
                        <Link to='/favs'>My Favorites</Link>
                        <span className={classes.badge}>{favContext.totalFavs}</span>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;