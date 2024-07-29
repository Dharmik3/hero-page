import React from "react";
import More from "../../assets/moreHorizontal.svg";

interface SidebarPatientType {
  patientName: string;
  patientInfo: string;
  profileImg: any;
}

const SidebarPatient = (props: SidebarPatientType) => {
  const { patientInfo, patientName, profileImg } = props;
  return (
    <div className="patientsProfileContainer">
      <img src={profileImg} alt="person 1" />
      <div className="patientsProfile">
        <p className="name">{patientName}</p>
        <p className="age">{patientInfo}</p>
      </div>
      <img src={More} alt="more" className="more" />
    </div>
  );
};

export default SidebarPatient;
