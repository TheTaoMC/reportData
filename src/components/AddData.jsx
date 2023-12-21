import React, { useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

const AddData = ({ VisibleIn, VisibleOut, SaveOut, child, title }) => {
  //console.log("AddData: ", child);
  //data add
  //const [dataID, setDataID] = useState("");
  //const [productID, setProductID] = useState("");
  //const [productName, setProductName] = useState("");
  //const [price, setPrice] = useState("");
  //const [flagCancel, setFlagCancel] = useState(false);
  //const [checked, setChecked] = useState(false);
  //console.log("1. ", checked);

  const [visible, setVisible] = useState(false);
  //console.log(VisibleIn);

  return (
    <>
      <Dialog
        header={title}
        visible={VisibleIn}
        style={{ width: "70vw" }}
        onHide={() => {
          VisibleOut();
        }}
      >
        {child}

        <div className="flex gap-2 mt-2">
          <Button
            onClick={() => {
              SaveOut();
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
      </Dialog>
    </>
  );
};

export default AddData;
