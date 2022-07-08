export const favHandler = (state = [], action)=>{
    switch(action.type){
        case "ADDFAV":
            return state.concat(action.payload);
        
        case "REMFAV":
            return state.filter(meetup => meetup.id !== action.payload);

        default:
            return state;
    }
}

export default favHandler;