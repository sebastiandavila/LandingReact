import React, { useState } from "react";

import "./App.css";
import axios from "axios";

const f = new Date();
const dia = f.getDate();
const mes = f.getMonth() + 1;
const año = f.getFullYear();
const fecha = dia + "/" + mes + "/" + año;

const user = {
  Nombre: "this.state.Nombre",
};

class formulario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      TipoID: "Tipo de Identificación",
      ID: "",
      Correo: "",
      Nombre: "",
      Apellidos: "",
      Fecha: fecha,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (
      this.state.TipoID == "Tipo de Identificación" ||
      this.state.ID == "" ||
      this.state.Correo == "" ||
      this.state.Nombre == "" ||
      this.state.Apellidos == "" ||
      this.state.Fecha == ""
    ) {
      alert("Rellene todos los campos para enviar la informacion");
    } else {
      axios
        .post("http://localhost:3020/clientes/add/", {
          TipoID: this.state.TipoID,
          Identificacion: this.state.ID,
          Email: this.state.Correo,
          Nombre: this.state.Nombre,
          Apellidos: this.state.Apellidos,
          Fecha: this.state.Fecha,
        })
        .then((response) => {
          // Respuesta del servidor
        })
        .catch((e) => {
          console.log(e);
        });
      alert("¡Gracias por llenar el formulario!");
      window.location.reload(true);
    }
  }

  render() {
    return (
      <>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
          integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
          crossorigin="anonymous"
        ></link>
        <body>
          <header className="App-header">
            <img
              src="https://lh3.googleusercontent.com/proxy/AOjuTusrXTWaXU5G-TcMk0GHmx_b_MhOEdP_NJg0vpjsJ36UphiYNbuXdsCKJLFR8aAvRCWxHINN6UWqKHKteICGxezHGxXERC8Z6VwEThaRPb5Wng"
              className="App-logo"
              alt="logo"
            />
            <center>
              <h1>¡Bienvenido!</h1>
            </center>
          </header>

          <center>
            <div className="Form">
              <form onSubmit={this.handleSubmit}>
                <div class="form-group">
                  <label for="TipoID">Tipo de Identificación</label>
                  <select
                    id="TipoID"
                    class="form-control"
                    name="TipoID"
                    value={this.state.TipoID}
                    onChange={this.handleChange}
                  >
                    <option disabled selected>
                      Tipo de Identificación
                    </option>
                    <option> Cédula de Ciudadanía</option>
                    <option> Cédula de Extranjería</option>
                  </select>
                </div>

                <div class="form-group">
                  <label for="ID"> Número de documento de identidad</label>
                  <input
                    type="number"
                    class="form-control"
                    id="ID"
                    name="ID"
                    value={this.state.ID}
                    placeholder="Número de documento de identidad"
                    onChange={this.handleChange}
                  ></input>
                </div>

                <div class="form-group">
                  <label for="Correo">correo electrónico</label>
                  <input
                    type="email"
                    class="form-control"
                    id="Correo"
                    maxlength="50"
                    name="Correo"
                    aria-describedby="emailHelp"
                    placeholder="correo electrónico"
                    value={this.state.Correo}
                    onChange={this.handleChange}
                  ></input>
                </div>

                <div class="form-group">
                  <label for="Nombre">Nombres</label>
                  <input
                    type="text"
                    class="form-control"
                    id="Nombre"
                    maxlength="30"
                    name="Nombre"
                    placeholder="Nombres"
                    value={this.state.Nombre}
                    onChange={this.handleChange}
                  ></input>
                </div>

                <div class="form-group">
                  <label for="Apellidos">Apellidos</label>
                  <input
                    type="text"
                    class="form-control"
                    id="Apellidos"
                    maxlength="30"
                    name="Apellidos"
                    placeholder="Apellidos"
                    value={this.state.Apellidos}
                    onChange={this.handleChange}
                  ></input>
                </div>

                <div class="form-group">
                  <label for="Fecha">Fecha de Ingreso</label>
                  <input
                    type="text"
                    class="form-control"
                    id="Fecha"
                    name="Fecha"
                    placeholder="Fecha de Ingreso"
                    value={fecha}
                    disabled
                  ></input>
                </div>
                <button type="submit" class="btn btn-primary mb-2">
                  Enviar
                </button>
              </form>
            </div>
          </center>
          <script
            src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
            integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
            crossorigin="anonymous"
          ></script>
          <script
            src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
            integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
            crossorigin="anonymous"
          ></script>
          <script
            src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
            integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV"
            crossorigin="anonymous"
          ></script>
        </body>
      </>
    );
  }
}
export default formulario;
