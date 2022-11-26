import React from 'react';
import { Container, Row } from 'react-bootstrap';
import '../clientes.css';
import DataGrid from '../../grid/grid';

const columns = [{
    dataField: '_id',
    text: 'ID',
    hidden: true,
}, {
    dataField: 'nombre',
    text: 'Nombre'
}, {
    dataField: 'apellido_p',
    text: 'Primer Apellido'
}, {
    dataField: 'apellido_m',
    text: 'Segundo Apellido'
}, {
    dataField: 'telefono',
    text: 'Telefono'
}, {
    dataField: 'mail',
    text: 'Correo Electronico'
}, {
    dataField: 'direccion',
    text: 'Direccion'
},];

export default class ClientesBuscar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onClickEditButton = this.onClickEditButton.bind(this);
    }
    componentDidMount() {
    }
    onClickEditButton(row) {
        this.props.setIdCliente(row._id)
        this.props.changeTab('editar')
    };
    render() {
        return <Container id="cliente-buscar-container">
            <Row>
                <h1>Buscar Usuarios</h1>
            </Row>
            <Row>
                <DataGrid url="/clientes" columns={ columns } 
                showEditButton={true}
                onClickEditButton ={this.onClickEditButton}
                />
            </Row>
        </Container>;
    }
}