import React from "react";
import LeftMain from "./LeftMain";
import RightMain from "./RightMain";
import "./styles.css";

const DiagnosisPage = () => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    let username = "coalition";
    let password = "skills-test";
    let auth = btoa(`${username}:${password}`);

    fetch("https://fedskillstest.coalitiontechnologies.workers.dev", {
      headers: {
        Authorization: `Basic ${auth}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, []);
  if (!data.length) return null;
  return (
    <div className="mainContainer">
      <LeftMain data={data[3]} />
      <RightMain data={data[3]} />
    </div>
  );
};

export default DiagnosisPage;
