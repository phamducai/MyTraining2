CREATE USER 'root'@'%' IDENTIFIED BY 'Simple123';
GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES;
