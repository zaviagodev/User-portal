import React from "react";
import { Card } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const LandingPage = () => {
    return (
        <div className="mobile-page">
            <header>

            </header>
            <div className="columns-2">
                <div id="say-hello">
                    <h2 className="secondary-color font-medium text-sm"><span style={{color:"black"}}>👋</span> สวัสดีคุณ,<br/>
                        <span id="user-name" className="text-black text-lg">LINE-Cameron</span>
                    </h2>
                </div>
                <h2 className="text-right secondary-color font-medium text-sm">คุณมีคะแนน<br/>
                    <span id="points" className="text-xl primary-color">
                        <FontAwesomeIcon icon={faCoffee}/>
                    </span>
                </h2>
            </div>
        </div>
    );
}

export default LandingPage;