import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift, faHistory, faHome, faUser } from "@fortawesome/pro-solid-svg-icons";

const FooterMenu = (props) => {
    return (
        <footer className="px-6 py-3 fixed w-full bg-white bottom-0 z-50" style={{borderTop:"1px solid #F8F8F8"}}>
            <nav>
              <ul className="flex justify-between">
                <li className={`text-sm ${(props.activeMenu === 1 ? "primary-color font-bold" : "menu-inactive-color font-medium")}`}>
                  <a href="#">
                    <FontAwesomeIcon icon={faHome} className="block text-xl m-auto"/>
                    <span className="mt-1 inline-block">หน้าหลัก</span>
                  </a>
                </li>
                <li className={`text-sm ${(props.activeMenu === 2 ? "primary-color font-bold" : "menu-inactive-color font-medium")}`}>
                  <a href="#">
                    <FontAwesomeIcon icon={faGift} className="block text-xl m-auto"/>
                    <span className="mt-1 inline-block">แลกของรางวัล</span>
                  </a>
                </li>
                <li className={`text-sm ${(props.activeMenu === 3 ? "primary-color font-bold" : "menu-inactive-color font-medium")}`}>
                  <a href="#">
                    <FontAwesomeIcon icon={faHistory} className="block text-xl m-auto"/>
                    <span className="mt-1 inline-block">ประวัติ</span>
                  </a>
                </li>
                <li className={`text-sm ${(props.activeMenu === 4 ? "primary-color font-bold" : "menu-inactive-color font-medium")}`}>
                  <a href="#">
                    <FontAwesomeIcon icon={faUser} className="block text-xl m-auto"/>
                    <span className="mt-1 inline-block">ข้อมูลของฉัน</span>
                  </a>
                </li>
              </ul>
            </nav>
        </footer>
    )
}

export default FooterMenu;