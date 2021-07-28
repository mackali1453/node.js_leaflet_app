import {Request,Response} from "express";
import L from "leaflet";
const path = require('path');
class postController{
    
    map(req:Request,res:Response) {
        
        res.sendFile(path.join(__dirname + '/../html_templates/map.html'));
    }
    calendar(req:Request,res:Response){
        res.sendFile(path.join(__dirname + '/../html_templates/calendar.html'));
    }
    login(req:Request,res:Response){
        res.sendFile(path.join(__dirname + '/../html_templates/login.html'));
    }
  
    
}
export default postController;