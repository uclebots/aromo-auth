#!/usr/bin/env bash

apt-get install curl
curl -sL https://deb.nodesource.com/setup_10.x | sudo bash -
apt-get install -y nodejs

echo "Running NodeJS $(node -v)"
echo "Running NPM $(npm -v)"
