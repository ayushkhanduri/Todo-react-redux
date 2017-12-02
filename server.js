const express = require('express');
const path = require('path');
const cluster = require('cluster');

const app = express();

app.use(express.static(path.join(__dirname, 'build/client')));

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'src','index.html'));
})
 
if(cluster.isMaster){
	const cores = require('os').cpus().length;

	console.log('Master cluster setting up', cores, 'workers...');
	for(let i = 0; i < cores; i++) cluster.fork();

	cluster.on('online', (worker) => console.log('Worker', worker.process.pid, 'is online'));
	cluster.on('exit', (worker, code, signal) => {
		console.log('Worker', worker.process.pid, 'died with code:', code, 'and signal:', signal);
		console.log('Starting a new worker');
		cluster.fork();
	});
}else {
	app.listen(process.env.PORT || 8080, function(err) {
	  if (err) {
	    return console.error(err);
	  }

	  console.log('Listening at http://localhost:' + (process.env.PORT || 8080));
	});
}