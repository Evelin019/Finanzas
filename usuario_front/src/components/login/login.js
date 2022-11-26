import React from "react";
import axios from "axios";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
//import APIHOST from "../../app.json";
import app from "../../app.json";
import './login.css';
import {isNull} from "util";
import Cookies from "universal-cookie";
import {calcularEspiracionSesion} from "../helper/helper";
import Loading from "../loading/loading";

const {APIHOST} = app;
const cookies = new Cookies();

export default class login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            usuario: '',
            pass: '',
        };
    }
    iniciarSesion() {
        this.setState({loading: true});
        axios.post(`${APIHOST}/usuarios/login`, {
            usuario: this.state.usuario,
            pass: this.state.pass,
        })
        .then((response) => {
            if (isNull(response.data.token)){
                alert("Usuario y/o Contraseña invalidos");
            }else{
                cookies.set('_s', response.data.token, {
                    path: '/',
                    expires: calcularEspiracionSesion(),
                });
                this.props.history.push(window.open('/clientes'));
            }
            this.setState({loading: false});
            {/*console.log(response);*/}
        })
        .catch((err) => {
            console.log(err);
            this.setState({loading: false});
        });

        {/*alert(`usuario: ${this.state.usuario} - password: ${this.state.pass}`);*/}
    }
    render() {
        return (
            <Container id="login-container" >
                <Loading show={this.state.loading}/>
                <Row>
                    <Col>
                        <Row>
                            <h2>Iniciar sesion</h2>
                        </Row>
                        <Row>
                            <Col
                                sm="12"
                                xs="12"
                                md={{ span: 4, offset: 4 }}
                                lg={{ span: 4, offset: 4 }}
                                xl={{ span: 4, offset: 4 }}>
                                <Form>
                                    <Form.Group>
                                        <Form.Label className="Form-Label">Usuario</Form.Label>
                                        <Form.Control
                                            onChange={(e) =>
                                                this.setState({ usuario: e.target.value })} />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label className="Form-Label">
                                            Contraseña
                                        </Form.Label>
                                        <Form.Control type="password"
                                            onChange={(e) =>
                                                this.setState({ pass: e.target.value })} />
                                    </Form.Group>

                                    <Button
                                        variant="primary"

                                        onClick={() => {
                                            this.iniciarSesion();
                                        }}
                                    >
                                        Iniciar sesion
                                    </Button>
                                </Form>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}