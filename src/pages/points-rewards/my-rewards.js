import React, { useState } from "react";
import { Card, Button, Space } from "antd";
import { faChevronLeft } from "@fortawesome/pro-solid-svg-icons";
import { faGiftCard, faUser, faHistory } from "@fortawesome/pro-regular-svg-icons";
import FooterMenu from "../../assets/components/footerMenu";
import HeaderMobile from "../../assets/components/header";
import giftVoucher from "../../assets/images/gift-voucher.png";
import brandModulo from "../../assets/images/brand-modulo.png";
import neckPillowCat from "../../assets/images/neck-pillow-cat.png";
import neckPillowModulo from "../../assets/images/neck-pillow-modulo.png";
import pillowModulo from "../../assets/images/pillow-modulo.png";
import coolerBag from "../../assets/images/cooler-bag.png";
import { Link } from "react-router-dom";

const MyRewards = () => {
  document.body.style.backgroundColor = "#F8F8F8";
  const CardReward = (props) => {
    return (
      <Link to={props.link}>
        <div className="my-rewards">
          <Card cover={(<img src={props.image}/>)}>
            <h2 className="font-bold text-color">{props.title}</h2>
            <p className="mt-9 text-xs" style={{color:"#00000099"}}>สามารถใช้ได้ถึง {props.date}</p>
          </Card>
        </div>
      </Link>
    )
  }
  return (
    <div>
      <HeaderMobile firstIcon={faChevronLeft} title="รางวัลของฉัน" secondBtn={true} secondLink="/history" secondIcon={faHistory} />
      <main className="p-6">
        <h2 className="font-bold mb-2">รางวัลของฉัน (<span id="total-reward">3</span>)</h2>
        <CardReward image={giftVoucher} title="หมอนรองคอน้องแมว ฮอนด้านนทบุรี" date="22 ม.ค. 2022" link="/coupon-redemption"/>
        <CardReward image={giftVoucher} title="หมอนรองคอน้องแมว ฮอนด้านนทบุรี" date="22 ม.ค. 2022" link="/coupon-redemption"/>
        <CardReward image={giftVoucher} title="หมอนรองคอน้องแมว ฮอนด้านนทบุรี" date="22 ม.ค. 2022" link="/coupon-redemption"/>
      </main>
      <FooterMenu activeMenu={2}/>
    </div>
  )
}

export default MyRewards;