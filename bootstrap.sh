#!/usr/bin/env bash

apt-get install curl
curl -sL https://deb.nodesource.com/setup_10.x | sudo bash -
apt-get install -y nodejs

echo "Running NodeJS $(node -v)"
echo "Running NPM $(npm -v)"

echo "mysql-server mysql-server/root_password string $MYSQL_ROOT_PASSWORD" | sudo debconf-set-selections
echo "mysql-server mysql-server/root_password_again string $MYSQL_ROOT_PASSWORD" | sudo debconf-set-selections
apt-get -y install mysql-server

sudo ufw allow mysql
sudo systemctl start mysql

mysql -u root -p${MYSQL_ROOT_PASSWORD} mysql -e "CREATE DATABASE $AROMO_DB_NAME; GRANT ALL PRIVILEGES ON $AROMO_DB_NAME.* TO '$AROMO_DB_USER'@'%' IDENTIFIED BY '$AROMO_DB_PASSWORD';"
sudo sed -i "s/.*bind-address.*/bind-address = 0.0.0.0/" /etc/mysql/mysql.conf.d/mysqld.cnf
sudo systemctl restart mysql