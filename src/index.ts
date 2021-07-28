import router from "./router/router"; 


let express = require('express'); #express is a modul which allow us to create rest-api.
let app = express(); #Creating instance of it
app.use("/",router); #Using router let us jumping between html pages.
app.listen(3000,console.log("localhost is 3000")); 

