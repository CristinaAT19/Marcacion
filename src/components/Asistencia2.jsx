import axios from "axios";
import React from "react";
import Swal from "sweetalert2";
import "../css/cover.css";
const Asistencia2 = () => {
  const enviarDatos = (e) => {
    e.preventDefault();
    const dni = document.getElementById("inputPassword2");
    const apiMarcar =
      "https://desarrollo.consigueventas.com/Backend/public/api/marcar";
    const usertime = new Date();
    const useragent = navigator.userAgent;
    const plataform = navigator.platform;

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
          icon:"info",
        });
        
      })
      .catch((e) => {
        Swal.fire({
          title: "El DNI debe tener 8 caracteres",
          icon: "error",
        });
      });
  };

  return (
    <> 
    <section className="bg-gradient-to-r from-yellow-300 to-yellow-700 h-screen">
      <header className=" border p-4 flex justify-start bg-white">
        logo
      </header>
      <main>
        
      <div className="w-full min-h-screen bg-gray-100 flex justify-center items-center">
	                <div className="w-3/5 bg-blue-100 rounded-lg shadow-sm p-5 border-dashed border border-blue-500 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
              <div className="flex flex-col sm:flex-row justify-start items-center gap-4">
                <div className="bg-blue-200 flex p-2 rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                      d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"></path>
                  </svg>
                </div>
                <div className="text-center sm:text-left">
                  <h1 className="text-gray-700 font-bold tracking-wider">Secure Your Account</h1>
                  <p className="text-gray-500 font-semibold">Two-factor authentication adds an extra layer of security to
                    your account. To log in, in addition you'll need to provide a 6 digit code</p>
                </div>
              </div>
            <div>
                <button className="bg-blue-500 py-2 px-4 text-white font-bold rounded-md hover:bg-blue-600">Enable</button>
            </div>
           
          </div>
        </div>
      </div>

      </main>
    
    </section>     
    </>
  );
};

export default Asistencia2;
