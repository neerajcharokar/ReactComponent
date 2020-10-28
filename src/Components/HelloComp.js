import React, { Component } from 'react'

export class HelloComp extends Component {
    render() {
        return (
            <div>
                <h2>Hello <span className='text-danger'>{this.props.name}</span>, Good <span className='text-danger'> {this.props.greeting}</span></h2>    
            </div>
        )
    }
}

export default HelloComp
