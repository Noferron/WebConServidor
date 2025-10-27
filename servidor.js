import http from "node:http";

const server = http.createServer((req,res)=>{
    // CORS + JSON básicos (desarrollo) 
    res.setHeader("Access-Control-Allow-Origin", "*"); // permite cualquier origen 
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); 
    res.setHeader("Access-Control-Allow-Headers", "Content-Type"); 
    res.setHeader("Content-Type", "application/json; charset=utf-8"); 

    // Responder al preflight 
    if (req.method === "OPTIONS") { 
    res.writeHead(204); 
    return res.end();  
    }

    try { 
    // Si la ruta es /api/saludo 
    if (req.url === "/saludo" && req.method === "GET") { 
      const respuesta = { mensaje: "¡Hola desde Node.js !", curso: "UF1844" }; 
      res.writeHead(200); 
      return res.end(JSON.stringify(respuesta)); 
    } 
    
    if(req.url==="/inicio" && req.method ==="GET"){
        const prueba = {mensaje: "Esta es la página de inicio", logro: "logré que funcionara"};
        res.writeHead(200);
        return res.end (JSON.stringify(prueba));
    }
    // Si la ruta no existe 
    res.writeHead(404); 
    res.end(JSON.stringify({ ok: false, error: "Ruta no encontrada" })); 
    } 
    catch (error) { 
        //Si ocurre un error inesperado, devolvemos un JSON de error 
        console.error("❌Error interno del servidor:", error); 
        res.writeHead(500); 
        res.end(JSON.stringify({ ok: false, error: "Error interno del servidor" })); 
    } 
});



server.listen(3000,()=>{
    console.log("Servidor ejecutandose en http://localhost:3000");
});