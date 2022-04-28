import React, { Component } from 'react'
import image1 from '../../images/post-1.jpg';
import image2 from '../../images/post-2.jpg';
import image3 from '../../images/post-3.jpg';
export default class Home extends Component {
    render() {
        return (
            <>
                <div id="carouselExampleControls" class="carousel slide vh-100" data-ride="carousel">
                    <div class="carousel-inner vh-100">
                        <div class="carousel-item active">
                            <img src={image1} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={image2} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={image3} class="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </>
        )
    }
}
