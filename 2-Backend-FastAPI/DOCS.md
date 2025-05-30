# API de Gestión de Dispositivos con FastAPI

API para el registro y consulta de dispositivos con FastAPI.

## Características

- Registro de nuevos dispositivos GPS con nombre identificador.
- Listado completo de todos los dispositivos registrados.
- Almacenamiento en memoria durante la sesión.
- Documentación automática con Swagger UI.

## Tecnologías

- Python 3.10+
- FastAPI
- Pydantic (Validación de datos)
- Uvicorn (Servidor)

## Ejecución

1. Clona el repositorio:
   git clone https://github.com/Beto18v/Prueba-Tecnica.git
2. Instala las dependencias:
   "npm run dev"
3. Inicia el servidor:
    uvicorn main:app --reload
