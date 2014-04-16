module.exports.incrementIp = function(ip) {
	var parts = ip.split('.'), ret;

	if (parts[3] < 254) {
		parts[3]++;
		ret = parts.join('.');
	}

	return ret;
}

module.exports.incrementHost = function(host) {
	var num = host.match(/\d+/)[0],
	new_num = parseInt(num, 10) + 1;
	return host.replace(num, new_num);
}
