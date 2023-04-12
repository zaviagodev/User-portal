import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHistory, faHome } from "@fortawesome/pro-solid-svg-icons";
import { faGift, faUser } from "@fortawesome/pro-regular-svg-icons";
import { Link } from "react-router-dom";

const FooterMenu = (props) => {
    return (
      <footer className="px-6 py-3 fixed w-full bg-white bottom-0 z-50" style={{borderTop:"1px solid #F8F8F8"}}>
        <nav>
          <ul className="flex justify-between">
            <li className={`text-sm ${(props.activeMenu === 1 ? "primary-color" : "menu-inactive-color")}`}>
              <Link to="/">
                <FontAwesomeIcon icon={faHome} className="block text-xl m-auto"/>
                <span className={`mt-1 inline-block ${(props.activeMenu === 1 ? "font-bold" : "font-medium")}`}>หน้าหลัก</span>
              </Link>
            </li>
            <li className={`text-sm ${(props.activeMenu === 2 ? "primary-color" : "menu-inactive-color")}`}>
              <Link to="/rewards">
                <FontAwesomeIcon icon={faGift} className="block text-xl m-auto"/>
                <span className={`mt-1 inline-block ${(props.activeMenu === 2 ? "font-bold" : "font-medium")}`}>แลกของรางวัล</span>
              </Link>
            </li>
            <li className={`text-sm ${(props.activeMenu === 3 ? "primary-color" : "menu-inactive-color")}`}>
              <Link to="/history">
                <FontAwesomeIcon icon={faHistory} className="block text-xl m-auto"/>
                <span className={`mt-1 inline-block ${(props.activeMenu === 3 ? "font-bold" : "font-medium")}`}>ประวัติ</span>
              </Link>
            </li>
            <li className={`text-sm ${(props.activeMenu === 4 ? "primary-color" : "menu-inactive-color")}`}>
              <Link to="#">
                <FontAwesomeIcon icon={faUser} className="block text-xl m-auto"/>
                <span className={`mt-1 inline-block ${(props.activeMenu === 4 ? "font-bold" : "font-medium")}`}>ข้อมูลของฉัน</span>
              </Link>
            </li>
          </ul>
        </nav>
      </footer>
    )
}

export default FooterMenu;