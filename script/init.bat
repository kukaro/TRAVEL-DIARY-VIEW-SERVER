::run docker
docker build -t travel-diary-view-server-project ../project/
docker-compose -f ../project/docker-compose.yml up -d
