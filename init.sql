-- Tạo người dùng root với quyền truy cập từ mọi nơi
GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY 'Simple123' WITH GRANT OPTION;
FLUSH PRIVILEGES;
