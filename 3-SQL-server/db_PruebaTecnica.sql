CREATE DATABASE PruebaTecnica;

USE PruebaTecnica;

CREATE TABLE Dispositivos (
    ID SMALLINT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(250) NOT NULL,
    Categoria VARCHAR(250) NOT NULL,
    Precio INT NOT NULL,
    Descripcion VARCHAR(250) NOT NULL,
    Estado BIT
);

SELECT * FROM Dispositivos;

-- Inserción de datos
INSERT INTO Dispositivos (Nombre, Categoria, Precio, Descripcion, Estado)
VALUES 
    ('Garmin eTrex 32x', 'GPS Portátiles', '299.99', 'GPS portátil resistente con pantalla en color', 0),
    ('Garmin DriveSmart 66', 'Navegadores GPS', '349.99', 'Navegador GPS con pantalla táctil y actualizaciones de tráfico', 1),
    ('Autel Robotics EVO Lite+', 'Drones', '2590.19', 'Dron diseñado para capturar imágenes y videos de alta calidad desde el aire', 0);

-- Consultar activos ordenados por precio
SELECT * FROM Dispositivos 
WHERE Estado = 1
ORDER BY Precio;

-- Procedimiento almacenado para actualizar el estado
CREATE PROCEDURE sp_ActualizarEstadoDispositivo(
    IN dispositivo_id INT,
    IN nuevo_estado BOOLEAN
)
UPDATE Dispositivos
SET Estado = nuevo_estado
WHERE ID = dispositivo_id;

-- Ejecutar el procedimiento
CALL sp_ActualizarEstadoDispositivo(1, 0);

-- Consultar estado del Dispositivo
SELECT ID, Nombre, Estado FROM Dispositivos WHERE ID = 1;