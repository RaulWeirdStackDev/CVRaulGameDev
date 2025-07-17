import './educacion.css'
import educacionTec from '../../data/educacionTec.json';
import educacionPed from '../../data/educacionPed.json';

export const Educacion = () => {
  return (
    <>
    <div className="contenedor">
      <div className='tec'>
        <h2>Technological Education </h2>
        <ul>
          {educacionTec.map((educacion) => (
            <li key={educacion.id}>
              <h3>{educacion.tipo}: {educacion.nombre}</h3>
              <h5>{educacion.entidad}</h5>
              <h5>Skills: {educacion.skills}</h5>
              <p>{educacion.fecha}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className='ped'>
        <h2>Pedagogical Education</h2>
        <ul>
          {educacionPed.map((educacion) => (
            <li key={educacion.id}>
              <h3>{educacion.tipo}: {educacion.nombre}</h3>
              <h5>{educacion.entidad}</h5>
              <h5>Skills: {educacion.skills}</h5>
              <p>{educacion.fecha}</p>
            </li>
          ))}
        </ul>
      </div>
      </div>
    </>
  );
};


