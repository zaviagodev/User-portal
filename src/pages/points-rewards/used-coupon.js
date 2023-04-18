import React, { useState, useEffect } from "react";
import { Card, Button, Space, Collapse, theme, Modal, Tabs } from "antd";
import { faChevronLeft, faHeart } from "@fortawesome/pro-solid-svg-icons";
import { faGiftCard, faUser, faHistory, faShareNodes, faGift, faCircleCheck, faCopy, faHourglassClock } from "@fortawesome/pro-regular-svg-icons";
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
import cartoon from "../../assets/images/cartoon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

const UsedCoupon = () => {
    const [modalTimesUp, setModalTimesUp] = useState(true);
    const [modalSuccess, setModalSuccess] = useState(false);

    const showModalSuccess = () => {
        setModalSuccess(true);
    }

    const goBackToMyRewards = () => {
        window.location.replace("/my-rewards");
    }

    const CountdownTimer = ({ minutes = 1 }) => {
        const [remainingSeconds, setRemainingSeconds] = useState(minutes * 60);
      
        useEffect(() => {
          const intervalId = setInterval(() => {
            setRemainingSeconds((prevSeconds) => prevSeconds - 1);
          }, 1000);
      
          return () => clearInterval(intervalId);
        }, []);
      
        const minutesRemaining = Math.floor(remainingSeconds / 60);
        const secondsRemaining = remainingSeconds % 60;
      
        return (
          <span className="primary-color font-semibold">
            {remainingSeconds > 0 ? (
              <span>
                {minutesRemaining.toString().padStart(2, "0")}:
                {secondsRemaining.toString().padStart(2, "0")}
              </span>
            ) : (
              <span>
                <span>00:00</span>
                <Modal className="popup-modal ok-btn" open={modalTimesUp} onOk={goBackToMyRewards} closable={false} okText="กลับสู่หน้ารางวัลของฉัน">
                  <div className="text-center">
                    <h2 className="primary-color mb-2">
                      <FontAwesomeIcon icon={faHourglassClock} style={{fontSize:"54px"}}/><br/>
                      <span className="text-lg font-bold mt-5 inline-block">หมดเวลาการใช้สิทธิ์</span>
                    </h2>
                    <p>หมดเวลาการใช้สิทธิ์ กรุณาแลกอีกครั้ง<br/>เพื่อใช้สิทธิ์ในครั้งต่อไป</p>
                  </div>
                </Modal>
              </span>
            )}
          </span>
        );
    }
  
  const menus = [
    {
        key: '1',
        label: 'Code',
        children: (
            <div className="text-center">
              <Button className="save-btn active" onClick={showModalSuccess}>
                <Space>
                  <span className="font-with-inter">9CZE32</span>
                  <FontAwesomeIcon icon={faCopy}/>
                </Space>
              </Button>
              <p className="secondary-color text-sm mt-3 mb-6 font-medium">ใช้ภายใน <CountdownTimer /></p>
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
            <p className="secondary-color text-sm mt-3 mb-6 font-medium">ใช้ภายใน <CountdownTimer /></p>
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
              <p className="secondary-color text-sm mt-3 mb-6 font-medium">ใช้ภายใน <CountdownTimer /></p>
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

      <Modal className="popup-modal ok-btn" open={modalSuccess} onOk={goBackToMyRewards} closable={false} okText="กลับสู่หน้ารางวัลของฉัน">
        <div className="text-center">
          <h2 className="primary-color mb-2">
            <img src={cartoon} width="100" className="m-auto"/>
            <span className="text-lg font-bold mt-5 inline-block">แลกรางวัลสำเร็จ</span>
          </h2>
          <p>ทำรายการแลกของรางวัลเรียบร้อยแล้ว<br/>คะแนนของคุณคงเหลือ : 10 คะแนน</p>
        </div>
      </Modal>
    </div>
  )
}

export default UsedCoupon;