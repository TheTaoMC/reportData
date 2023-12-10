import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

const AddData = ({ VisibleIn, VisibleOut }) => {
  const [visible, setVisible] = useState(false);
  console.log(VisibleIn);

  return (
    <>
      <Dialog
        header="Header"
        visible={VisibleIn}
        style={{ width: "50vw" }}
        onHide={() => {
          VisibleOut();
        }}
      >
        <p className="m-0">Lorem</p>
      </Dialog>
    </>
  );
};

export default AddData;
