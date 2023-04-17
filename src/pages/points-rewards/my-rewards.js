import React, { useState } from "react";
import { Card, Button, Space } from "antd";
import { faChevronLeft } from "@fortawesome/pro-solid-svg-icons";
import { faGiftCard, faUser } from "@fortawesome/pro-regular-svg-icons";
import FooterMenu from "../../assets/components/footerMenu";
import HeaderMobile from "../../assets/components/header";
import giftVoucher from "../../assets/images/gift-voucher.png";
import brandModulo from "../../assets/images/brand-modulo.png";
import neckPillowCat from "../../assets/images/neck-pillow-cat.png";
import neckPillowModulo from "../../assets/images/neck-pillow-modulo.png";
import pillowModulo from "../../assets/images/pillow-modulo.png";
import coolerBag from "../../assets/images/cooler-bag.png";

const MyRewards = () => {
  const CardReward = (props) => {
    return (
      <Card>
        <img src={props.image} />
        <h2>{props.title}</h2>
        <p>สามารถใช้ได้ถึง {props.date}</p>
      </Card>
    )
  }
  return (
    <div>
      <HeaderMobile firstLink="/rewards" firstIcon={faChevronLeft} title="รางวัลของฉัน" secondBtn={true} secondLink="/history" secondIcon={faGiftCard} />
      <main className="p-6">
        <CardReward image={giftVoucher} title="หมอนรองคอน้องแมว ฮอนด้านนทบุรี" date="22 ม.ค. 2022"/>
      </main>
      <FooterMenu activeMenu={2}/>
    </div>
  )
}

export default MyRewards;