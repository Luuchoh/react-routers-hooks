import React, { Component } from "react";
import axios from "axios";
import md5 from "md5";
import uuid from "react-uuid"; // id aleatorio
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

import { Navbar } from "./Navbar";
import '../styles/register.css'

const baseUrl = "https://movies-geek.herokuapp.com/usuario";

export default class Registro extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      form: {
        id: "",
        nombre: "",
        apellido_paterno: "",
        apellido_materno: "",
        username: "",
        password: "",
      },
    };
  }

  handleChange = async (e) => {
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handlerSubmit = (e) => {
    e.preventDefault();
  };

  ResgistroUsuario = async () => {
    await axios
      .post(baseUrl, {
        id: uuid,
        apellido_paterno: this.state.form.apellido_paterno,
        apellido_materno: this.state.form.apellido_materno,
        nombre: this.state.form.nombre,
        username: this.state.form.username,
        password: md5(this.state.form.password),
      })
      .then((response) => {
        Swal.fire({
            title: 'Usuario registrado',
            text: 'Genial ahora Logeate',
            icon: 'success',
            confirmButtonText: 'Continuar'
          })
        this.props.history.push("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  render() {
    return (
      <div>
        <Navbar />
        <div id="content-contacto">
          <h1>Registrate</h1>
          <form onSubmit={this.handlerSubmit} id="contacto">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Nombre completo
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="nombre"
                aria-describedby="nameHelp"
                onChange={this.handleChange}
              />
            </div>

            <div className="mb-3">
              <div className="row">
                <div className="col-6">
                  <label htmlFor="apellido_paterno" className="form-label">
                    Apellido paterno
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="apellido_paterno"
                    name="apellido_paterno"
                    aria-describedby="apellido_paternoHelp"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="col-6">
                  <label htmlFor="apellido_materno" className="form-label">
                    Apellido materno
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="apellido_materno"
                    name="apellido_materno"
                    aria-describedby="apellido_maternoHelp"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Correo electronico
              </label>
              <input
                type="text"
                className="form-control"
                id="email"
                name="username"
                aria-describedby="emailHelp"
                onChange={this.handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Contraseña
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                or
                onChange={this.handleChange}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => this.ResgistroUsuario()}
            >
              Registrar
            </button>
            <Link
                to="/"
                className="link mx-auto mt-4 text-white "
            >
                Ya esta registrado?
            </Link>
          </form>
        </div>
      </div>
    );
  }
}
