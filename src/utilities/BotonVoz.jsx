import { useEffect, useState } from "react";

export const BotonVoz = () => {
  const [activo, setActivo] = useState(false);

  const manejarClick = () => {
    if (window.startVoice) {
      window.startVoice();
      setActivo(true);
    } else {
      console.warn("🔇 La función de voz no está disponible.");
    }
  };

  // Escuchar si el reconocimiento se reinicia para mantener el estado
  useEffect(() => {
    const intervalo = setInterval(() => {
      if (!window.speechSynthesis?.speaking && !window.recognitionActiva) {
        setActivo(false);
      }
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <button
      onClick={manejarClick}
      className={`btn rounded-circle ${
        activo ? "btn-danger" : "btn-primary"
      }`}
      style={{ position: "fixed", bottom: 20, right: 20, zIndex: 1000 }}
      title="Activar reconocimiento de voz"
    >
      <i className="fa-solid fa-microphone"></i>
    </button>
  );
};
