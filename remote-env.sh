
export CERTIFICATE_DIR=$1
export WEBSITE_PORT=$2
export MYSQL_ROOT_PASSWORD=$3
export AROMO_DB_HOST=$4
export AROMO_DB_PORT=$5
export AROMO_DB_USER=$6
export AROMO_DB_PASSWORD=$7
export AROMO_DB_NAME=$8

FILE=/etc/profile.d/aromo.sh
sudo touch $FILE

echo "export CERTIFICATE_DIR=$CERTIFICATE_DIR" >> $FILE
echo "export WEBSITE_PORT=$WEBSITE_PORT" >> $FILE
echo "export MYSQL_ROOT_PASSWORD=$MYSQL_ROOT_PASSWORD" >> $FILE
echo "export AROMO_DB_HOST=$AROMO_DB_HOST" >> $FILE
echo "export AROMO_DB_PORT=$AROMO_DB_PORT" >> $FILE
echo "export AROMO_DB_USER=$AROMO_DB_USER" >> $FILE
echo "export AROMO_DB_PASSWORD=$AROMO_DB_PASSWORD" >> $FILE
echo "export AROMO_DB_NAME=$AROMO_DB_NAME" >> $FILE

. $FILE