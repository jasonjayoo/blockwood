import express from 'express';
import cors from 'cors';
import axios from 'axios';
import 'dotenv/config';

const app = express();
const PORT = 5000;

app.use(cors()); // Allow requests from frontend
app.use(express.json()); // Middleware to parse JSON

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const BASE_URL = "https://www.googleapis.com/youtube/v3/search";

// Backend endpoint to fetch videos
app.get('/api/videos', async (req, res) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                part: "snippet",
                q: "coding tutorials", // Change this to any category
                maxResults: 10,
                key: YOUTUBE_API_KEY
            }
        });

        res.json(response.data);
    } catch (error) {
        console.error("Error fetching YouTube API:", error.message);
        res.status(500).json({ error: "Failed to fetch data" });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
