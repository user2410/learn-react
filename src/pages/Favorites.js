// import {useContext} from 'react';

// import FavContext from '../store/fav-contexts';
import MeetupList from '../components/meetups/MeetupList';

import { useSelector} from 'react-redux';

function FavoritesPage(){
    // const favContext = useContext(FavContext);
    const allFavs = useSelector((state) => state.favHandler);

    let content;

    if(allFavs.length === 0){
        content = <p>You got no favorite yet, add some?</p>;
    }else{
        content = <MeetupList meetups={allFavs}/>;
    }

    return (
        <section>
            <h1>My favorites</h1>
            {content}
        </section>
    );
}

export default FavoritesPage;