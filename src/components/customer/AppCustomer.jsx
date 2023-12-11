import React, { useState } from "react";
import AppNavber from "../navbar/AppNavber";
import AppFetch from "../fetch/AppFetch";

import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";

function AppCustomer() {
  //const [dataID, setDataID] = useState("");
  const [productID, setProductID] = useState("");
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [flagCancel, setFlagCancel] = useState(false);
  const [checked, setChecked] = useState(false);

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

  const addedit = (
    <div>
      <div>ProductID</div>
      <div>
        <InputText
          className="w-[100%]"
          value={productID}
          onChange={(e) => {
            setDataID(e.target.value);
            setProductID(e.target.value);
          }}
        />
      </div>
      <div>ProductName</div>
      <div>
        <InputText
          className="w-[100%]"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
      </div>
      <div>Price</div>
      <div>
        <div className="flex gap-2  justify-between">
          <div className="flex gap-1 items-center">
            <InputText
              className="w-24"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <label htmlFor="ingredient1">บาท</label>
          </div>

          <div className="flex gap-1 items-center">
            <Checkbox
              onChange={(e) => setChecked(e.checked)}
              checked={checked}
            ></Checkbox>
            <label htmlFor="ingredient1" className="">
              ยกเลิก
            </label>
          </div>
        </div>
      </div>
      <div className="flex gap-2 mt-2">
        <Button className="w-20" label="บันทึก" />
        <Button
          className="w-20"
          onClick={() => {
            VisibleOut();
          }}
          label="ยกเลิก"
        />
      </div>
    </div>
  );
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
        child={addedit}
      />
    </div>
  );
}

export default AppCustomer;
