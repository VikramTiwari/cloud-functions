exports.echoHTTP = function echoHTTP (req, res) {
	var data = {
		app: req.app,
		baseUrl: req.baseUrl,
		body: req.body,
		cookies: req.cookies,
		fresh: req.fresh,
		hostname: req.hostname,
		ip: req.ip,
		ips: req.ips,
		method: req.method,
		originalURL: req.originalURL,
		params: req.params,
		path: req.path,
		protocol: req.protocol,
		query: req.query,
		route: req.route,
		secure: req.secure,
		signedCookies: req.signedCookies,
		stale: req.stale,
		subdomains: req.subdomains,
		xhr: req.xhr
	}
  res.send(data);
};
