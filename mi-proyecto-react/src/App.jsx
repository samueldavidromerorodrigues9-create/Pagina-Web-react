import React from 'react';
import './App.css';
import { Servicio } from './componentes/Servicio';

const serviciosSafeCheck = [
  { 
    id: 1, 
    imagen: "/imagenes/generar.jpg", 
    titulo: "Generación de Códigos QR", 
    descripcion: "Safe Check permite a cada usuario registrado obtener un código QR digital único vinculado a su perfil y permisos. Su función principal es agilizar la identificación institucional o corporativa sin depender de carnés físicos de papel, garantizando un proceso moderno y sostenible." 
  },
  { 
    id: 2, 
    imagen: "/imagenes/escanear.jpg", 
    titulo: "Control de Acceso en Tiempo Real", 
    descripcion: "Diseñado para ser operado en porterías y recepciones. El personal a cargo utiliza la interfaz web o un dispositivo móvil para escanear el código QR del visitante o empleado. El sistema valida instantáneamente si el acceso está permitido o denegado, reduciendo las filas y mejorando la seguridad." 
  },
  { 
    id: 3, 
    imagen: "/imagenes/reportes.jpg", 
    titulo: "Trazabilidad y Bitácora de Entradas", 
    descripcion: "El servicio recopila y almacena automáticamente la fecha y hora exacta de cada ingreso y salida. Esto le permite a los administradores consultar historiales detallados y generar reportes precisos para auditorías internas o control de asistencia de manera centralizada." 
  }
];

function App() {
  return (
    <div className='App'>
      <h1>SAFE CHECK - SERVICIOS DEL SISTEMA</h1>
      {
        serviciosSafeCheck.map(item => (
          <Servicio 
            key={item.id}
            imagen={item.imagen}
            titulo={item.titulo}
            descripcion={item.descripcion}
          />
        ))
      }
    </div>
  );
}

export default App;