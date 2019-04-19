FILE=/etc/profile.d/aromo.sh
sudo touch $FILE

echo "export CERTIFICATE_DIR=$1" >> $FILE
echo "export WEBSITE_PORT=$2" >> $FILE
echo "export MYSQL_ROOT_PASSWORD=$3" >> $FILE
echo "export AROMO_DB_HOST=$4" >> $FILE
echo "export AROMO_DB_PORT=$5" >> $FILE
echo "export AROMO_DB_USER=$6" >> $FILE
echo "export AROMO_DB_PASSWORD=$7" >> $FILE
echo "export AROMO_DB_NAME=$8" >> $FILE

. $FILE