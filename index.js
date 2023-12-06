const url = require("url");
const http = require("http");
const fs = require("fs");

http.createServer(function (req, res) {
	const q = url.parse(req.url, true);
	const filename = "." + q.pathname;
	if (q.pathname === "/") {
		fs.readFile("index.html", function (err, data) {
			if (err) {
				fs.readFile("404.html", function (err, data) {
					if (err) throw err;
					res.writeHead(200, { "Content-Type": "text/html" });
					res.write(data);
					return res.end();
				});
			}
			res.writeHead(200, { "Content-Type": "text/html" });
			res.write(data);
			return res.end();
		});
	} else if (q.pathname === "/about") {
		fs.readFile("about.html", function (err, data) {
			if (err) {
				fs.readFile("404.html", function (err, data) {
					if (err) throw err;
					res.writeHead(200, { "Content-Type": "text/html" });
					res.write(data);
					return res.end();
				});
			}
			res.writeHead(200, { "Content-Type": "text/html" });
			res.write(data);
			return res.end();
		});
	} else if (q.pathname === "/contact-me") {
		fs.readFile("contact-me.html", function (err, data) {
			if (err) {
				fs.readFile("404.html", function (err, data) {
					if (err) throw err;
					res.writeHead(200, { "Content-Type": "text/html" });
					res.write(data);
					return res.end();
				});
			}
			res.writeHead(200, { "Content-Type": "text/html" });
			res.write(data);
			return res.end();
		});
	} else {
		fs.readFile("404.html", function (err, data) {
			if (err) throw err;
			res.writeHead(200, { "Content-Type": "text/html" });
			res.write(data);
			return res.end();
		});
	}
}).listen(8080);
