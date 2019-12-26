FROM voypost/image-renderer:1.0.0-install as installer
FROM voypost/image-renderer:1.0.0-build as builder
FROM voypost/image-renderer:1.0.0-run
