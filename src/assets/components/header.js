import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const HeaderMobile = (props) => {
    return (
      <div>
        <header className="p-6 flex items-center justify-between fixed w-full bg-white top-0 z-50" style={{boxShadow:"0 3px 15px 0 #7777771A"}}>
          <Link to={props.firstLink} className="inline">
            <FontAwesomeIcon icon={props.firstIcon} className="text-2xl" style={{minWidth:"24px"}}/>
          </Link>
          <h1 className={`font-bold text-lg`}>{props.title}</h1>
          <Link to={props.secondLink} className={`text-2xl ${(props.secondBtn == false ? "w-6 invisible" : "w-6")}`}>
            <FontAwesomeIcon icon={props.secondIcon} className="text-2xl" style={{minWidth:"24px"}}/>
          </Link>
        </header>
      </div>
    )
}

export default HeaderMobile;