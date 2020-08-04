
for configurations -> root
for deploy -> experteer

ssh root@139.59.159.56
su experteer
cd /var/www/hackremote.today

git checkout master 
git pull

docker build .
docker tag a7a5f096d21b zlesyk/hackathon:latest
docker push zlesyk/hackathon:latest


git pull
docker pull zlesyk/hackathon:latest
docker-compose kill
docker-compose up -d

ToDO

1. Production mode!
2. Auto deploy