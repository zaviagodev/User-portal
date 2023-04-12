import React from "react";
import { Card, Button, Space } from "antd";
import giftVoucher from "../../assets/images/gift-voucher.svg";
import brandModulo from "../../assets/images/brand-modulo.svg";
import neckPillowCat from "../../assets/images/neck-pillow-cat.svg";
import neckPillowModulo from "../../assets/images/neck-pillow-modulo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faStar } from "@fortawesome/free-solid-svg-icons";

const RewardSection = () => {
    const CardReward = (props) => {
        return (
          <a href={props.rewardLink}>
            <Card className="reward-cards" title={(<img src={props.image}/>)}>
              <h2 className="font-bold text-sm pe-3">{props.name}</h2>
              <h3 className="primary-color font-semibold mt-2 text-sm">
                  <FontAwesomeIcon icon={faStar} className="mr-2"/>
                  {props.point} คะแนน
              </h3>
            </Card>
          </a>
        )
      }

    return (
        <>
            <h2 className="font-bold mb-2 px-6">ของรางวัลทั้งหมด (<span id="num-all-items">9</span>)</h2>
            <div className="overflow-scroll flex gap-x-4 flex-nowrap px-6">
                <CardReward image={giftVoucher} name="คูปองแทนเงินสด มูลค่า 50 บาท" point="10" rewardLink="#"/>
                <CardReward image={brandModulo} name="ปลอกเข็มขัดนิรภัย Brand Modulo" point="30" rewardLink="#"/>
                <CardReward image={giftVoucher} name="คูปองแทนเงินสด มูลค่า 1,200 บาท" point="100" rewardLink="#"/>
            </div>

            <h2 className="font-bold mt-8 mb-2 px-6">ของรางวัล (<span id="num-items">5</span>)</h2>
            <div className="overflow-scroll flex gap-x-4 flex-nowrap px-6">
                <CardReward image={neckPillowModulo} name="หมอนรองคอ Brand Modulo" point="40" rewardLink="#"/>
                <CardReward image={neckPillowCat} name="หมอนรองคอน้องแมว ฮอนด้านนทบุรี" point="40" rewardLink="#"/>
                <CardReward image={giftVoucher} name="คูปองแทนเงินสด มูลค่า 1,200 บาท" point="10" rewardLink="#"/>
            </div>

            <h2 className="font-bold mt-8 mb-2 px-6">คูปองแทนเงินสด (<span id="num-coupons">4</span>)</h2>
            <div className="overflow-scroll flex gap-x-4 flex-nowrap px-6">
                <CardReward image={giftVoucher} name="คูปองแทนเงินสด มูลค่า 50 บาท" point="10" rewardLink="#"/>
                <CardReward image={giftVoucher} name="คูปองแทนเงินสด มูลค่า 200 บาท" point="30" rewardLink="#"/>
                <CardReward image={giftVoucher} name="คูปองแทนเงินสด มูลค่า 1,200 บาท" point="10" rewardLink="#"/>
            </div>
        </>
    )
}

export default RewardSection;