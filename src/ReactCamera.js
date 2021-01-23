import React, { Component } from 'react';
import Webcam from 'react-webcam';

export default class ReactCamera extends Component{

    constructor(props){
        super(props);
        this.state = { screenshot: null }
        // this can be moved directly to the onClick event
        // this.screenshot = this.screenshot.bind(this);
    }
    // this is the area I'm having issues with. Thanks!
    screenshot=()=> {
        // access the webcam trough this.refs
        var screenshot = this.refs.webcam.getScreenshot();
        this.setState({screenshot: screenshot});
      }

    render(){

        return (
            <div>   
             <Webcam audio ={false} ref='webcam'/> 
             <br />
             <button onClick={this.screenshot}>Capture</button>
             <div>
             { this.state.screenshot ? <img src={this.state.screenshot} alt="pic"/> : null }
             </div>
            </div>
            )
    }
}
