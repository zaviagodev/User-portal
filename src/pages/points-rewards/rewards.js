import React, { useState } from "react";
import { Card, Button, Space } from "antd";
import { faChevronLeft, faGiftCard } from "@fortawesome/pro-solid-svg-icons";
import FooterMenu from "../../assets/components/footerMenu";
import HeaderMobile from "../../assets/components/header";
import RewardSection from "../../assets/components/reward-section";

const RewardsPage = () => {
    return (
        <div>
            <HeaderMobile firstLink="/" firstIcon={faChevronLeft} title="แลกของรางวัล" secondBtn={true} secondLink="#" secondIcon={faGiftCard} />
            <main>
                <section className="mt-7 py-6" style={{backgroundColor:"#F8F8F8"}}>
                    <RewardSection />
                </section>
            </main>
            <FooterMenu activeMenu={2}/>
        </div>
    );
}

export default RewardsPage;