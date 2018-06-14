const express = require('express');

let app = express();
let port = process.env.PORT || 2323

app.use(express.static(__dirname + '/../public'));
app.listen(port, function() {
	console.log(`<('.'<) Server's up on port ${port}! (>'.')>`);
})
