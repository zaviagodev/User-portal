import React, { useState } from "react";
import { Avatar, Button, Space, Modal } from "antd";
import { faChevronLeft, faChevronRight } from "@fortawesome/pro-solid-svg-icons";
import { faGiftCard, faUser, faUserPen, faShield, faLock, faBook, faGift, faCreditCardFront, faArrowRightFromBracket } from "@fortawesome/pro-regular-svg-icons";
import FooterMenu from "../../assets/components/footerMenu";
import HeaderMobile from "../../assets/components/header";
import RewardSection from "../../assets/components/reward-section";
import { UserOutlined } from '@ant-design/icons';
import mockAvatar from "../../assets/images/mock-avatar.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const MyAccount = () => {
    document.body.style.backgroundColor = "white";

    const [logoutModal, setLogoutModal] = useState(false);

    const openModal = () => {
      setLogoutModal(true);
    }

    const closeModal = () => {
      setLogoutModal(false);
    }

    const CardAccount = (props) => {
      return (
        <Link to={props.link}>
          <Button className="bg-white flex items-center w-full justify-between mb-4" style={{height:"inherit",padding:"15px 20px",border:"none",boxShadow:"none",borderRadius:"8px"}}>
            <Space>
              <FontAwesomeIcon icon={props.icon} style={{minWidth:"24px"}}/>
              <span className="font-medium">{props.text}</span>
            </Space>
            <FontAwesomeIcon icon={faChevronRight} className="float-right"/>
          </Button>
        </Link>
      )
    }
    return (
      <div>
        <HeaderMobile firstLink="/" firstIcon={faChevronLeft} title="ข้อมูลของฉัน" secondBtn={true} secondLink="#" secondIcon={faGiftCard} />
        <main>
          <section className="p-6">
            <div className="block float-left">
              <Avatar
                style={{
                  maxWidth:"114px",
                  width:"100%",
                  height:"auto"
              }}
                src={mockAvatar}
              />
            </div>
            <div className="block ml-32">
              <h1 className="font-with-inter text-color text-xl font-medium">LINE-Cameron</h1>
              <p className="primary-color">Classic Member</p>

              <div className="columns-2 mt-4">
                <div className="block pr-4" style={{borderRight:"1px solid #0000001A"}}>
                  <h1 className="font-with-inter primary-color text-3xl font-semibold">20</h1>
                  <p className="text-xs font-semibold">คะแนนที่คุณมี</p>
                </div>
                <div className="block">
                  <h1 className="font-with-inter primary-color text-3xl font-semibold">220</h1>
                  <p className="text-xs font-semibold">คะแนนที่คุณเคยใช้</p>
                </div>
              </div>
            </div>
          </section>
          <section className="mt-7 p-6 pb-20" style={{backgroundColor:"#F8F8F8",borderRadius:"12px 12px 0 0"}}>
            <h2 className="font-bold mb-2">การตั้งค่าและความเป็นส่วนตัว</h2>
            <CardAccount link="/edit-account" text="ข้อมูลส่วนตัว" icon={faUserPen}/>
            <CardAccount link="/terms-and-conditions" text="ข้อกำหนดและเงื่อนไข" icon={faShield}/>
            <CardAccount link="/consent-for-disclosure" text="ความยินยอมในการเปิดเผยข้อมูล" icon={faLock}/>

            <h2 className="font-bold mt-6 mb-2">ความช่วยเหลือ</h2>
            <CardAccount link="/point-collection" text="วิธีเก็บคะแนน" icon={faBook}/>
            <CardAccount link="/exchange-rewards" text="วิธีแลกของรางวัล" icon={faGift}/>
            <CardAccount link="/member-condition" text="เงื่อนไขระดับของสมาชิก" icon={faCreditCardFront}/>

            <h2 className="font-bold mt-6 mb-2">บัญชี</h2>
            <Button onClick={openModal} className="bg-white flex items-center w-full justify-between mb-4" style={{height:"inherit",padding:"15px 20px",border:"none",boxShadow:"none",borderRadius:"8px"}}>
              <Space>
                <FontAwesomeIcon icon={faArrowRightFromBracket} style={{minWidth:"24px"}}/>
                <span className="font-medium">ออกจากระบบ</span>
              </Space>
              <FontAwesomeIcon icon={faChevronRight} className="float-right"/>
            </Button>
          </section>
        </main>

        <Modal style={{top:"25%",bottom:"25%"}} className="popup-modal text-center" open={logoutModal} onOk={closeModal} onCancel={closeModal} closable={false} cancelText="ยกเลิก" okText="ออกจากระบบ">
          <h2 className="primary-color mb-2">
            <FontAwesomeIcon icon={faArrowRightFromBracket} style={{fontSize:"54px"}}/><br/>
            <span className="text-lg font-bold mt-5 inline-block">คุณต้องการออกจากระบบหรือไม่</span>
          </h2>
          <p>การใช้งานของคุณจะสิ้นสุดลง และคุณจะต้องเข้าสู่ระบบอีกครั้ง เพื่อเปิดการใช้งาน</p>
        </Modal>
        <FooterMenu activeMenu={4}/>
      </div>
    );
}

export default MyAccount;