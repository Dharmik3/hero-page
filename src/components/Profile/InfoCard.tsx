
export interface InfoCardType {
  icon: string;
  label: string;
  value: string;
}
const InfoCard = (props: InfoCardType) => {
  const { icon, label, value } = props;
  return (
    <div className="infoWrapper">
      <img src={icon} alt="" />
      <div className="infoContent">
        <p className="infoLabel">{label}</p>
        <p className="infoValue">{value}</p>
      </div>
    </div>
  );
};

export default InfoCard;
