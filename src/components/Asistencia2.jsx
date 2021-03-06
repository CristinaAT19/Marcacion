import axios from "axios";
import React, { useRef } from "react";
import Swal from "sweetalert2";
// import "../css/cover.css";
const Asistencia2 = () => {
  const validationOnlyNumbers = (value) => {
    let regExp = /^[0-9]+$/;
    return regExp.test(value);
}
  const validationQuantity = (value) => {
    if(value.length === 8){
      return true;
    }else{
      return false;
    }
  }


  const enviarDatos = (e) => {
    e.preventDefault();
    const dni = document.getElementById("inputPassword2");
    const apiMarcar =
      "https://desarrollo.consigueventas.com/Backend/public/api/marcar";
    const usertime = new Date();
    const useragent = navigator.userAgent;
    const plataform = navigator.platform;
    let paso = validationOnlyNumbers(dni.value);
    let quantityNumbers = validationQuantity(dni.value);
    if(paso == false){
      Swal.fire({
        title: "El DNI debe ser solo numeros",
        icon: "error",
      });
      return ;
    };
    if(quantityNumbers == false){
      Swal.fire({
        title: "Deben ser 8 numeros",
        icon: "error",
      });
      return ;
    }
    axios
      .post(apiMarcar, {
        dni: dni.value,
        plataforma: plataform,
        useragent: useragent,
        usertime: usertime,
      })
      .then((Response) => {
        Swal.fire({
          title: Response.data.mensaje,
          icon: "info",
        });

      })
      .catch((e) => {
        const punto = ".";
        let errores = e.response.data.errors
        // errores = errores.split(punto)
        errores = JSON.stringify(errores['dni'],null,2);
        // console.log(errores);
        errores = errores.replace(/[\[\]']+/g, "");
        errores = errores.replace(/[\{\}]+/g, "");
        errores = errores.replace(/[\,]+/g, "<br>");
        errores = errores.replace(/[\:]+/g, "");
        errores = errores.replace(/[\n]+/g, "");
        Swal.fire({
          title: errores,
          icon: "error",
        });
      });
  };
  useRef([

  ]);
  const campo = useRef();
  const onInputDni = () => {
    if (campo.current.value.length > 8) {
      campo.current.value = campo.current.value.slice(0, 8);
    }
  };

  return (
    <> 
      {/* Container */}
      <div className="h-screen bg-gradient-to-r from-yellow-700 to-yellow-300">
        {/* Header */}
        <div className="flex justify-between bg-gray-100 py-1 border-b border-gray-400 shadow-lg">
          <img className="h-16 mx-4" src="https://desarrollo.consigueventas.com/Frontend/Recursos/Logo.svg"/>
          <button
              type="submit" 
              onClick={()=>{

                window.location.replace("https://erp.consigueventas.com/sistema/asistencia/#/login");
              }}  
              className="cursor-pointer py-2 px-6 block duration-75 text-gray-900  text-md md:text-xl font-bold w-52 text-center rounded">
              Inicio de sesi??n
            </button>
        </div>
        {/* Contenido de las dos grillas */}
        <div className="mx-auto grid grid-cols-1 xl:grid-cols-12 flex justify-center content-center h-5/6">
          {/* Contenido de las reglas */}
          <div className="flex col-span-6 p-4 text-white justify-center">
            <div className="p-4 text-justify font-medium">
              <h1 className="text-center pb-2 text-2xl md:text-4xl ">Reglas</h1>
              <h3 className="text-lg md:pl-7 md:text-3xl" >Tolerancia 10 min</h3>
              <h3 className="text-lg md:pl-7 md:text-3xl">3 Tardanzas = 1 d??a de inasistencia</h3>
              <h3 className="text-lg md:pl-7 md:text-3xl">1 d??a de inasistencia = Un d??a m??s a la fecha final del periodo de pr??ctica</h3>
            </div>
          </div>

          {/* Contenido del formulario */}
          <div className="flex col-span-6 p-4 justify-center ">
            <div className=" p-4 md:p-10 bg-white shadow-2xl rounded-lg">
              <p className="font-medium text-sm sm:text-xl text-gray-900 text-center">Bienvenido</p>
              <div>
                <input ref={campo} onInput={onInputDni} type="number" id="inputPassword2" placeholder="Ingrese su DNI para la asistencia" className="w-full my-5 py-3 sm:py-2 px-6 ring-1 ring-gray-300 rounded-xl placeholder-gray-800 bg-gray-50 focus:outline-none text-gray-900"/>
                <button class="flex-shrink-0 bg-gray-500 text-white text-base font-semibold py-2 sm:px-2 rounded-lg shadow-md hover:bg-gray-700 w-full"  type="button" onClick={enviarDatos}>Marcar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default Asistencia2;
