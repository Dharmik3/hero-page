import "./styles.css";
export interface DiagnosisListType {
  data: {
    name: string;
    description: string;
    status: string;
  }[];
}

const DiagnosisList = (props: DiagnosisListType) => {
  const { data } = props;

  return (
    <div className="listContainer">
      <p className="header">Diagnostic List</p>
      <table>
        <tr className="tableHeader">
          <th>Problem/Diagnosis</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
        {data?.map((item) => (
          <tr>
            <td>{item?.name}</td>
            <td>{item?.description}</td>
            <td>{item?.status}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default DiagnosisList;
