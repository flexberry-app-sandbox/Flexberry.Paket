docker build --no-cache -f SQL\Dockerfile.PostgreSql -t paket-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t paket-java/app ../../..
