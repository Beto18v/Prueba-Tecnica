# Backup y restauración parcial

1. Para hacer un backup completo de la base de datos, abro la terminal y ejecuto
mysqldump -u mi_usuario -p mi_basededatos > respaldo.sql

2. Para restaurar el backup:
mysql -u mi_usuario -p mi_basededatos < respaldo.sql.

3. Para restauración parcial:
mysql -u mi_usuario -p mi_basededatos nombre_tabla < backup_dispositivos.sql
