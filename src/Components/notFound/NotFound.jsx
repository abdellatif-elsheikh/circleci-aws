import React, { Component } from 'react'

export default class NotFound extends Component {
    render() {
        return (
            <div className="text-center d-flex vh-100 bg-dark text-white align-items-center justify-content-center flex-column">
                <h1 className="text-danger">ERROR 404</h1>
                <h4>Page Not Found </h4>
            </div>
        )
    }
}
