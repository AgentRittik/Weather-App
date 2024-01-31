import DataCard from "./DataCard/DataCard";
import Nabbar from "./Nabbar/Nabbar";

import Window from "./Window/Window";

function Home(){
    return(
        <>
            <Nabbar/>
            <div className="container">
            <Window/>
            <DataCard/>
            </div>
            
        </>
     )
}

export default Home;