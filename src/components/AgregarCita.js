import React, { Component } from 'react';
import uuid from 'uuid'; //esta libreria crea un id unico
//el state revisa cuando no esten llenos tofos los campos agregar un error abajo 
class AgregarCita extends Component {

    //refs, lee los valores del formulario
    nombreMascotaRef = React.createRef();
    propietarioRef = React.createRef();
    fechaRef = React.createRef();
    horaRef = React.createRef();
    sintomasRef = React.createRef();

    state = {
        error: false //este es por defecto cuando arranca
    }
    crearNuevaCita = e => {
        e.preventDefault();
        this.props.crearCita();//aqui se manda a llamar del padre
        //siempre se pasa del padre al hijo, aqui se hace al reves 
        //console.log('Hiciste click!!');
        const mascota = this.nombreMascotaRef.current.value,
            propietario = this.propietarioRef.current.value,
            fecha = this.fechaRef.current.value,
            hora = this.horaRef.current.value,
            sintomas = this.sintomasRef.current.value;

        //validar formulario
        if (mascota === '' || propietario === '' || fecha === '' || hora === '' || sintomas === '') {
            //console.log('faltan campos');
            //mostar mensaje de validacion con state
            //si falta un campo el error pasa a true
            this.setState({
                error: true
            })

        } else {
            const nuevaCita = {
                id: uuid(),
                //object literal enhancement
                mascota, propietario, fecha, hora, sintomas
                //cuando se llaman igual se puede dejar solo uno
                //mascota: mascota //propiedad mascota y varibale se llama igual

            }
            //se envia el objeto al padre para actualizar el state
            this.props.crearCita(nuevaCita);
            //reiniciar el formulario
            e.currentTarget.reset();

            //si hay error que lo elimine o resetee
            this.setState({
                error: false
            })

        }

        /*
                console.log(this.nombreMascotaRef.current.value);
                console.log(this.propietarioRef.current.value);
                console.log(this.fechaRef.current.value);
                console.log(this.horaRef.current.value);
                console.log(this.horaRef.current.value);*/
    }
    render() {
        //aqui muestra el error de algun campo vacio
        const existeError = this.state.error;
        return (
            <div className="card mt-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">Agregar las Citas Aqui</h2>
                    <form onSubmit={this.crearNuevaCita}>
                        <div className="form-group row">
                            <label className="col-sm-5 col-lg-3 col-form-label">Nombre Mascota</label>
                            <div className="col-sm-7 col-lg-9">
                                <input type="text" className="form-control" ref={this.nombreMascotaRef} placeholder="Nombre Mascota" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-3 col-form-label">Nombre Dueño</label>
                            <div className="col-sm-8 col-lg-9">
                                <input type="text" ref={this.propietarioRef} className="form-control" placeholder="Nombre Dueño de la Mascota" />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-3 col-form-label">Fecha</label>
                            <div className="col-sm-8 col-lg-3  mb-4 mb-lg-0">
                                <input type="date" ref={this.fechaRef} className="form-control" />
                            </div>

                            <label className="col-sm-4 col-lg-3 col-form-label">Hora</label>
                            <div className="col-sm-8 col-lg-3">
                                <input type="time" ref={this.horaRef} className="form-control" />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-3 col-form-label">Sintomas</label>
                            <div className="col-sm-8 col-lg-9">
                                <textarea className="form-control" ref={this.sintomasRef}></textarea>
                            </div>
                        </div>
                        <div className="form-group row justify-content-end">
                            <div className="col-sm-3">
                                <button type="submit" className="btn btn-success w-100">Agregar</button>
                            </div>
                        </div>
                    </form>
                    {existeError ? <div className='alert alert-danger text-center'>Todos los campos son obligatorios</div> : ''}
                </div>

            </div>
        );
    }
}

export default AgregarCita;