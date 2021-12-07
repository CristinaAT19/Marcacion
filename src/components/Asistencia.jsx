import axios from "axios";
import React from "react";
import Swal from "sweetalert2";
import "../css/cover.css";
const Asistencia = () => {
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
          title: "El DNI deve tener 8 caracteres",
          icon: "error",
        });
      });
  };

  return (
    <>
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <header className="mb-auto">
          <div>
            <img
              className="float-md-start mb-0"
              src="https://desarrollo.consigueventas.com/Frontend/Recursos/logoCompleto.png"
              alt="logo"
            />
          </div>
        </header>
        <main>
          <div className="px-6">
            <h1>ASISTENCIA CONSIGUE VENTAS</h1>
            <h2 className="">Reglas</h2>
            <li id="one" background="list-style:none" className="lead">
              Tolerancia: 10 min
            </li>
            <li id="one" className="lead">
              3 Tardanzas = 1 día de inasistencia
            </li>
            <li id="one" className="lead">
              1 día de inasistencia = Un día más a la fecha final del periodo de
              práctica
            </li>
          </div>
          <div className="px-3">
            <h2>Ingrese su DNI para la asistencia:</h2>
            <form className="row justify-content-center">
              <div className="col-6">
                <label htmlFor="inputPassword2" className="visually-hidden">
                  DNI
                </label>
                <input
                  type="number"
                  className="form-control inputcentrado"
                  id="inputPassword2"
                  placeholder="DNI"
                />
              </div>
              <div className="col-0">
                <br></br>
                <button
                  type="button"
                  className="btn btn-primary mb-3"
                  onClick={enviarDatos}
                >
                  Aceptar
                </button>
              </div>
            </form>
          </div>
        </main>
        <footer className="mt-auto text-white-50">
          <p>Consigue Ventas 2021</p>
        </footer>
      </div>
    </>
  );
};

export default Asistencia;
