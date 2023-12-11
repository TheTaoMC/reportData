import React, { useState } from "react";
import AppNavber from "../navbar/AppNavber";
import AppFetch from "../fetch/AppFetch";

function AppProduct() {
  const [dataID, setDataID] = useState("");
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
      field: "ProductID",
      header: "ProductID",
    },
    {
      field: "ProductName",
      header: "ProductName",
    },
    {
      field: "Price",
      header: "Price",
    },
  ];
  return (
    <div>
      <AppNavber />
      <AppFetch
        title={"สินค้า"}
        fetchDataURL={
          "https://theotesteng.000webhostapp.com/API/api/product/read.php"
        }
        delDataURL={
          "https://theotesteng.000webhostapp.com/API/api/product/delete.php"
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

export default AppProduct;
