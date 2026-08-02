





import express from "express"
import router from "./routes/auth.route";
const app = express();

app.use(express.json());



app.get("/", () => console.log("Hello at /"));

app.use("/api/auth", router) //mounting a Router

app.listen(3000, () => console.log("server started on 3000"))


// Browser

// ↓

// TCP Connection

// ↓

// Node HTTP Server  ← Opens port 3000

// ↓

// Express App

// ↓

// Middleware

// ↓

// Route

// ↓

// Controller

// ↓

// Database

// ↓

// Response


