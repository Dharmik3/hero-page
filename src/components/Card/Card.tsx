import React from "react";
import rate from "../../assets/rate.svg";
import "./styles.css";

export interface CardType {
  img: string;
  title: string;
  rate: string;
  label: string;
  backgroundColor: string;
}

const Card = (props: CardType) => {
  const { img, title, rate, label, backgroundColor } = props;
  return (
    <div className="cardContainer" style={{ backgroundColor: backgroundColor }}>
      <img src={img} alt="" />
      <p className="title">{title}</p>
      <p className="rate">{rate}</p>
      <p className="label">{label}</p>
    </div>
  );
};

export default Card;
