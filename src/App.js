import React from 'react';
// import logo from './logo.svg';
import './App.scss';
import MiBuri from './components/MiBuri';

class App extends React.Component {
    constructor(props){
    super(props);

    this.state = {
      isBuri: false
    }
    this.handlePictureOfBuri = this.handlePictureOfBuri.bind(this);
  }

  handlePictureOfBuri(event) {
      const {currentTarget} = event;
      if(currentTarget.value.includes('burak')){
        this.setState({isBuri: true});
      } else {
        this.setState({isBuri: false});
      }
  }
  render(){
    const {isBuri} = this.state;

    let divClasses = "div ";

    divClasses += isBuri
    ? "div--buri"
    : ""
  
  return (
    <div className = {divClasses}>
       <MiBuri onAnswer= {this.handlePictureOfBuri}/>
    </div>
  );
}
}

export default App;
