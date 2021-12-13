import axios from "axios";
import React from "react";
import Swal from "sweetalert2";
import "../css/cover.css";
const Asistencia2 = () => {
  const validationOnlyNumbers = (value) => {
    let regExp = /^[0-9]+$/;
    return regExp.test(value);
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
    if(paso == false){
      Swal.fire({
        title: "El DNI debe ser solo numeros",
        icon: "error",
      });
      return ;
    };

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

  return (
    <>
      <section className=" h-screen">
        <div className="flex justify-center items-center  bg-gray-100 m-auto py-6  h-32">
          <img className=" mb-2"
            src="https://desarrollo.consigueventas.com/Frontend/Recursos/logoCompleto.png" />
        </div>

        <div className="bg-gradient-to-r from-yellow-700 to-yellow-300 h-full contanier ">
          <div className="   m-auto  grid grid-cols-1 xl:grid-cols-2   container mx-auto   ">

            <div className=" mt-1 py-12 px-6 sm:p-20 xl:w-auto  text-xl w-full max-w-screen-xl mx-auto px-4 ">
              <div className="px-0 text-justify font-medium ">
                <h1 className="text-center text-4xl  font-serif  "> ASISTENCIA </h1>
                <h1 className="text-center text-4xl  font-serif ">  CONSIGUE VENTAS</h1><br />
                <h2 className="">Reglas:</h2>
                <li id="one" >
                  Tolerancia 10 min
                </li>
                <li id="one">
                  3 Tardanzas = 1 día de inasistencia
                </li>
                <li id="one" >
                  1 día de inasistencia = Un día más a la fecha final del periodo de práctica
                </li>
              </div>
            </div>
            <div className=" flex justify-center w-full max-w-screen-xl mx-auto px-4 ">
              <div className=" mt-auto mb-auto p-4 bg-white shadow-2xl rounded-lg ">
                <p className="font-medium  text-sm sm:text-xl text-gray-900 ">Bienvenido</p>

                <div className="">
                  <label className=" space-y-1 md:space-y-6 py-2 ">
                    <input
                      type="number"
                      id="inputPassword2"
                      placeholder="Ingrese su DNI para la asistencia"
                      className="w-full py-3 sm:py-2 px-6 ring-1 ring-gray-300 rounded-xl placeholder-gray-800 bg-gray-50  focus:outline-none  
                                text-gray-900 "
                    />
                    <button class="flex-shrink-0 bg-gray-500 text-white text-base font-semibold py-2   sm:px-2 rounded-lg shadow-md hover:bg-gray-700 
                    w-full"
                      type="button"
                      onClick={enviarDatos}>
                      Marcar
                    </button>

                  </label>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

    </>
  );
};

export default Asistencia2;
