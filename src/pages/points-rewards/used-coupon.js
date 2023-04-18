import React, { useState } from "react";
import { Card, Button, Space, Collapse, theme, Modal, Tabs } from "antd";
import { faChevronLeft, faHeart } from "@fortawesome/pro-solid-svg-icons";
import { faGiftCard, faUser, faHistory, faShareNodes, faGift, faCircleCheck, faCopy } from "@fortawesome/pro-regular-svg-icons";
import HondaNon from "../../assets/images/honda-non.svg";
import FooterMenu from "../../assets/components/footerMenu";
import HeaderMobile from "../../assets/components/header";
import giftVoucher from "../../assets/images/gift-voucher.png";
import brandModulo from "../../assets/images/brand-modulo.png";
import neckPillowCat from "../../assets/images/neck-pillow-cat.png";
import neckPillowModulo from "../../assets/images/neck-pillow-modulo.png";
import pillowModulo from "../../assets/images/pillow-modulo.png";
import coolerBag from "../../assets/images/cooler-bag.png";
import mockQRCode from "../../assets/images/mock-qr.png";
import mockBarcode from "../../assets/images/mock-barcode.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

const UsedCoupon = () => {
  const menus = [
    {
        key: '1',
        label: 'Code',
        children: (
            <div className="text-center">
              <Button className="save-btn active">
                <Space>
                  <span className="font-with-inter">9CZE32</span>
                  <FontAwesomeIcon icon={faCopy}/>
                </Space>
              </Button>
              <p className="secondary-color text-sm mt-6 font-medium">กรุณากรอกหรือส่งโค้ดนี้ให้พนักงาน<br/>ที่หน้าร้านเพื่อรับของรางวัล</p>
            </div>
        )
    },
    {
        key: '2',
        label: 'QR Code',
        children: (
            <div className="text-center">
              <img src={mockQRCode} className="m-auto"/>
              <p className="secondary-color text-sm mt-3 mb-6 font-medium">ใช้ภายใน <span className="primary-color font-semibold">15:00</span></p>
              <p className="secondary-color text-sm">กรุณานำ QR Code นี้ให้พนักงานสแกน<br/>ที่หน้าร้านเพื่อรับของรางวัล</p>
            </div>
        )
    },
    {
        key: '3',
        label: 'Barcode',
        children: (
            <div className="text-center">
              <img src={mockBarcode} className="m-auto"/>
              <p className="text-black text-sm font-with-inter" id="barcode-id">12134616265431</p>
              <p className="secondary-color text-sm mt-6">กรุณานำ BarCode นี้ให้พนักงานสแกน<br/>ที่หน้าร้านเพื่อรับของรางวัล</p>
            </div>
        )
    },
  ]
  return (
    <div>
      <HeaderMobile firstIcon={faChevronLeft} title={(<img src={HondaNon} />)} secondBtn={false} />
      <main className="tabs-menu three">
        <img src={brandModulo} />
        <div className="brand-info p-6 pt-8">
          <h2 className="font-bold text-center">หมอนรองคอน้องแมว ฮอนด้านนทบุรี</h2>
          <p className="secondary-color text-sm mt-6 text-center">สามารถแลกรางวัลได้ที่หน้าร้าน ภายในวันที่ 22 ม.ค. 2022 <br/>และไม่สามารถยกเลิกการใชสิทธิ์ภายหลังได้</p>
          <p className="secondary-color text-sm mt-3 mb-10 text-center">ใช้สิทธิ์เมื่อ 18 ม.ค. 2022</p>

          <Tabs defaultActiveKey="1" items={menus} centered={true}/>
        </div>
      </main>
    </div>
  )
}

export default UsedCoupon;