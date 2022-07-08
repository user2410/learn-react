export const addFav = (favMeetup)=>{
    return {
        type: "ADDFAV",
        payload: favMeetup
    }
};

export const removeFav = (id)=>{
    return {
        type: "REMFAV",
        payload: id
    }
};