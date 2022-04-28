import React, { Component } from 'react'
import image1 from "../../images/project-1.jpg"

export default class About extends Component {
    state = {userName: "Abdellatif"}

    changeName=()=> {
        this.setState({
            userName: "Ahmed"
        });
        
    }

    render() {
        return (
            <>
                <div className="parent row p-5">
                    <div className="card col-md-4" style={{ width: '18em' }}>
                        <img src={image1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h3 className="text-muted">{this.state.userName}</h3>
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button className="btn btn-primary" onClick={this.changeName}>Go somewhere</button>
                        </div>
                    </div>
                    <div className="card col-md-4" style={{ width: '18em' }}>
                        <img src={image1} className="card-img-top" alt="..." />
                        <div className="card-body">
                        <h3 className="text-muted">{this.state.userName}</h3>
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button className="btn btn-primary" onClick={this.changeName}>Go somewhere</button>
                        </div>
                    </div>
                    <div className="card col-md-4" style={{ width: '18em' }}>
                        <img src={image1} className="card-img-top" alt="..." />
                        <div className="card-body">
                        <h3 className="text-muted">{this.state.userName}</h3>
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button className="btn btn-primary" onClick={this.changeName}>Go somewhere</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
