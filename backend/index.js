import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import { db } from "./util/FirebaseInit.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));

// app.get("/", (req, res) => {
//   res.send("IT IS A ME A SHIVAANI"); 
// })
// app.get("/home", (req, res) => {
//   res.send("IT IS A ME A SHIVAANI");
// })
// app.get("/projects", (req, res) => {
//   res.send("here's a list of my projects");
// })
// app.get("/recommend", (req, res) => {
//   res.send("give me some book recs!");
// })
// app.get("/contact", (req, res) => {
//   res.send("do u wanna get in touch w me?");
// })
// app.get("/lets-be-friends", (req, res) => res.send("let's be friends!!!"));


// Add new books to recommendation
app.post("/books", async (req, res) => {
  const booksRef = collection(db, "Books");
  const booksBody = req.body
  try {
    //await addDoc(booksRef, booksBody)
    const { title, author } = req.body;
    
    if (!title || !author) {
      return res.status(400)
    }

    await addDoc(collection(db, "books"), { title, author })
  } catch (e) {
    console.error(e)
    res.status(500);
  }
  res.status(200).send("Successfully Added Book")
})

const PORT = process.env.PORT || 5173;
function start() {
  app.listen(PORT, (error) => {
    if (error) {
      throw error;
    }
    console.log(`My first Express app - listening on port ${PORT}!`);
  });
}

start()