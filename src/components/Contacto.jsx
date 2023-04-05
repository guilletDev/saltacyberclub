import React, { useState } from "react";
import styles from "../style";

function Contacto() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [asunto, setAsunto] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Nombre:", nombre);
    console.log("Telefóno:", apellido);
    console.log("Correo electrónico:", email);
    console.log("Asunto:", asunto);
    console.log("Mensaje:", mensaje);
    setNombre("");
    setApellido("");
    setEmail("");
    setAsunto("");
    setMensaje("");
  };

  return (
    <div className="">
      <form
        id="contacto"
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto mt-8 px-10 lg:px-0 py-24"
      >
        <h1 className={`${styles.heading2} text-white-700 text-center`}>
          Contacto
        </h1>
        <br />
        <br />
        <div className="mb-4">
          <label
            htmlFor="nombre"
            className="block text-white font-poppins font-semibold mb-2"
          >
            Nombre y Apellido
          </label>
          <input
            type="text"
            id="nombre"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="apellido"
            className="block text-white font-poppins font-semibold mb-2"
          >
            Télefono
          </label>
          <input
            type="text"
            id="apellido"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-white font-poppins font-semibold mb-2"
          >
            Correo electrónico
          </label>
          <input
            type="email"
            id="email"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="asunto"
            className="block text-white font-poppins font-semibold mb-2"
          >
            Asunto
          </label>
          <input
            type="text"
            id="nombre"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="mensaje"
            className="block text-white font-poppins font-semibold mb-2"
          >
            Mensaje
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows="5"
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
          />
        </div>{" "}
        <br />
        <br />
        <div className="text-center">
          <button
            type="submit"
            className="bg-purple-700 hover:bg-purple-900 text-white font-poppins font-semibold py-2 px-12 rounded-[10px] "
          >
            Enviar Mensaje
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contacto;
