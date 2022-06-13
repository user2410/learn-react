import NewMeetupForm from "../components/meetups/NewMeetupFrom";

function NewMeetupsPage(){
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
        );
    }
    return (
        <section>
            <h1>Add new meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </section>
    )
}

export default NewMeetupsPage;