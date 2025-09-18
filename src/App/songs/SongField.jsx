import { useState } from "react";
import axios from "axios";

function SubmitButton() {
    return (
        <button type="submit">
            I like this book!
        </button>
    );
}

export default function Music() {
    // NEW STUFF:
    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/music', {
                name, 
                artist,
            });

            console.log("Server response:", response.data); //log
            
            alert("Song added!");
            setName("")
            setArtist("")
        } catch (error) {
            console.error("Error submitting song:", error.response || error); //log
            alert("Error submitting song");
        }
    }
    
    const [name, setName] = useState("")
    const [artist, setArtist] = useState("")
    // END NEW STUFF

    return (
        <>
            <h3>do you have any song recs?</h3>
            <form onSubmit={handleSubmit}>
                <input 
                    placeholder="Name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                <br />
                <input 
                    placeholder="Artist"
                    value={artist}
                    onChange={(event) => setArtist(event.target.value)}
                />
                <br />
                <br />
                <button type="submit">Submit</button>
            </form>
        </>
    );
}