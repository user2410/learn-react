import {useNavigate} from 'react-router-dom';
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupsPage(){
    const navigate = useNavigate();
    function addMeetupHandler(meetupData){

        // add a 'meetups' table
        fetch(
            'https://react-get-started-6df0b-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers:{
                    'Content-Type': 'application/json'
                }
            }
        ).then(()=>{
            // navigate.push()
            navigate('/', {replace:true});
        });
    }
    return (
        <section>
            <h1>Add new meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </section>
    )
}

export default NewMeetupsPage;