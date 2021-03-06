import React, { Component } from 'react';
import Cita from './Cita';
import PropTypes from 'prop-types';
class ListaCitas extends Component {

    render() {
        //validar el mensaje que se va a mostrar
        const citas = this.props.citas;
        //console.log(Object.keys(citas).length);
        //verificar si hay citas
        const mensaje = Object.keys(citas).length === 0 ? 'No hay Citas' : 'Adminstra tus Citas Aqui:';
        return (
            <div className='card mt-5'>
                <div className='card-body'>
                    <h2 className="card-title text-center">{mensaje}</h2>
                    <div className='lista-citas'>
                        {Object.keys(this.props.citas).map(cita => (
                            <Cita
                                key={cita}
                                info={this.props.citas[cita]}
                                borrarCita={this.props.borrarCita}
                            />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

ListaCitas.propTypes = {
    citas: PropTypes.array.isRequired,
    borrarCita: PropTypes.func.isRequired
}

export default ListaCitas;