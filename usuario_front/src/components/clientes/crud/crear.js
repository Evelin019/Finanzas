import React from 'react';
import { Container, Row, Form, Button } from 'react-bootstrap';
import "../clientes.css";
import { request } from '../../helper/helper';
import Loading from "../../loading/loading";
import MessagePrompt from "../../prompts/message";

export default class ClientesCrear extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            message: {
                text:"",
                show: false,
            },
            loading: false,
            cliente:{
                nombre: "",
                apellido_p: "",
                apellido_m: "",
                telefono: "",
                mail: "",
                direccion: "",
            },
        };
        this.onExitedMessage = this.onExitedMessage.bind(this);
    }

    setValue(inicio, value) {
        this.setState({
            cliente: {
               ...this.state.cliente,
                [inicio]: value,
            },
        });
    }

    guardarClientes(){
        this.setState({ loading: true });
        request
        .post("/clientes", this.state.cliente)
        .then((response) => {
            if (response.data.exito){
                this.setState({
                    rediret: response.data.exito,
                    message: {
                        text: response.data.msg,
                        show: true,
                    },
                });
            }
            this.setState({ loading: false});
        })
        .catch((err) => {
            console.error(err);
            this.setState({ loading: true});
        });
    }

    onExitedMessage() {
        if (this.state.redirect) this.props.changeTab('buscar');
    }

    render() {
        return (
            <Container id="usuarios-crear-container">
                <MessagePrompt
                    text = {this.state.message.text}
                    show = {this.state.message.show}
                    duration = {2500}
                    onExited = {this.onExitedMessage}
                />
                <Loading show={this.state.loading}/>
                <Row>
                    <h1>Crear Usuarios</h1>
                </Row>
                <Row>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control onChange = {(e) => this.setValue ("nombre", e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Primer Apellido</Form.Label>
                            <Form.Control onChange = {(e) => this.setValue ("apellido_p", e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Segundo Apellido</Form.Label>
                            <Form.Control onChange = {(e) => this.setValue ("apellido_m", e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Telefono</Form.Label>
                            <Form.Control onChange = {(e) => this.setValue ("telefono", e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Correo Electronico</Form.Label>
                            <Form.Control onChange = {(e) => this.setValue ("email", e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Direccion</Form.Label>
                            <Form.Control onChange = {(e) => this.setValue ("direccion", e.target.value)}/>
                        </Form.Group>

                        <Button variant="primary" onClick = {()=> console.log(this.guardarClientes())}>
                            Crear usuario
                        </Button>
                    </Form>
                </Row>
            </Container>
        );
    }
}