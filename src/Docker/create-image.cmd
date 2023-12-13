docker build --no-cache -f SQL\Dockerfile.PostgreSql -t paket/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t paket/app ../..
