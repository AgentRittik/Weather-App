

import "./Nabbar.css";

function Nabbar(){
    return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid d-flex justify-content-between">
                <a className="navbar-brand logo" href="#"><span>Weather App</span></a>
                {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
                <form className="d-flex search-box">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                {/* </div> */}
        </div>
        </nav>
    </>
    )
}

export default Nabbar;