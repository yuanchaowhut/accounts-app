import React, {Component} from 'react';
import * as RecordsAPI from '../utils/RecordsAPI'

export default class RecordForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: "",
            title: "",
            amount: ""
        }
    }

    handleChange = (event) => {
        let obj = {}, name, value;
        name = event.target.name + "";
        value = event.target.value;
        obj[name] = value;
        this.setState(obj);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            date: this.state.date,
            title: this.state.title,
            amount: Number.parseInt(this.state.amount)
        };
        RecordsAPI.create(data).then(
            response => {
                this.props.handleNewRecord(response.data);
                this.setState({
                    date: "",
                    title: "",
                    amount: ""
                })
            }
        ).catch(
            error => console.log(error.message)
        );

    }

    valid() {
        return this.state.date && this.state.title && this.state.amount;
    }


    render() {

        return (
            <form className="form-inline mb-3" onSubmit={this.handleSubmit}>
                <div className="form-group mr-1">
                    <input type="text" className="form-control" placeholder="Date" name="date"
                           onChange={this.handleChange} value={this.state.date}/>
                </div>
                <div className="form-group mr-1">
                    <input type="text" className="form-control" placeholder="Title" name="title"
                           onChange={this.handleChange} value={this.state.title}/>
                </div>
                <div className="form-group mr-1">
                    <input type="text" className="form-control" placeholder="Amount" name="amount"
                           onChange={this.handleChange} value={this.state.amount}/>
                </div>
                <button type="submit" className="btn btn-primary" disabled={!this.valid()}>Create Record</button>
            </form>
        )
    }
}
