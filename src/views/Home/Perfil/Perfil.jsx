import "./perfil.css";

export const Perfil = () => {
  return (
    <>
      <article className="características mt-5">
        <h2 className="perfil">Professional Profile</h2>
        <div className="contenedor">
        <div className="icono">
           <i className="fa-solid fa-gamepad"></i>
            <p>Passionate Gamer</p>
          </div>
          <div className="icono">
            <i className="fa-solid fa-laptop-code"></i>
            <p>Game Developer </p>
          </div>
          <div className="icono">
            <i className="fa-solid fa-chalkboard-user"></i>
            <p>Gamified EdTech</p>
          </div>
        </div>
      </article>
    </>
  );
};
