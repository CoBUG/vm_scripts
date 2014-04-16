#!/usr/bin/env node
var fs = require('fs'),
common = require('./common.js'),
num_vm = 0, i,
fname = '',
template;

if (!process.argv[2]) {
	console.log('specify template to use!');
	process.exit();
}

if (!process.argv[3]) {
	console.log('specify number of vms to create!');
	process.exit();
}

num_vm = process.argv[3];
template = fs.readFileSync(process.argv[2]);
template = JSON.parse(template);

for (i = 0; i < num_vm; i++) {
	template.hostname = common.incrementHost(template.hostname);
	template.alias = common.incrementHost(template.alias);
	template.nics[0].ip = common.incrementIp(template.nics[0].ip);

	fname = '/tmp/' + template.hostname + '.json';

	console.log('vmadm create -f %s', fname);

	fs.writeFile(fname, JSON.stringify(template), function()  {});
} 
