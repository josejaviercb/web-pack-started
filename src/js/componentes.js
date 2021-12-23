//Importaciones
import css from "../css/componentes.css";
import webpacklogo from '../assests/img/webpack-logo.png';

//Saludar
export const saludar = (nombre) => {
    console.log('Creando etiqueta h1');
    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${ nombre } !!!`;
    document.body.append(h1);

    //Img
    // const img = document.createElement('img');
    // img.src = webpacklogo;
    // document.body.append(img);
}