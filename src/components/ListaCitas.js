import React, { Component } from 'react';

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
                </div>
            </div>
        );
    }
}

export default ListaCitas;