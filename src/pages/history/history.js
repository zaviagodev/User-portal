import React from "react";
import { Tabs, Card } from "antd";
import FooterMenu from "../../assets/components/footerMenu";
import HeaderMobile from "../../assets/components/header";
import { faChevronLeft } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const History = () => {
    const onChange = (key) => {
        console.log(key);
    }

    const CardHistory = (props) => {
        return (
          <div className="mb-4">
            <Card>
              <div className="columns-2 flex items-center justify-between">
                <div className="block">
                    <h2 className="text-color font-bold text-base mb-3">{props.title}</h2>
                    <p className="secondary-color text-xs">{props.date}</p>
                </div>
                <div className="block">
                    <h2 className="primary-color font-bold">{props.positive === true ? "+" : "-"}{props.point} คะแนน</h2>
                </div>
              </div>
            </Card>
          </div>
        )
    }

    const menus = [
        {
            key: '1',
            label: 'คะแนนที่ได้รับ',
            children: (
              <div>
                <CardHistory title="เข้าใช้บริการปกติ" date="22 ม.ค. 2022" point="10" positive={true}/>
                <CardHistory title="แลกรางวัลเป็นคะแนน" date="22 ม.ค. 2022" point="10" positive={true}/>
                <CardHistory title="เข้าใช้บริการปกติ" date="22 ม.ค. 2022" point="10" positive={true}/>
                <CardHistory title="เข้าใช้บริการปกติ" date="22 ม.ค. 2022" point="10" positive={true}/>
              </div>
            )
        },
        {
            key: '2',
            label: 'คะแนนที่ใช้ไป',
            children: (
              <div>
                <CardHistory title="คูปองแทนเงินสดมูลค่า 50 บาท" date="22 ม.ค. 2022" point="10" positive={false}/>
                <CardHistory title="คูปองแทนเงินสดมูลค่า 200 บาท" date="22 ม.ค. 2022" point="30" positive={false}/>
                <CardHistory title="คูปองแทนเงินสดมูลค่า 500 บาท" date="22 ม.ค. 2022" point="50" positive={false}/>
              </div>
            )
        }
    ]

    return (
        <div>
            <HeaderMobile firstLink="/" firstIcon={faChevronLeft} title="ประวัติ" secondBtn={false}/>
            <main className="p-6 tabs-menu" style={{backgroundColor:"#F8F8F8",borderRadius:"12px 12px 0 0"}}>
                <Tabs defaultActiveKey="1" items={menus} onChange={onChange} centered={true}/>
            </main>
            <FooterMenu activeMenu={3}/>
        </div>
    )
}

export default History;