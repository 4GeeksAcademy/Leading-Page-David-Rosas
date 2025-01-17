import React from "react";

const NavBar = () => {
    return ( <div>
                <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid d-flex">
            <a className="navbar-brand mx-2 text-light" href="#">Start Bootstrap</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link text-light" href="#">About</a>
                </li>
                <li className="nav-item">
                <a className="nav-link text-light" href="#">Services</a>
                </li>
                <li className="nav-item">
                <a className="nav-link disabled text-light" aria-disabled="true">Contact</a>
                </li>
            </ul>
            </div>
        </div>
    </nav> 
</div>       
    );
}

export default NavBar;