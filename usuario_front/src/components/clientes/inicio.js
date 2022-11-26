import React from "react";
import { Container, Nav, Row } from "react-bootstrap";
import "./clientes.css";
import ClientesBuscar from "./crud/buscar";
import ClientesCrear from "./crud/crear";
import ClientesEditar from "./crud/editar";

export default class Clientes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: "buscar",
            _id: null,
        };
        this.changeTab = this.changeTab.bind(this);
        this.setIdCliente = this.setIdCliente.bind(this);
        this.getIdCliente = this.getIdCliente.bind(this);
    }
    
    changeTab(tab) {
        this.setState({
            currentTab: tab
        });
    }

    setIdCliente(id){
        this.setState({
            _id: id
        });

    }

    getIdCliente(){
        return this.state._id;
    }

    
    render() {
        return (
            <Container id="clientes-container">
                <Row>
                    <Nav fill variant="tabs" defaultActiveKey="/buscar"
                        onSelect={(eventkey) => this.setState({ currentTab: eventkey })}
                    >
                        <Nav.Item>
                            <Nav.Link eventKey="buscar">Buscar</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="crear">Crear</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Row>
                <Row>
                    {this.state.currentTab == "buscar" ? 
                        ( <ClientesBuscar changeTab={this.changeTab}
                            setIdCliente={this.setIdCliente}
                            />
                        ) : this.state.currentTab == 'crear' ?
                        (
                            <ClientesCrear changeTab={this.changeTab} />
                        ): (<ClientesEditar changeTab={this.changeTab}
                            getIdCliente = {this.getIdCliente}
                        />)}
                </Row>
            </Container>
        );
    }
}