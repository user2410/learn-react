import { useState, useEffect } from "react";

import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch('https://react-get-started-6df0b-default-rtdb.firebaseio.com/meetups.json')
        .then((res) => {
            return res.json();
        }).then((data) => {
            var meetups = [];
            for(const key in data){
                const meetup = {
                    id: key,
                    ...data[key]
                };
                meetups.push(meetup);
            }
            setIsLoading(false);
            setLoadedMeetups(meetups);
        });
    }, []);

    if (isLoading) {
        return (<section>
            <p>Loading ...</p>
        </section>);
    }
    
    return (
        <section>
            <h1>All Meetups Page</h1>
            <MeetupList meetups={loadedMeetups} />
        </section>
    );
}

export default AllMeetupsPage;