deploy:
	ssh $(u)@$(h) "mkdir -p $(dir)"
	rsync -avhzL --delete \
				--no-perms --no-owner --no-group \
				--exclude .git \
				--exclude .idea \
				--exclude .env \
				--exclude node_modules \
				. $(u)@$(h):$(dir)/

deploy-dev:
	make deploy h=139.180.204.128 dir=/var/www/html/word-remind u=root
	ssh root@139.180.204.128 "cd /var/www/html/word-remind"