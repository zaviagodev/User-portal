import React, { useState } from "react";
import { Card, Button, Space } from "antd";
import { faChevronLeft, faHeart } from "@fortawesome/pro-solid-svg-icons";
import { faGiftCard, faUser, faHistory, faShareNodes, faGift } from "@fortawesome/pro-regular-svg-icons";
import HondaNon from "../../assets/images/honda-non.svg";
import FooterMenu from "../../assets/components/footerMenu";
import HeaderMobile from "../../assets/components/header";
import giftVoucher from "../../assets/images/gift-voucher.png";
import brandModulo from "../../assets/images/brand-modulo.png";
import neckPillowCat from "../../assets/images/neck-pillow-cat.png";
import neckPillowModulo from "../../assets/images/neck-pillow-modulo.png";
import pillowModulo from "../../assets/images/pillow-modulo.png";
import coolerBag from "../../assets/images/cooler-bag.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CaretRightOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { Collapse, theme } from 'antd';

const Redemption = () => {
    document.body.style.backgroundColor = "white";
    const [like, setLike] = useState(false);

    const { Panel } = Collapse;

    const toggleLike = () => {
      if (like){
        setLike(false);
      } else {
        setLike(true);
      }
    }

    const panelStyle = {
      marginBottom: 16,
      background: "#F8F8F8",
      borderRadius: "8px",
      border: 'none',
    };

    return (
      <div>
        <HeaderMobile firstIcon={faChevronLeft} title={(<img src={HondaNon} />)} secondBtn={false} />
        <main>
          <img src={brandModulo} />
          <div className="brand-info p-6">
            <div className="columns-2 flex items-center justify-between">
              <div className="block">
                <h5 className="text-xs">ของรางวัล</h5>
                <h2 className="font-bold">หมอนรองคอน้องแมว<br/>ฮอนด้านนทบุรี</h2>
              </div>
              <div className="block">
                <Space>
                  <FontAwesomeIcon className={`text-xl ${like ? "like" : "not-like"}`} icon={faHeart} onClick={toggleLike}/>
                  <FontAwesomeIcon icon={faShareNodes}/>
                </Space>
              </div>
            </div>

            <div className="columns-2 mt-4 pb-2">
              <div className="block pr-4" style={{borderRight:"1px solid #0000001A"}}>
                <p className="text-xs" style={{color:"#00000061"}}>คะแนนที่ใช้</p>
                <h1 className="font-with-inter primary-color text-xl font-semibold">40 คะแนน</h1>
                <p className="text-xs font-semibold line-through" style={{color:"#00000061"}}>มูลค่า 500 บาท</p>
              </div>
              <div className="block">
                <p className="text-xs" style={{color:"#00000061"}}>สามารถใช้ได้ถึง</p>
                <h1 className="font-with-inter primary-color text-md font-semibold">22 ม.ค. 2022</h1>
              </div>
            </div>

            <div style={{borderTop:"1px solid #0000001A",padding:"20px 0 32px"}}>
              <h2 className="font-bold">รายละเอียด</h2>
              <ul className="text-sm list-disc mt-3 ps-4 ">
                <li>สมาชิกหลักเท่านั้นที่มีสิทธิใช้คะแนนเพื่อแลกรับของรางวัล</li>
                <li>ขอสงวนสิทธิ์งดรับการแก้ไข เปลี่ยนแปลงใดหลังจากที่สมาชิกหลักแจ้งความประสงค์ขอแลกคะแนนสะสมไปยังบริษัทฯแล้ว</li>
                <li>บริษัทฯ ขอแจ้งเปลี่ยนแปลงเงื่อนไขการแลกของรางวัล โดยมิได้แจ้งให้ทราบก่อนล่วงหน้า</li>
                <li style={{listStyle:"none"}} className="primary-color font-medium mt-2"><a href="#">อ่านเพิ่มเติม</a></li>
              </ul>
            </div>

            <Collapse
              bordered={false}
              expandIcon={({ isActive }) => (
                isActive ? <MinusOutlined /> : <PlusOutlined />
              )}
              expandIconPosition="end"
              style={{
                background: "white",
              }}
            >
              <Panel header="วิธีแลกของรางวัล" key="1" style={panelStyle}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis nisi tincidunt, scelerisque nulla a, volutpat orci. Etiam posuere pharetra enim, eu volutpat mi posuere sit amet. Vivamus porta porttitor finibus. Phasellus porttitor ac nisi suscipit condimentum. Duis volutpat risus eu aliquam dignissim.</p>
              </Panel>
              <Panel header="เงื่อนไขในการแลกของรางวัล" key="2" style={panelStyle}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis nisi tincidunt, scelerisque nulla a, volutpat orci. Etiam posuere pharetra enim, eu volutpat mi posuere sit amet. Vivamus porta porttitor finibus. Phasellus porttitor ac nisi suscipit condimentum. Duis volutpat risus eu aliquam dignissim.</p>
              </Panel>
            </Collapse>

          </div>
        </main>
        <footer className="p-6 fixed bottom-0 w-full">
          <Button className="save-btn active">
            <Space>
              <FontAwesomeIcon icon={faGift}/>
              <span>แลกของรางวัล</span>
            </Space>
          </Button>
        </footer>
      </div>
    );
}

export default Redemption;