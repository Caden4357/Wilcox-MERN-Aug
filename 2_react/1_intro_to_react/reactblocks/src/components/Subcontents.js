import React from "react";

const Subcontents = (props) => {
    const {contextText} = props;
    return(
        <div className="subcontents">
            {contextText}

        </div>
    )
}
export default Subcontents;