import React, { useState } from "react";
import { Card, Button, Space } from "antd";
import { faChevronLeft } from "@fortawesome/pro-solid-svg-icons";
import { faGiftCard, faUser, faHistory } from "@fortawesome/pro-regular-svg-icons";
import HondaNon from "../../assets/images/honda-non.svg";
import FooterMenu from "../../assets/components/footerMenu";
import HeaderMobile from "../../assets/components/header";
import giftVoucher from "../../assets/images/gift-voucher.png";
import brandModulo from "../../assets/images/brand-modulo.png";
import neckPillowCat from "../../assets/images/neck-pillow-cat.png";
import neckPillowModulo from "../../assets/images/neck-pillow-modulo.png";
import pillowModulo from "../../assets/images/pillow-modulo.png";
import coolerBag from "../../assets/images/cooler-bag.png";

const Redemption = () => {
    document.body.style.backgroundColor = "white";
    return (
      <div>
        <HeaderMobile firstIcon={faChevronLeft} title={(<img src={HondaNon} />)} secondBtn={false} />
        <main>
          <img src={brandModulo} />
          <div className="brand-info p-6">
            <h5 className="text-xs">ของรางวัล</h5>
            <h2 className="font-bold">หมอนรองคอน้องแมว<br/>ฮอนด้านนทบุรี</h2>
          </div>
        </main>
      </div>
    );
}

export default Redemption;