import React, { useState } from "react";
import { Card, Button, Space } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faStar } from "@fortawesome/free-solid-svg-icons";
import HondaNon from "../assets/images/honda-non.svg";
import classicCard from "../assets/images/classic-card.svg";
import silverCard from "../assets/images/silver-card.svg";
import goldCard from "../assets/images/gold-card.svg";
import platinumCard from "../assets/images/platinum-card.svg";
import { faGiftCard } from "@fortawesome/pro-solid-svg-icons";

const LandingPage = () => {
    const [classic, setClassic] = useState(true);
    const [silver, setSilver] = useState(false);
    const [gold, setGold] = useState(false);
    const [platinum, setPlatinum] = useState(false);

    return (
        <div>
            <header className="p-6 flex justify-center" style={{borderBottom:"1px solid #0000000D"}}>
                <img src={HondaNon} />
            </header>
            <div className="columns-2 p-6">
                <div id="say-hello">
                    <h2 className="secondary-color font-medium text-sm"><span style={{color:"black"}}>👋</span> สวัสดีคุณ,<br/>
                        <span id="user-name" className="text-black text-lg">LINE-Cameron</span>
                    </h2>
                </div>
                <h2 className="text-right secondary-color font-medium text-sm">คุณมีคะแนน<br/>
                    <span id="points" className="text-xl primary-color">
                        <FontAwesomeIcon icon={faStar} className="mr-1"/>
                        50 คะแนน
                    </span>
                </h2>
            </div>

            <div className="px-6 member-card">
                {classic || silver || gold || platinum ? (
                    <Card
                        style={{
                        backgroundImage: `url(${
                            classic ? classicCard : silver ? silverCard : gold ? goldCard : platinumCard 
                        })`,
                        }}
                    >
                        <div className="columns-1 flex items-end">
                        <div className="inline-block w-1/2">
                            <h1 className="text-white text-3xl">
                            {classic ? 'Classic' : silver ? 'Silver' : gold ? 'Gold' : 'Platinum'}
                            </h1>
                            <p className="text-white text-sm">
                            {classic
                                ? 'Silver :'
                                : silver
                                ? 'Gold :'
                                : gold 
                                ? 'Platinum :'
                                : ""} <span>20</span>/1000 คะแนน
                            </p>
                        </div>
                        <div className="inline-block w-1/2 text-right">
                            <Button
                            size="large"
                            className="bg-white px-4"
                            style={{
                                borderRadius: '100px',
                                border: 'none',
                                fontSize: '14px',
                                color: '#F99500',
                            }}
                            >
                            <Space>
                                <FontAwesomeIcon icon={faGiftCard} />
                                <span>รางวัลของฉัน</span>
                            </Space>
                            </Button>
                        </div>
                        </div>
                    </Card>
                    ) : null}
            </div>
        </div>
    );
}

export default LandingPage;