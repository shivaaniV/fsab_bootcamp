import { useState } from "react";

function SubmitButton() {
    return (
        <button type="submit">
            I like this book!
        </button>
    );
}

export default function Books() {
    // NEW STUFF:
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();

    const response = await fetch("http://localhost:5173/books", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, author }),
    });

    if (response.ok) {
        alert("Book added!");
        setTitle("");
        setAuthor("");
    } else {
        alert("Error submitting book");
    }
    };
    // END NEW STUFF

    return (
        <>
            <h3>i'm trying to get more into reading! do you have any recommendations for books i could read?</h3>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <br />
                <input 
                    type="text" 
                    placeholder="Author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                <br />
                <br />
                <SubmitButton />
            </form>
        </>
    );
}