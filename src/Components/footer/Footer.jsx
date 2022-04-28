import React, { Component } from 'react'
import Button from '../button/Button'

export default class Footer extends Component {
    render() {
        return (
            <>
                <div className="footer text-white bg-dark text-center p-5">
                <h1> Footer component</h1>
                <Button title="Change Me" />
                <Button title="Play Me" />
                <Button title="Click Me" />
                </div>
                    

            </>
        )
    }
}
