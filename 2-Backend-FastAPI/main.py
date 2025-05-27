from fastapi import FastAPI
from pydantic import BaseModel
from typing import List

app = FastAPI()

# Modelo para el dispositivo
class DispositivoGPS(BaseModel):
    nombre: str

# Almacenamiento en memoria
dispositivos = []

# Registro de dispositivo
@app.post("/dispositivos/")
def registrar_dispositivo(nombre: str):
    nuevo_dispositivo: DispositivoGPS = DispositivoGPS(nombre=nombre)
    dispositivos.append(nuevo_dispositivo)
    return {"mensaje": "Dispositivo registrado", "dispositivo": nuevo_dispositivo}

# Listar dispositivos
@app.get("/dispositivos/", response_model=List[DispositivoGPS])
def listar_dispositivos():
    return dispositivos