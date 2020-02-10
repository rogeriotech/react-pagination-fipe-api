import React from 'react' 

const Navbar = () =>{
    return(
        <>
            <nav className="navbar navbar-expand-sm navbar-light bg-light mb-5">
                <a href="#" className="navbar-brand">Fipe API</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarContent">
                    <nav className="navbar-nav">
                        <li className="nav-item-active">
                            <a href="#" className="nav-link">Cars</a>
                        </li>
                        <li className="nav-item-active">
                            <a href="#" className="nav-link">Brands</a>
                        </li>
                        <li className="nav-item-active">
                            <a href="#" className="nav-link">Models</a>
                        </li>
                    </nav>
                </div>
            </nav>
        </>
    )
}

export default Navbar 