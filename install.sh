#!bin/bash
set -e
set -x
set -o pipefail


sudo apt-get update
sudo apt-get upgrade -y
#sudo apt-get install sqlite3


#upgrade Node to stable version 12
sudo npm cache clean -f
sudo npm install -g n
sudo n stable
PATH="$PATH"

npm install sequelize-cli -g
npm install sqlite3
npm install


#npm install --build-from-source
#npm install