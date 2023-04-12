import React from "react";
import { Avatar } from "antd";
import { faChevronLeft } from "@fortawesome/pro-solid-svg-icons";
import { faGiftCard, faUser } from "@fortawesome/pro-regular-svg-icons";
import FooterMenu from "../../assets/components/footerMenu";
import HeaderMobile from "../../assets/components/header";
import RewardSection from "../../assets/components/reward-section";
import { UserOutlined } from '@ant-design/icons';
import mockAvatar from "../../assets/images/mock-avatar.svg";

const MyAccount = () => {
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

                        <div className="columns-2">
                          <div className="block">
                            <h1>20</h1>
                            <p>คะแนนที่คุณมี</p>
                          </div>
                          <div className="block">
                            <h1>220</h1>
                            <p>คะแนนที่คุณเคยใช้</p>
                          </div>
                        </div>
                      </div>
                </section>
                <section className="mt-7 py-6 pb-20" style={{backgroundColor:"#F8F8F8"}}>
                    
                </section>
            </main>
            <FooterMenu activeMenu={4}/>
        </div>
    );
}

export default MyAccount;