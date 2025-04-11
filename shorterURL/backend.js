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


 const serverFile = createServer( async (request, response) => {
     if(request.method === "GET")// Request hitted to GET method of server to take data from it;
         {
             if(request.url === "/") // Request hitted to url / page or home page;
             {
                 try {
                     const handlingData = await readFile(path.join("public", "index.html"));
                     // // Use of readFile to read the files content;
                     // // As well as path used to locate the folder and file;
                     response.writeHead(200, {"Content-Type" : "text/html"});
                     // // If request is successfull then access the file content;
                     response.end(handlingData);
                     // // And, then data is visible on the browser screen of this index.html file;
                 } catch (error) {
                     // // If there were any error;
                     response.writeHead(404, {"Content-Type" : "text/html"});
                     // // Response created the error page i.e, 404 with content type 
                     // // i.e., html file;
                     response.end("404 Page not found");
                     // // Response shows the text on the browser page i.e, 404 Page not found;
                 }
             }
         }
 });




 serverFile.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
 });