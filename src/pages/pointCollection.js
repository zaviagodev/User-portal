import { faChevronLeft } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import HeaderMobile from "../assets/components/header";

const PointCollection = () => {
    return (
        <div>
            <HeaderMobile firstLink="/" firstIcon={faChevronLeft} title="วิธีเก็บคะแนน" secondBtn={false}/>
        </div>
    )
}

export default PointCollection;