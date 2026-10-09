import {createServer} from 'node:http';
import {readFile,stat} from 'node:fs/promises';
import {resolve,extname} from 'node:path';
const root=resolve('dist');
const mime={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.webp':'image/webp','.jpg':'image/jpeg','.png':'image/png','.svg':'image/svg+xml','.xml':'application/xml','.txt':'text/plain','.webmanifest':'application/manifest+json'};
createServer(async(req,res)=>{try{const path=resolve(root, '.'+decodeURIComponent(new URL(req.url,'http://localhost').pathname)); if(path!==root&&!path.startsWith(root+'/'))throw Error('Invalid path'); let file=path; if((await stat(path)).isDirectory())file+='/index.html'; const data=await readFile(file);res.writeHead(200,{'Content-Type':mime[extname(file)]||'application/octet-stream'});res.end(data);}catch{res.writeHead(404,{'Content-Type':'text/html; charset=utf-8'});res.end(await readFile(root+'/404.html'));}}).listen(4173,'127.0.0.1',()=>console.log('Local: http://127.0.0.1:4173'));
