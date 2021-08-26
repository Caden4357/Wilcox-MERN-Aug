import React from "react";
import Advertisement from "./Advertisement";
import Subcontents from "./Subcontents";

const Main = (props) => {
    return(
        <div className="main">
            <Subcontents contextText={"Surfing Lessons"}/>
            <Subcontents contextText={"Guitar Lessons"}/>
            <Subcontents contextText={"Lessons"}/>

        </div>
    )
}
export default Main;