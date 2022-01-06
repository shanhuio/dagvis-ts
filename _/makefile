.PHONY: dist

dist:
	rm -rf dist
	mkdir -p dist/
	cp -RHL lib dist/
	rm -f dagvis.zip
	cd dist && zip -r ../dagvis.zip lib -x '*/.DS_Store'
