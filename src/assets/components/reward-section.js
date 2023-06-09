import React from "react";
import { Card, Button, Space } from "antd";
import giftVoucher from "../../assets/images/gift-voucher.png";
import brandModulo from "../../assets/images/brand-modulo.png";
import neckPillowCat from "../../assets/images/neck-pillow-cat.png";
import neckPillowModulo from "../../assets/images/neck-pillow-modulo.png";
import pillowModulo from "../../assets/images/pillow-modulo.png";
import coolerBag from "../../assets/images/cooler-bag.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const RewardSection = () => {
    const CardReward = (props) => {
        return (
          <Link to={props.rewardLink}>
            <Card className="reward-cards" cover={(<img src={props.image}/>)} bodyStyle={{padding:"10px 17px 18px 17px"}}>
              <h2 className="font-bold text-sm pe-3">{props.name}</h2>
              <h3 className="primary-color font-semibold mt-2 text-sm">
                  <FontAwesomeIcon icon={faStar} className="mr-2"/>
                  {props.point} คะแนน
              </h3>
            </Card>
          </Link>
        )
      }

    return (
        <>
            <h2 className="font-bold mb-2 px-6">ของรางวัลทั้งหมด (<span id="num-all-items">9</span>)</h2>
            <div className="overflow-scroll flex gap-x-4 flex-nowrap px-6">
                <CardReward image={coolerBag} name="กระเป๋าเก็บความเย็น ฮอนด้านนทบุรี" point="40" rewardLink="/redemption"/>
                <CardReward image={giftVoucher} name="คูปองแทนเงินสด มูลค่า 50 บาท" point="10" rewardLink="#"/>
                <CardReward image={giftVoucher} name="คูปองแทนเงินสด มูลค่า 200 บาท" point="30" rewardLink="#"/>
                <CardReward image={giftVoucher} name="คูปองแทนเงินสด มูลค่า 500 บาท" point="50" rewardLink="#"/>
                <CardReward image={giftVoucher} name="คูปองแทนเงินสด มูลค่า 1,200 บาท" point="100" rewardLink="#"/>
                <CardReward image={brandModulo} name="ปลอกเข็มขัดนิรภัย Brand Modulo" point="30" rewardLink="#"/>
                <CardReward image={neckPillowModulo} name="หมอนรองคอ Brand Modulo" point="40" rewardLink="#"/>
                <CardReward image={neckPillowCat} name="หมอนรองคอน้องแมว ฮอนด้านนทบุรี" point="40" rewardLink="#"/>
                <CardReward image={pillowModulo} name="หมอนอิง Brand Modulo" point="40" rewardLink="#"/>
            </div>

            <h2 className="font-bold mt-8 mb-2 px-6">ของรางวัล (<span id="num-items">5</span>)</h2>
            <div className="overflow-scroll flex gap-x-4 flex-nowrap px-6">
                <CardReward image={coolerBag} name="กระเป๋าเก็บความเย็น ฮอนด้านนทบุรี" point="40" rewardLink="#"/>
                <CardReward image={brandModulo} name="ปลอกเข็มขัดนิรภัย Brand Modulo" point="30" rewardLink="#"/>
                <CardReward image={neckPillowModulo} name="หมอนรองคอ Brand Modulo" point="40" rewardLink="#"/>
                <CardReward image={neckPillowCat} name="หมอนรองคอน้องแมว ฮอนด้านนทบุรี" point="40" rewardLink="#"/>
                <CardReward image={pillowModulo} name="หมอนอิง Brand Modulo" point="40" rewardLink="#"/>
            </div>

            <h2 className="font-bold mt-8 mb-2 px-6">คูปองแทนเงินสด (<span id="num-coupons">4</span>)</h2>
            <div className="overflow-scroll flex gap-x-4 flex-nowrap px-6">
                <CardReward image={giftVoucher} name="คูปองแทนเงินสด มูลค่า 50 บาท" point="10" rewardLink="#"/>
                <CardReward image={giftVoucher} name="คูปองแทนเงินสด มูลค่า 200 บาท" point="30" rewardLink="#"/>
                <CardReward image={giftVoucher} name="คูปองแทนเงินสด มูลค่า 500 บาท" point="50" rewardLink="#"/>
                <CardReward image={giftVoucher} name="คูปองแทนเงินสด มูลค่า 1,200 บาท" point="100" rewardLink="#"/>
            </div>
        </>
    )
}

export default RewardSection;