import Search from "../../assets/search.svg";
import "./styles.css";
import SidebarPatient from "./SidebarPatient";
import { patientsData } from "../../data/patientsData";

export const Sidebar = () => {
  return (
    <div className="sidebarContainer">
      <div className="sidebarHeader">
        <p className="headerName">Patients</p>
        <img src={Search} alt="search" />
      </div>
      {patientsData.map((patient) => (
        <SidebarPatient
          patientName={patient.patientName}
          patientInfo={patient.patientInfo}
          profileImg={patient.profileImg}
        />
      ))}
    </div>
  );
};
