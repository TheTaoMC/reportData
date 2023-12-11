import React, { useState } from "react";
import AppNavber from "../navbar/AppNavber";
import AppFetch from "../fetch/AppFetch";

import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import AddData from "../AddData";

function AppProduct() {
  const [dataID, setDataID] = useState("");
  const [productID, setProductID] = useState("");
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [flagCancel, setFlagCancel] = useState(false);
  const [checked, setChecked] = useState(false);

  const [data_ID, setData_ID] = useState("");
  const fetchDataBody = {
    method: "GET",
  };
  const delDataBody = {
    method: "POST",
    body: JSON.stringify({
      DataID: data_ID.DataID,
    }),
  };

  const addDataBody = {
    method: "POST",
    body: JSON.stringify({
      DataID: productID,
      ProductID: productID,
      ProductName: productName,
      Price: price,
      FlagCancel: flagCancel ? "Y" : "N",
    }),
  };

  const upDatedataID = (selectedlist) => {
    setData_ID(selectedlist);
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

  const addedit1 = () => {
    return (
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
  };

  const save = () => {
    // ทำสิ่งที่คุณต้องการเมื่อ save ที่นี่...
    console.log("Save function called from parent component!");
  };

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
              onChange={(e) => setFlagCancel(e.checked)}
              checked={flagCancel}
            ></Checkbox>
            <label htmlFor="ingredient1" className="">
              ยกเลิก
            </label>
          </div>
        </div>
      </div>
      <div className="flex gap-2 mt-2">
        <Button
          onClick={() => {
            Adddata(save);
          }}
          className="w-20"
          label="บันทึก"
        />
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
        title={"สินค้า"}
        fetchDataURL={
          "https://theotesteng.000webhostapp.com/API/api/product/read.php"
        }
        delDataURL={
          "https://theotesteng.000webhostapp.com/API/api/product/delete.php"
        }
        addDataURL={
          "https://theotesteng.000webhostapp.com/API/api/product/create.php"
        }
        fetchDataBody={fetchDataBody}
        delDataBody={delDataBody}
        addDataBody={addDataBody}
        columns={columns}
        minWidth={"50rem"}
        selectedlistOut={upDatedataID}
        child={addedit}
        save={save}
      />
    </div>
  );
}

export default AppProduct;
