function SubmitButton() {
    return (
        <button>
            This is a good song (you should trust me)!
        </button>
    );
}

export default function Music() {
    return (
        <>
            <h3>do you have song recs?</h3>
            <form>
                song: <input type="text" /><br />
                artist: <input type="text" /><br />
                <br />
                <SubmitButton />
            </form>
        </>
    );
}