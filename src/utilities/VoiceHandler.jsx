import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const VoiceHandler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = false;

    let estaActivo = false;

    const iniciarReconocimiento = () => {
      if (!estaActivo) {
        try {
          recognition.start();
          estaActivo = true;
          window.recognitionActiva = true; // 🔴 activo
          console.log("🎙️ Reconocimiento de voz activado...");
        } catch (e) {
          console.warn("⚠️ El reconocimiento ya estaba iniciado.");
        }
      }
    };

    recognition.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map(result => result[0].transcript)
        .join(" ")
        .toLowerCase();

      console.log("🗣️ Texto detectado:", transcript);

      if (transcript.includes("home")) navigate("/");
      else if (transcript.includes("education")) navigate("/educacion");
      else if (transcript.includes("experience")) navigate("/experiencia");
      else if (transcript.includes("portfolio")) navigate("/portafolio");
      else console.log("⚠️ Comando no reconocido.");

      estaActivo = false;
      window.recognitionActiva = false; // 🔵 desactivo
      recognition.stop(); // se detiene para que onend lo reinicie
    };

    recognition.onend = () => {
      console.log("🛑 Reconocimiento detenido, reiniciando...");
      estaActivo = false;
      window.recognitionActiva = false;
      iniciarReconocimiento(); // reiniciar para mantenerlo continuo
    };

    // Expone la función global para el botón
    window.startVoice = () => {
      iniciarReconocimiento();
    };

    // Limpieza al desmontar
    return () => {
      recognition.stop();
      window.startVoice = null;
      window.recognitionActiva = false;
      estaActivo = false;
    };
  }, [navigate]);

  return null;
};