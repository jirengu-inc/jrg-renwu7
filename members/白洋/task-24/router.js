// 任务一
app.post('/comment', function(req, res) {
	console.log(req.body.comment); // "这是评论内容"
	res.send({
		status: 0,
		data: {
			cid: 100,
			comment: "这是评论内容"
		}
	});
});

// 任务二

app.get('/list', function(req, res) {
	console.log("no404");
	res.send({
		status: 0,
		data: {
			list: 100
		}
	});
});

