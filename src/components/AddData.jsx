import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";

const AddData = ({ VisibleIn, VisibleOut, child, title }) => {
  console.log("AddData: ", child);
  //data add
  const [dataID, setDataID] = useState("");
  const [productID, setProductID] = useState("");
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [flagCancel, setFlagCancel] = useState(false);
  const [checked, setChecked] = useState(false);
  //console.log("1. ", checked);

  const [visible, setVisible] = useState(false);
  console.log(VisibleIn);

  return (
    <>
      <Dialog
        header={title}
        visible={VisibleIn}
        style={{ width: "50vw" }}
        onHide={() => {
          VisibleOut();
        }}
      >
        {child}
        
        {/*  <div>
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
        </div> */}
      </Dialog>
    </>
  );
};

export default AddData;
