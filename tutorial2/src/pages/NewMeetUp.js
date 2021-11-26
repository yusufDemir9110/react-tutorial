import {useNavigate} from 'react-router-dom'

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage(){
    const navigate = useNavigate();
    function addMeetupHandler(meetupData){
        fetch(
            'https://react-academind-be972-default-rtdb.europe-west1.firebasedatabase.app/meetups.json',
            {
                method:"POST",
                body:JSON.stringify(meetupData),
                headers:{
                    "Content-Type":"application/json"
                }
            }
            ).then(()=>{
                navigate('/')
            })

    }
    return <section>
        <h1>
            Add new meetup
        </h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </section>
}
export default NewMeetupPage;