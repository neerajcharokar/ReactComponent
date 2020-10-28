import React from 'react'

export class HelloComponent extends React.Component {
    constructor(props){
        super(props)
        this.props=props
    }
    render() {
        return (
            <div>
                <h1 className='h1 text-primary mt-5'>Hello Component</h1>
            </div>
        )
    }
}

export default HelloComponent