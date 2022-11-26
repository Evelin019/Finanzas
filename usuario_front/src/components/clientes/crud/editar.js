import React
 from 'react';
import { Container, Row, Form, Button } from 'react-bootstrap';
import "../clientes.css";
import { request } from '../../helper/helper';
import Loading from "../../loading/loading";
import MessagePrompt from "../../prompts/message";
import CondirmationPrompt from "../../prompts/confirmation";

export default class ClientesEditar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            idCliente : this.props.getIdCliente(),
            rediret: false,
            message: {
                text:"",
                show: false,
            },
            confirm: {
                title: "",
                text: "",
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

    componentDidMount(){
        this.getCliente();
    }
    
    getCliente(){
        this.setState({ loading: true });
        request
        .get(`/clientes/${this.state.idCliente}`)
        .then((response) => {
            this.setState({ 
                cliente: response.data,
                loading: false,
            });
        })
        .catch((err) => {
            console.error(err);
            this.setState({ loading: false });
        });
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
        .put(`/clientes/${this.state.idCliente}`, this.state.cliente)
        .then((response) => {
            if (response.data.exito){
                this.props.changeTab('buscar')
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
                <CondirmationPrompt
                    show = {true}
                />
                <Loading show={this.state.loading}/>
                <Row>
                    <h1>Editar Usuarios</h1>
                </Row>
                <Row>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control value = {this.state.cliente.nombre} onChange = {(e) => this.setValue ("nombre", e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Primer Apellido</Form.Label>
                            <Form.Control value = {this.state.cliente.apellido_p} onChange = {(e) => this.setValue ("apellido_p", e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Segundo Apellido</Form.Label>
                            <Form.Control value = {this.state.cliente.apellido_m} onChange = {(e) => this.setValue ("apellido_m", e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Telefono</Form.Label>
                            <Form.Control value = {this.state.cliente.telefono} onChange = {(e) => this.setValue ("telefono", e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Correo Electronico</Form.Label>
                            <Form.Control value = {this.state.cliente.mail} onChange = {(e) => this.setValue ("mail", e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasic">
                            <Form.Label>Direccion</Form.Label>
                            <Form.Control value = {this.state.cliente.direccion} onChange = {(e) => this.setValue ("direccion", e.target.value)}/>
                        </Form.Group>

                        <Button 
                            variant="primary" 
                            onClick = {()=> console.log(this.guardarClientes())}
                            >
                            Guardar cliente editado
                        </Button>
                    </Form>
                </Row>
            </Container>
        );
    }
}