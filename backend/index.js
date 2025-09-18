import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import admin from "firebase-admin";
import serviceAccount from "./util/serviceAccountKey.json" with { type: "json" };

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
const app = express();

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Add new books to recommendation
app.post("/books", async (req, res) => {
  try {
    const { title, author } = req.body;

    if (!title || !author) {
      return res.status(400).json({ error: "Missing title or author" });
    }

    const docRef = await db.collection("Books").add({ title, author });

    res.status(200).json({ message: "Book added!", id: docRef.id});

  } catch (error) {
    console.error("Error adding book:", error);
    res.status(500).json({ error: "Failed to add book" });
  }
});

// Add new songs to recommendation
app.post("/music", async (req, res) => {
  try {
    const { name, artist } = req.body;

    if (!name || !artist) {
      return res.status(400).json({ error: "Missing name or artist" });
    }

    const docRef = await db.collection("Songs").add({ name, artist });

    res.status(200).json({ message: "Song added!", id: docRef.id});

  } catch (error) {
    console.error("Error adding song:", error);
    res.status(500).json({ error: "Failed to add song" });
  }
});

const PORT = 3000;
function start() {
  app.listen(PORT, (error) => {
    if (error) {
      throw error;
    }
    console.log(`My first Express app - listening on port ${PORT}!`);
  });
}

start()