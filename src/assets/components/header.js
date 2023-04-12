import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeaderMobile = (props) => {
    return (
      <div>
        <header className="p-6 flex items-center justify-between fixed w-full bg-white top-0 z-50" style={{boxShadow:"0 3px 15px 0 #7777771A"}}>
          <a href={props.firstLink} className="inline">
            <FontAwesomeIcon icon={props.firstIcon} className="text-2xl"/>
          </a>
          <h1 className={`font-bold text-lg ${(props.secondBtn == false ? "-ml-3" : "")}`}>{props.title}</h1>
          <a href={props.secondLink} className={`text-2xl ${(props.secondBtn == false ? "invisible" : "")}`}>
            <FontAwesomeIcon icon={props.secondIcon} className={"text-2xl"}/>
          </a>
        </header>
      </div>
    )
}

export default HeaderMobile;