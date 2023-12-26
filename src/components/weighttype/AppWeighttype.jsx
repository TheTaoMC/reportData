import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AppNavber from "../navbar/AppNavber";
import AppFetch from "../fetch/AppFetch";

import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import AppTimer from "../AppTimer";

function AppWeighttype() {
  const [data, setData] = useState("");
  const [dataID, setDataID] = useState("");
  const [weightTypeID, setWeightTypeID] = useState("");
  const [weightTypeName, setWeightTypeName] = useState("");
  const [flagCancel, setFlagCancel] = useState(false);

  const fetchDataBody = {
    method: "GET",
  };
  const delDataBody = {
    method: "POST",
    body: JSON.stringify({
      DataID: data.DataID || "",
    }),
  };

  const addDataBody = {
    method: "POST",
    body: JSON.stringify({
      DataID: uuidv4(),
      WeightTypeID: weightTypeID,
      WeightTypeName: weightTypeName,
      FlagCancel: flagCancel ? "Y" : "N",
    }),
  };

  const editDataBody = {
    method: "POST",
    body: JSON.stringify({
      DataID: dataID,
      WeightTypeID: weightTypeID,
      WeightTypeName: weightTypeName,
      FlagCancel: flagCancel ? "Y" : "N",
    }),
  };

  const resetState = () => {
    setDataID("");
    setWeightTypeID("");
    setWeightTypeName("");
    setFlagCancel(false);
  };

  const setState = () => {
    setDataID(data.DataID);
    setWeightTypeID(data.WeightTypeID);
    setWeightTypeName(data.WeightTypeName);
    setFlagCancel(data.FlagCancel === "Y" ? true : false);
  };

  const upDatedataID = (selectedlist) => {
    console.log("selectedlist:AppProduct:2 ", selectedlist);

    setData(selectedlist);
  };

  const columns = [
    {
      field: "WeightTypeID",
      header: "WeightTypeID",
    },
    {
      field: "WeightTypeName",
      header: "WeightTypeName",
    },
    {
      field: "FlagCancel",
      header: "FlagCancel",
    },
  ];

  const addedit = (
    <div>
      <div>WeightTypeID</div>
      <div>
        <InputText
          autoFocus
          className="w-[100%]"
          value={weightTypeID}
          onChange={(e) => {
            setWeightTypeID(e.target.value);
          }}
        />
      </div>
      <div>WeightTypeName</div>
      <div>
        <InputText
          className="w-[100%]"
          value={weightTypeName}
          onChange={(e) => setWeightTypeName(e.target.value)}
        />
      </div>
      <div>
        <div className="flex gap-2  justify-between">
          <div className="flex gap-2 items-center">
            <div>สถานะ</div>
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
    </div>
  );
  const timeRemaining = AppTimer("/main");
  useEffect(() => {
    // You can use the timeRemaining if needed
    console.log("Time Remaining:", timeRemaining);
  }, [timeRemaining]);
  return (
    <div>
      <AppNavber />
      <AppFetch
        sortField={"WeightTypeName"}
        title={"ประเภทชั่ง"}
        fetchDataURL={
          "https://theotesteng.000webhostapp.com/API/api/weighttype/read.php"
        }
        delDataURL={
          "https://theotesteng.000webhostapp.com/API/api/weighttype/delete.php"
        }
        addDataURL={
          "https://theotesteng.000webhostapp.com/API/api/weighttype/create.php"
        }
        editDataURL={
          "https://theotesteng.000webhostapp.com/API/api/weighttype/update.php"
        }
        fetchDataBody={fetchDataBody}
        delDataBody={delDataBody}
        addDataBody={addDataBody}
        editDataBody={editDataBody}
        columns={columns}
        minWidth={"10rem"}
        selectedlistOut={upDatedataID}
        child={addedit}
        resetState={resetState}
        setState={setState}
      />
    </div>
  );
}

export default AppWeighttype;
