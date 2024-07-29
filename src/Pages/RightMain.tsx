import Profile from "../components/Profile/Profile";
import LabResults from "../components/LabResults/LabResults";

export interface RightMainType {
  data: any;
}

const RightMain = (props: RightMainType) => {
  const { data } = props;
  return (
    <div className="rightConatiner">
      <Profile
        name={data?.name}
        date_of_birth={data?.date_of_birth}
        profile_picture={data?.profile_picture}
        gender={data?.gender}
        phone_number={data?.phone_number}
        emergency_contact={data?.emergency_contact}
        insurance_type={data?.insurance_type}
      />
      <LabResults labResults={ data?.lab_results} />
    </div>
  );
};

export default RightMain;
