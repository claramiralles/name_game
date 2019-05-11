import React from 'react';

class MiBuri extends React.Component {
    render () {
        const {onAnswer}=this.props
        return (
            <div className="div">
                <h1 className="App--question"> What's your name? </h1>
                <textarea 
                onChange={onAnswer}
                name="" id="" cols="30" rows="10"/>
            </div>

        );
    }
}

export default MiBuri;