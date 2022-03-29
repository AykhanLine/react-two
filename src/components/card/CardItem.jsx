import React from 'react'
import './card-item.scss';

const CardItem = (props) => {
    return (

        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
             <div className="card card-item" style={{width:"18rem"}}>
            <img className="card-img-top" src={props.image} alt="" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
               
        </div>
        </div>

    )
}

export default CardItem