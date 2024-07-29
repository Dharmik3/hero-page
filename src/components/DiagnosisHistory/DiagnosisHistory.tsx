import React from "react";
import rate from "../../assets/rate.svg";
import heart from "../../assets/heart.svg";
import tempratureIcon from "../../assets/temperature.svg";
import Card from "../Card/Card";
import Graph from "../Graph/Graph";
import expandMore from "../../assets/expandMore.svg";
import arrowUp from "../../assets/ArrowUp.svg";
import arrowDonwn from "../../assets/ArrowDown.svg";
import "./styles.css";

export interface DiagnosisHistoryType {
  data: any;
}

const DiagnosisHistory = (props: DiagnosisHistoryType) => {
  const { data } = props;
  const graphData = data?.slice(Math.max(data?.length - 6, 0));
  const systolicAvg =
    graphData?.reduce(
      (acc: any, entry: { blood_pressure: { systolic: { value: number } } }) =>
        (acc += entry.blood_pressure.systolic.value),
      0
    ) / graphData?.length;
  const diastolicAvg =
    graphData?.reduce(
      (
        acc: number,
        entry: { blood_pressure: { diastolic: { value: number } } }
      ) => (acc += entry.blood_pressure.diastolic.value),
      0
    ) / graphData?.length;
  const respiratoryRate =
    graphData?.reduce(
      (acc: number, entry: { respiratory_rate: { value: number } }) =>
        (acc += entry?.respiratory_rate.value),
      0
    ) / graphData?.length;
  const temprature =
    graphData?.reduce(
      (acc: number, entry: { temperature: { value: number } }) =>
        (acc += entry?.temperature.value),
      0
    ) / graphData?.length;
  const heartRate =
    graphData?.reduce(
      (acc: number, entry: { heart_rate: { value: number } }) =>
        (acc += entry?.heart_rate.value),
      0
    ) / graphData?.length;

  return (
    <div className="diagnosisHistoryContainer">
      <p className="header">Diagnosis History</p>
      <div className="graphMainWrapper">
        <div className="graphContainer">
          <div className="graphHeading">
            <p className="graphTitle">Blood Pressure</p>
            <div className="filter">
              <p>Last 6 months</p>
              <img src={expandMore} alt="expand more" className="expandMore" />
            </div>
          </div>

          <Graph data={data} />
        </div>
        <div className="legendWrapper">
          <div className="legend">
            <div className="legendTitle">
              <span className="legendBadge"></span>
              <p className="legendName">Systolic</p>
            </div>
            <div className="legendCount">{Math.floor(systolicAvg)}</div>
            <div className="legendIndicator">
              <img src={arrowUp} alt="" className="arrow" />
              <p className="indicatorTitle">Higher than Average</p>
            </div>
          </div>
          <div className="horizontalLine" />
          <div className="legend">
            <div className="legendTitle">
              <span
                className="legendBadge"
                style={{ backgroundColor: "#8C6FE6" }}
              ></span>
              <p className="legendName">Diastolic</p>
            </div>
            <div className="legendCount">{Math.floor(diastolicAvg)}</div>
            <div className="legendIndicator">
              <img src={arrowDonwn} alt="" className="arrow" />
              <p className="indicatorTitle">Lower than Average</p>
            </div>
          </div>
        </div>
      </div>
      <div className="cardWrapper">
        <Card
          img={rate}
          title="Respiratory Rate"
          rate={`${Math.floor(respiratoryRate)} bpm`}
          label="Normal"
          backgroundColor="#E0F3FA"
        />
        <Card
          img={tempratureIcon}
          title="Temperature"
          rate={`${temprature.toFixed(1)}°F`}
          label="Normal"
          backgroundColor="#FFE6E9"
        />
        <Card
          img={heart}
          title="Heart Rate"
          rate={`${Math.floor(heartRate)} bpm`}
          label="Lower than Average"
          backgroundColor="#FFE6F1"
        />
      </div>
    </div>
  );
};

export default DiagnosisHistory;
