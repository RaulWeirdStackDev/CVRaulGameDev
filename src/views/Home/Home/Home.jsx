import {Perfil, Descripcion, CVenPDF} from '../index' 
import './home.css'

export const Home = () => {
  return (
    <>
    <main className="main">
    <Perfil/>
    <Descripcion className="descripción"/>
    <CVenPDF className="cvDescargable"/>
    </main>
    </>
  )
}

 