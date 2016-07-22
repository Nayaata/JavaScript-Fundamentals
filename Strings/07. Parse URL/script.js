function parseURL(args) {
  var protocolSeparator = '://',
      serverSeparator = '/',
      parse = args[0] + '',
      index = 0,
      len = protocolSeparator.length,
      protocol = '', 
      server = '',
      resource = '';


  index = parse.indexOf(protocolSeparator);
  protocol = parse.substr(0, index);

  len = index + len;
  index = parse.indexOf(serverSeparator, len);

  server = parse.substr(len, index - len);
  resource = parse.substr(index);

  console.log('protocol: ' + protocol);
  console.log('server: ' + server);
  console.log('resource: ' + resource);
}