import express from "express";

const app = express();
const port = 4000;

app.get("/profiles", (req, res) => {
    res.json({
        "data":  {
            "name": "john",
             "age": 20
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});