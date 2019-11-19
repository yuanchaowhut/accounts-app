import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as RecordsAPI from '../utils/RecordsAPI';

export default class Record extends Component {
    constructor(props) {
        super(props)
        this.state = {
            edit: false
        }
    }


    handleToggle = () => {
        this.setState({edit: !this.state.edit});
    }

    handleEdit = (event) => {
        event.preventDefault();
        const data = {
            date: this.refs.date.value,
            title: this.refs.title.value,
            amount: this.refs.amount.value
        };
        RecordsAPI.update(this.props.record.id, data).then(
            response => {
                this.setState({edit: false});
                this.props.handleUpdateRecord(this.props.record, response.data);
            }
        ).catch(
            error => console.log(error.message)
        );
    }

    handleDelte = () => {
        RecordsAPI.remove(this.props.record.id).then(
            response => this.props.handleDeleteRecord(this.props.record)
        ).catch(
            error => console.log(error.message)
        )
    }

    renderForm() {
        return (
            <tr>
                <td><input type="text" className="form-control" defaultValue={this.props.record.date} ref="date"/></td>
                <td><input type="text" className="form-control" defaultValue={this.props.record.title} ref="title"/>
                </td>
                <td><input type="text" className="form-control" defaultValue={this.props.record.amount} ref="amount"/>
                </td>
                <td>
                    <button className="btn btn-info mr-1" onClick={this.handleEdit}>Update</button>
                    <button className="btn btn-danger" onClick={this.handleToggle}>Cancel</button>
                </td>
            </tr>)
    }

    renderRow() {
        return (
            <tr>
                <td>{this.props.record.date}</td>
                <td>{this.props.record.title}</td>
                <td>{this.props.record.amount}</td>
                <td>
                    <button className="btn btn-info mr-1" onClick={this.handleToggle}>Edit</button>
                    <button className="btn btn-danger" onClick={this.handleDelte}>Delete</button>
                </td>
            </tr>)
    }

    render() {
        if (this.state.edit) {
            return this.renderForm()
        } else {
            return this.renderRow()
        }
    }
}

Record.propTypes = {
    record: PropTypes.object
}

