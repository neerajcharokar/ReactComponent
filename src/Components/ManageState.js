import React, { Component } from 'react'

export class ManageState extends Component {
    constructor(){
        super();
        this.state={
            counter:0
        }
    }

    incrementCounterWithoutSetState=()=>{
        this.state.counter+=1;
        console.log("Button Clicked," , this.state.counter, "times");
    }

    incrementCounterWithSetState=()=>{
        this.setState({counter:this.state.counter+1})
        console.log("Button Clicked," , this.state.counter, "times");
    }
    render() {
        return (
            <div className='mt-5'>
                <p className='h3 mb-3'>{this.state.counter}</p><br/>
                <button className='btn btn-danger' onClick={this.incrementCounterWithoutSetState}>Click-Without setState</button>
                <button className='btn btn-success ml-5' onClick={this.incrementCounterWithSetState}>Click-With setState</button>
            </div>
        )
    }
}

export default ManageState
