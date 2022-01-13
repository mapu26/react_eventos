import imagen0 from './imagenes/rey_atanagildo.png';
import imagen1 from './imagenes/rey_sisebuto.png';
import './App.css';
import { useRef } from 'react';

function App() {
  const refCaja = useRef(); /*Esto se hace para referenciar una cosa. En este caso del div caja*/
  const moneda = 23.16;

  const incrementar = (e) =>{
    e.target.innerHTML = Number(e.target.innerHTML)+1; /*Incrementa en 1 el valor de la caja de abajo. Numbre es para pasar a numero*/
    /*e.target.style.backgroundColor = "red";*/
    if(e.target.innerHTML>=10){
      e.target.innerHTML = 1;
    }
    if(e.target.innerHTML>=8){
      e.target.style.backgroundColor = "red";
    }else{
      e.target.style.backgroundColor = "white";
    }
  }

  const convertir = ()=>{  /*funcion flecha*/
    refCaja.current.innerHTML = Number(refCaja.current.innerHTML)*moneda;
  }

  const cambio = (e) =>{
    if(e.target.src.includes("atanagildo")){
      e.target.src = imagen1;
    }else{
      e.target.src = imagen0;
    }
  }

  const lectura = (e) =>{
    refCaja.current.innerHTML = e.target.value
  }


  return (
    <>
      <div ref={refCaja} className='caja' onClick={incrementar}>1</div>
      <button onClick={convertir}>Aceptar</button>
      <div> <img onClick={cambio} src={imagen0}/></div>
      <input onChange={lectura} className='campo'/>
    </>
  );
}

export default App;
