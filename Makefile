.PHONY: all install build start test clean docker-build docker-run

all: install build test

install:
	npm install

build:
	node build.js

start:
	node server.js

test:
	node --test tests/*.test.js

clean:
	rm -rf node_modules coverage

docker-build:
	docker build -t cyberpunk-racer:latest .

docker-run:
	docker run -p 3000:3000 cyberpunk-racer:latest
