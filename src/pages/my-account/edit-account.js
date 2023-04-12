import { faChevronLeft } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import HeaderMobile from "../../assets/components/header";
import { Input, DatePicker, Button } from "antd";

const EditAccount = () => {
    document.body.style.backgroundColor = "#F8F8F8";

    const [edited, isEdited] = useState(true);
    return (
        <div>
            <HeaderMobile firstLink="/my-account" firstIcon={faChevronLeft} title="ข้อมูลของฉัน" secondBtn={false}/>
            <main className="p-6">
                <h2 className="font-bold">ข้อมูลส่วนตัว</h2>

                <label className="inline-block mt-4 text-sm">ชื่อ-นามสกุล</label>
                <Input className="w-full mt-2 input-account" placeholder="กณพ หงษ์วิไล" />

                <label className="inline-block mt-4 text-sm">เลขบัตรประจำตัวบัตรประชาชน</label>
                <Input className="w-full mt-2 input-account" placeholder="1-4100-23678-19-5" />

                <label className="inline-block mt-4 text-sm">วันเกิด</label>
                <DatePicker className="w-full mt-2 input-account" placeholder="12 มกราคม 1990"/>

                <label className="inline-block mt-4 text-sm">เบอร์โทร</label>
                <Input type="tel" className="w-full mt-2 input-account" placeholder="098-7654321" />

                <label className="inline-block mt-4 text-sm">อีเมล</label>
                <Input type="email" className="w-full mt-2 input-account" placeholder="User_01@mail.com" />
            </main>

            <footer className="p-6 relative bottom-0">
                <Button className={`save-btn ${edited ? "active" : "inactive"}`} disabled={edited ? false : true}>บันทึก</Button>
            </footer>
        </div>
    )
}

export default EditAccount;