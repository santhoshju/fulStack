const express = require("express");
const app = express();


app.get('/',(req,res) => {
    res.send("hello moto")
})

app.listen(3000, () => {
  console.log("====================================");
  console.log("node apl is running");
  console.log("====================================");
});
