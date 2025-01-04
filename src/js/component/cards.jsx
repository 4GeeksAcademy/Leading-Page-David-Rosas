import React from "react";

const Cards = ( ) => {
    return ( <div className="col-3 p-2">
                <div className="card" >
        <img src="https://media.istockphoto.com/id/513133900/es/foto/oro-retriever-sentado-en-frente-de-un-fondo-blanco.jpg?s=612x612&w=0&k=20&c=0lRWImB8Y4p6X6YGt06c6q8I3AqBgKD-OGQxjLCI5EY=" className="card-img-top" alt="Image"/>
        <div className="card-body">
            <hr/>
            <h5 className="card-title text-center">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <hr/>
            <div className="d-flex justify-content-center">
                <a href="#" className="btn btn-primary text-center">Go somewhere</a>
            </div>
        </div>
        </div>
    </div>        
    );
}


export default Cards;
