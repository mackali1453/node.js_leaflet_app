import router from "./router/router";


let express = require('express');
let app = express();
app.use("/",router);
app.listen(3000,console.log("localhost is 3000"));

