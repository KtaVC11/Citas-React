import React, { Component } from 'react';
import Header from './components/Header';
import AgregarCita from './components/AgregarCita';
import ListaCitas from './components/ListaCitas';
import PropTypes from 'prop-types';

//el state en el componente principal se utiliza cuando se quieren comunicar componentes
//pero el state dentro de otros componentes se puede utilizar para validar algo y mostrar un mensaje en el propio componente
class App extends Component {
  state = {
    citas: []
  }
  //lee lo que hay en el storage y se lo pasa al state
  componentDidMount() {
    //console.log('Esta listo');
    const citasLS = localStorage.getItem('citas');
    if (citasLS) {
      this.setState({
        citas: JSON.parse(citasLS)
      })
    }
  }

  componentDidUpdate() {
    //console.log('Algo cambio!..');
    localStorage.setItem(
      'citas',
      JSON.stringify(this.state.citas)
    )
  }

  /*componentWillMount() {
    console.log("Yo me ejecuto antes");
  }

  componentWillUnmount() {
    console.log('Yo hasta que cierra el componente');
  }*/



  crearCita = (nuevaCita) => {
    //console.log(cita);
    //siempre se debe crear una copia del state y luego reescribirlo
    //con el spread operator que son los tres puntos se hace la copia
    const citas = [...this.state.citas, nuevaCita];//aqui se hace la copia y pasa la nueva cita
    console.log(citas);

    //siempre se debe usar setstate para cambiar el state
    //la variable y el valor se llaman igual, entonces se deja solo uno
    this.setState({
      citas
      //citas: citas
    });


  }

  //eliminar una cita
  borrarCita = id => {
    //obtener copia del state
    const citasActuales = [...this.state.citas];

    //borrar el elemento del state
    //console.log('Antes..');
    //console.log(citasActuales);
    const citas = citasActuales.filter(cita => cita.id !== id);

    //console.log('Despues..');
    //console.log(citas);

    //actualizar el state
    this.setState({
      citas
    });
  }
  render() {
    return (
      <div className="container" >
        <Header
          titulo={'Administrador de Pacientes de Veterinaria'}
        />
        <div className="row">
          <div className="col-md-6">
            <AgregarCita
              crearCita={this.crearCita}
            />
          </div>

          <div className="col-md-6">
            <ListaCitas
              citas={this.state.citas}
              borrarCita={this.borrarCita}
            />
          </div>

        </div>
      </div>
    );
  }
}


export default App;
