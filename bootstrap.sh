#!/usr/bin/env bash

apt-get install curl
curl -sL https://deb.nodesource.com/setup_10.x | sudo bash -
apt-get install -y nodejs
ROOT_PWD=$1
USER_NAME=$2
USER_PWD=$3

echo "Running NodeJS $(node -v)"
echo "Running NPM $(npm -v)"

echo "mysql-server mysql-server/root_password string $ROOT_PWD" | sudo debconf-set-selections
echo "mysql-server mysql-server/root_password_again string $ROOT_PWD" | sudo debconf-set-selections
apt-get -y install mysql-server

sudo ufw allow mysql
sudo systemctl start mysql

mysql -u root -p${ROOT_PWD} mysql -e "GRANT ALL PRIVILEGES ON *.* TO '$USER_NAME'@'%' IDENTIFIED BY '$USER_PWD';"
sudo sed -i "s/.*bind-address.*/bind-address = 0.0.0.0/" /etc/mysql/mysql.conf.d/mysqld.cnf
sudo systemctl restart mysql