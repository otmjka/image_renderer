FROM voypost/node-express:1.0.0-install as installer
FROM voypost/node-express:1.0.1-build as builder
FROM voypost/node-express:1.0.1-run
