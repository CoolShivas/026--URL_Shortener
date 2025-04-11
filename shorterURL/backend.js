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


import {createServer} from "http";
 
 
 
 const serverFile = createServer((request, response) => {
     if(request.method === "GET")// Request hitted to GET method of server to take data from it;
         {
             if(request.url === "/") // Request hitted to url / page or home page;
             {
                 try {
                     
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
