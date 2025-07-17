import portafolio from "../../data/portafolio.json";
import "./portafolio.css";

export const Portafolio = () => {
  return (
    <div className="portafolio">
      <ul>
        {portafolio.map((portafolio) => (
          <li key={portafolio.id} className="portEle">
            <video src={portafolio.video}
            controls 
            className="portVideo"
            width= "300px"
            height= "auto"

            ></video>
            <h3 className="portTitle">{portafolio.title}</h3>
            <p className="portDesc">{portafolio.desc}</p>
            {portafolio.link ? (
  <a href={portafolio.link} target="_blank" rel="noopener noreferrer">
    <strong>See this project here</strong>
  </a>
) : (
  <strong><p className="comingSoon">Coming soon...</p></strong>
)}
          </li>
        ))}
      </ul>
    </div>
  );
};
