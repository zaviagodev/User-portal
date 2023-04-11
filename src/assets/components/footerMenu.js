import React, { useState } from "react";

const FooterMenu = (props) => {
    return (
        <div>
            <footer className="p-6 fixed w-full bg-white bottom-0 z-50" style={{borderTop:"1px solid #F8F8F8"}}>
                <nav>
                    <ul className="flex justify-around">
                        <li className={`${(props.activeMenu === 1 ? "primary-color" : "menu-inactive-color")}`}>
                            <a href="#">หน้าหลัก</a>
                        </li>
                        <li className={`${(props.activeMenu === 2 ? "primary-color" : "menu-inactive-color")}`}>
                            <a href="#">แลกของรางวัล</a>
                        </li>
                        <li className={`${(props.activeMenu === 3 ? "primary-color" : "menu-inactive-color")}`}>
                            <a href="#">ประวัติ</a>
                        </li>
                        <li className={`${(props.activeMenu === 4 ? "primary-color" : "menu-inactive-color")}`}>
                            <a href="#">ข้อมูลของฉัน</a>
                        </li>
                    </ul>
                </nav>
            </footer>
        </div>
    )
}

export default FooterMenu;