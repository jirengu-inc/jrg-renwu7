require(['inc'],function(inc){
	console.log(inc.get());
	inc.inc();
	console.log(inc.get());
	inc.inc();
	console.log(inc.get());
})