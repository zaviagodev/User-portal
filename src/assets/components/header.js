import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeaderMobile = (props) => {
    return (
        <div>
            <header className="p-6 flex item-center justify-between">
                <a href={props.firstLink} className="inline">
                    <FontAwesomeIcon icon={props.firstIcon} className="text-2xl"/>
                </a>
                <h1>{props.title}</h1>
                <a href={props.secondLink} className={`text-2xl ${(props.secondBtn == false ? "invisible" : "")}`}>
                    <FontAwesomeIcon icon={props.secondIcon} className={"text-2xl"}/>
                </a>
            </header>
        </div>
    )
}

export default HeaderMobile;