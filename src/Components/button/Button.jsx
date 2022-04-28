import React, { Component } from 'react'

export default class Button extends Component {
    render() {
        return (
            <>
                <button className="btn btn-info mx-3">{this.props.title}</button>
            </>
        )
    }
}
