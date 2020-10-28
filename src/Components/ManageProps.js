import React, { Component } from 'react'
import HelloComp from './HelloComp'

export class ManageProps extends Component {
    constructor(){
        super();
        this.state={
            click:false
        }
    }
    changeState=()=>{
        this.setState({click:true})
    }
    show(){
        if(this.state.click){
            return (
                <div className='mt-5'>
                    <HelloComp greeting="Morning" name="Jack"></HelloComp>
                </div>
            )
        }else{
            return (
                <div className='mt-5'>
                   <button onClick={this.changeState} className='btn btn-success'>Click to Show Props</button>
                </div>
            )
        }
        
    }
    render() {
        return this.show()
    }
}

export default ManageProps
