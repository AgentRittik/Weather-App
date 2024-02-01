

import "./Nabbar.css";
import { useState } from "react";
function Nabbar({handleSearch ,units , setUnits}){
    const[city , setCity] = useState("");
    // const handleClick = () => {
    //     alert(`hello ${city}`)
    // }
    return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid d-flex justify-content-between">
                <a className="navbar-brand logo" href="#"><span>Weather App</span></a>
                {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
                <div class="btn-group btn-group-toggle" data-toggle="buttons">
                        <label 
                            className={`btn btn-secondary ${units?"active":""}`}
                            onClick={()=>setUnits(true)}
                        >
                            Celecius
                        </label>
                        <label 
                            class={`btn btn-secondary ${units?"":"active"}`}
                            onClick={()=>setUnits(false)}
                        >
                            Fareneifht
                        </label>
                    </div>
                <div className="d-flex ">
                    <input 
                        placeholder="Search" 
                        type="text"
                        value={city}
                        onChange={(e)=>setCity(e.target.value)}
                    />
                    <button className="btn btn-outline-success" onClick={()=> handleSearch(city)}>Search</button>
                </div>
                {/* </div> */}
        </div>
        </nav>
    </>
    )
}

export default Nabbar;