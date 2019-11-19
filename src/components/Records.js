import React, {Component} from 'react';
import Record from './Record';
import RecordForm from './RecordForm';
import AmountBox from './AmountBox';
import * as RecordsAPI from '../utils/RecordsAPI'

export default class Records extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            records: []
        }
    }

    componentDidMount() {
        RecordsAPI.getAll().then(
            (response) => this.setState({
                records: response.data,
                isLoaded: true
            })).catch(
            (error) => this.setState({
                isLoaded: true,
                error
            }))
    }

    addRecord(record) {
        this.setState({
            records: [...this.state.records, record]
        });
    }

    updateRecord(oldRecord, newRecord) {
        const index = this.state.records.indexOf(oldRecord);
        const newRecords = this.state.records.map((item, i) => {
            if (i !== index) {
                return item;
            } else {
                return {...item, ...newRecord}
            }
        });
        this.setState({records: newRecords});
    }

    delteRecord(record) {
        const recordIndex = this.state.records.indexOf(record);
        const newRecords = this.state.records.filter((item, index) => index !== recordIndex)
        this.setState({records: newRecords});
    }

    credits() {
        let credits = this.state.records.filter((item) => {
            return item.amount >= 0
        })
        return credits.reduce((total, curr) => {
            return total + parseInt(curr.amount);
        }, 0);
    }

    debits() {
        let debits = this.state.records.filter((item) => {
            return item.amount < 0
        })
        return debits.reduce((total, curr) => {
            return total + parseInt(curr.amount);
        }, 0);
    }

    balance() {
        return this.credits() + this.debits();
    }


    render() {
        const {error, isLoaded, records} = this.state;
        let recordsComponent = null;
        if (error) {
            recordsComponent = <div>Error:{error.message}</div>
        } else if (!isLoaded) {
            recordsComponent = <div>Loading...</div>
        } else {
            recordsComponent = (
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th>Date</th>
                        <th>Title</th>
                        <th>Amount</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {records.map((record) =>
                        <Record key={record.id} record={record}
                                handleUpdateRecord={this.updateRecord.bind(this)}
                                handleDeleteRecord={this.delteRecord.bind(this)}
                        />
                    )
                    }
                    </tbody>
                </table>
            );
        }

        return (
            <div>
                <h2>Records</h2>
                <div className="row mb-3">
                    <AmountBox text="Credit" type="success" amount={this.credits()}/>
                    <AmountBox text="Debit" type="danger" amount={this.debits()}/>
                    <AmountBox text="Balance" type="info" amount={this.balance()}/>
                </div>
                <RecordForm handleNewRecord={this.addRecord.bind(this)}/>
                {recordsComponent}
            </div>
        )
    }
}


