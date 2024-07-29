import React from "react";
import DiagnosisHistory from "../components/DiagnosisHistory/DiagnosisHistory";
import DiagnosisList from "../components/DiagnosisList/DiagnosisList";

export interface LeftMainType {
  data: any;
}
const LeftMain = (props: LeftMainType) => {
  const { data } = props;
  return (
    <div className="leftContainer">
      <DiagnosisHistory data={data?.diagnosis_history} />
      <DiagnosisList data={data?.diagnostic_list} />
    </div>
  );
};

export default LeftMain;
