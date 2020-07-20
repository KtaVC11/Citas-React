import React, { Component } from 'react';
import Header from './components/Header';
import AgregarCita from './components/AgregarCita';
import ListaCitas from './components/ListaCitas';

//el state en el componente principal se utiliza cuando se quieren comunicar componentes
//pero el state dentro de otros componentes se puede utilizar para validar algo y mostrar un mensaje en el propio componente
class App extends Component {
  state = {
    citas: []
  }

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
            />
          </div>

        </div>
      </div>
    );
  }
}


export default App;
