import React from "react";
import download from "../../assets/download.svg";
import "./styles.css";
export interface LabResultsType {
  labResults: string[];
}

const LabResults = (props: LabResultsType) => {
  const { labResults } = props;
  return (
    <div className="labResultsContainer">
      <p className="header">Lab Results</p>
      {labResults?.map((result) => (
        <div className="testRow">
          <p className="testName">{result}</p>
          <img src={download} alt="" className="downloadImg" />
        </div>
      ))}
    </div>
  );
};

export default LabResults;
