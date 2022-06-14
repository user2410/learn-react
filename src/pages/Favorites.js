import {useContext} from 'react';

import FavContext from '../store/fav-contexts';
import MeetupList from '../components/meetups/MeetupList';

function FavoritesPage(){
    const favContext = useContext(FavContext);

    let content;

    if(favContext.totalFavs == 0){
        content = <p>You got no favorite yet, add some?</p>;
    }else{
        content = <MeetupList meetups={favContext.favs}/>;
    }

    return (
        <section>
            <h1>My favorites</h1>
            {content}
        </section>
    );
}

export default FavoritesPage;