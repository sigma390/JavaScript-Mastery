import express from "express"

const app = express();

app.use(express.json());



app.get("/", () => console.log("Hello at /"));


app.listen(3000, () => console.log("server started on 3000"))