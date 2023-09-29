.PHONY: build deploy

# SSH port z administrace
PORT=[PORT]
# PORT=26879

build:
    yarn next telemetry disable && yarn build

deploy: build
    rsync -av -e "ssh -p ${PORT}" --delete --exclude .git/ --exclude .history/ ./ app@ssh.rosti.cz:/srv/app/
    ssh -p ${PORT} app@ssh.rosti.cz supervisorctl restart app