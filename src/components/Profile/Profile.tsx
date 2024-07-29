import { infoData } from "../../data/infoData";
import "./styles.css";
import InfoCard from "./InfoCard";

export interface ProfileType {
  name: string;
  profile_picture: string;
  date_of_birth: string;
  gender: string;
  phone_number: string;
  emergency_contact: string;
  insurance_type: string;
}

const Profile = (props: ProfileType) => {
  const {
    name,
    profile_picture,
    date_of_birth,
    gender,
    phone_number,
    emergency_contact,
    insurance_type,
  } = props;
  return (
    <div className="profileContainer">
      <div className="profileImgName">
        <img src={profile_picture} alt="" />
        <p className="profileName">{name}</p>
      </div>
      <div className="infoContainer">
        {infoData(
          date_of_birth,
          gender,
          phone_number,
          emergency_contact,
          insurance_type
        ).map((item, index) => {
          return (
            <InfoCard
              key={index}
              icon={item.icon}
              label={item.label}
              value={item.value as string}
            />
          );
        })}
      </div>
      <div className="btnWrapper">
        <button className="showAllInfoBtn">Show All Information</button>
      </div>
    </div>
  );
};

export default Profile;
