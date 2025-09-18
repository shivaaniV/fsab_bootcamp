import { useState } from "react";
import axios from "axios";

function SubmitButton() {
    return (
        <button type="submit">
            I like this book!
        </button>
    );
}

export default function Books() {
    // NEW STUFF:
    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/books', {
                title, 
                author,
            });

            console.log("Server response:", response.data); //log
            
            alert("Book added!");
            setTitle("")
            setAuthor("")
        } catch (error) {
            console.error("Error submitting book:", error.response || error); //log
            alert("Error submitting book");
        }
    }
    
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    // END NEW STUFF

    return (
        <>
            <h3>i'm trying to get more into reading! do you have any recommendations for books i could read?</h3>
            <form onSubmit={handleSubmit}>
                <input 
                    //name="title"
                    placeholder="Title"
                    //type="text"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
                <br />
                <input 
                    //name="author"
                    //type="text" 
                    placeholder="Author"
                    value={author}
                    onChange={(event) => setAuthor(event.target.value)}
                />
                <br />
                <br />
                <button type="submit">Submit</button>
            </form>
        </>
    );
}