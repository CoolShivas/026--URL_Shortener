// console.log("Formation of Backend File.");
// console.log("To render the server i.e., port localhost as well as CRUD operation.");
// console.log("CRUD means the requests for the Create, Read, Undo, Delete.");
// console.log("i.e., GET, POST,Patch, EDIT, DELETE");
// // // // Here, we are getting the Output on Terminal as :-
// // // // Formation of Backend File.
// // // // To render the server i.e., port localhost as well as CRUD operation.
// // // // CRUD means the requests for the Create, Read, Undo, Delete.
// // // // i.e., GET, POST,Patch, EDIT, DELETE
// // // // Completed running 'backend.js'


import { readFile } from "fs/promises";
import {createServer} from "http";
import path from "path";
 
 
 
const PORT = 5000;


const getRidOfDoNotRepeatCodeAgain = async (response, filePath, contentType) => {
    try {
        const dataHandle = await readFile(filePath);
        response.writeHead(200, {"Content-Type" : contentType});
        response.end(dataHandle);
    } catch (error) {
        response.writeHead(404, {"Content-Type" : contentType});
        response.end("404 Page not found");
    }
};



 const serverFile = createServer( async (request, response) => {
     if(request.method === "GET")// Request hitted to GET method of server to take data from it;
         {
             if(request.url === "/") // Request hitted to url / page or home page;
             {
                 return getRidOfDoNotRepeatCodeAgain(response, path.join("public", "index.html"), "text/html");
             }
             else if(request.url === "/style.css")
             {
                return getRidOfDoNotRepeatCodeAgain(response, path.join("public", "style.css"), "text/css");
             }
         }
 });




 serverFile.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
 });