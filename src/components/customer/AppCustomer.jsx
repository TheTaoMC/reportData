import React, { useState } from "react";
import AppNavber from "../navbar/AppNavber";
import AppFetch from "../fetch/AppFetch";

function AppCustomer() {
  const [dataID, setDataID] = useState("");
  console.log(dataID.DataID);
  const fetchDataBody = {
    method: "GET",
  };
  const delDataBody = {
    method: "POST",
    body: JSON.stringify({
      DataID: dataID.DataID,
    }),
  };

  const upDatedataID = (selectedlist) => {
    setDataID(selectedlist);
  };

  const columns = [
    {
      field: "CustomerID",
      header: "CustomerID",
    },
    {
      field: "CustomerName",
      header: "CustomerName",
    },
    {
      field: "Address1",
      header: "Address1",
    },
    {
      field: "Address2",
      header: "Address2",
    },
  ];
  return (
    <div>
      <AppNavber />
      <AppFetch
        title={"ลูกค้า"}
        fetchDataURL={
          "https://theotesteng.000webhostapp.com/API/api/customer/read.php"
        }
        delDataURL={
          "https://theotesteng.000webhostapp.com/API/api/customer/delete.php"
        }
        fetchDataBody={fetchDataBody}
        delDataBody={delDataBody}
        columns={columns}
        minWidth={"50rem"}
        selectedlistOut={upDatedataID}
      />
    </div>
  );
}

export default AppCustomer;
