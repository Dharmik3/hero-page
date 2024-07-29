import birthIcon from "../assets/BirthIcon.svg";
import femaleIcon from "../assets/FemaleIcon.svg";
import insuranceIcon from "../assets/InsuranceIcon.svg";
import phoneIcon from "../assets/PhoneIcon.svg";

export interface Props {
  date_of_birth: string;
  gender: string;
  phone_number: string;
  emergency_contact: string;
  insurance_type: string;
}

function formatDate(dateString: string) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  if (dateString) {
    const [month, day, year] = dateString?.split("/");
    const monthName = months[parseInt(month, 10) - 1];

    return `${monthName} ${parseInt(day, 10)}, ${year}`;
  }
}

export const infoData = (
  date_of_birth: string,
  gender: string,
  phone_number: string,
  emergency_contact: string,
  insurance_type: string
) => [
  {
    icon: birthIcon,
    label: "Date Of Birth",
    value: formatDate(date_of_birth),
  },
  {
    icon: femaleIcon,
    label: "Gender",
    value: gender,
  },
  {
    icon: phoneIcon,
    label: "Contact Info.",
    value: phone_number,
  },
  {
    icon: phoneIcon,
    label: "Emergency Contacts",
    value: emergency_contact,
  },
  {
    icon: insuranceIcon,
    label: "Insurance Provider",
    value: insurance_type,
  },
];
