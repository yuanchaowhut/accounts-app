import React from 'react'


const AmountBox = (props) => {
    const {text, type, amount} = props;
    return (
        <div className="col">
            <div className="card">
                <div className={`card-header bg-${type} text-white`}>
                    {text}
                </div>
                <div className="card-body">
                    {amount}
                </div>
            </div>
        </div>
    )
}

export default AmountBox;
