import { createContext, useState } from "react";

const FavContext = createContext({
    favs: [],
    totalFavs: 0,
    addFav: (favMeetup)=>{},
    removeFav: (meetupID)=>{},
    isItemFav: (meetupID)=>{}
});

export function FavsContextProvider(props){
    const [userFavs, setUserFavs] = useState([]);

    function addFavHandler(favMeetup){
        // concat depends on previous state of userFavs
        setUserFavs((prev)=>{
            return prev.concat(favMeetup);
        });
    }

    function removeFavHandler(meetupID){
        setUserFavs((prev)=>{
            return prev.filter(meetup => meetup.id !== meetupID);
        })
    }

    function itemIsFavHandler(meetupID){
        return userFavs.some(meetup => meetup.id === meetupID);
    }

    const context = {
        favs: userFavs,
        totalFavs: userFavs.length,
        addFav: addFavHandler,
        removeFav: removeFavHandler,
        isItemFav: itemIsFavHandler
    };

    return (<FavContext.Provider value={context}>
        {props.children}
    </FavContext.Provider>);
}

export default FavContext;