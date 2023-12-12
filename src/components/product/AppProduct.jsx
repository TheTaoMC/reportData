import React, { useState } from "react"
import AppNavber from "../navbar/AppNavber"
import AppFetch from "../fetch/AppFetch"

import { InputText } from "primereact/inputtext"
import { InputNumber } from "primereact/inputnumber"
import { Checkbox } from "primereact/checkbox"

function AppProduct() {
  const [data, setData] = useState("")
  const [dataID, setDataID] = useState("")
  const [productID, setProductID] = useState("")
  const [productName, setProductName] = useState("")
  const [price, setPrice] = useState(0.0)
  const [flagCancel, setFlagCancel] = useState(false)

  console.log("selectedlist:AppProduct:33 ", dataID)

  console.log(productID)

  const fetchDataBody = {
    method: "GET",
  }
  const delDataBody = {
    method: "POST",
    body: JSON.stringify({
      DataID: data.DataID || "",
    }),
  }

  const addDataBody = {
    method: "POST",
    body: JSON.stringify({
      DataID: productID,
      ProductID: productID,
      ProductName: productName,
      Price: price,
      FlagCancel: flagCancel ? "Y" : "N",
    }),
  }

  const editDataBody = {
    method: "POST",
    body: JSON.stringify({
      DataID: productID,
      ProductID: productID,
      ProductName: productName,
      Price: price,
      FlagCancel: flagCancel ? "Y" : "N",
    }),
  }

  const resetState = () => {
    setDataID("")
    setProductID("")
    setProductName("")
    setPrice(0.0)
    setFlagCancel(false)
  }

  const setState = () => {
    setDataID(data.DataID)
    setProductID(data.ProductID)
    setProductName(data.ProductName)
    setPrice(data.Price)
    setFlagCancel(data.FlagCancel === "Y" ? true : false)
  }

  const upDatedataID = (selectedlist) => {
    console.log("selectedlist:AppProduct:2 ", selectedlist)

    setData(selectedlist)
  }

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
  ]

  const addedit = (
    <div>
      <div>ProductID</div>
      <div>
        <InputText
          className="w-[100%]"
          value={productID}
          onChange={(e) => {
            setDataID(e.target.value)
            setProductID(e.target.value)
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
            <InputNumber
              size={5}
              className=""
              inputId="minmaxfraction"
              value={price}
              onValueChange={(e) => setPrice(e.value)}
              minFractionDigits={2}
              maxFractionDigits={7}
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
    </div>
  )

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
        editDataURL={
          "https://theotesteng.000webhostapp.com/API/api/product/update.php"
        }
        fetchDataBody={fetchDataBody}
        delDataBody={delDataBody}
        addDataBody={addDataBody}
        editDataBody={editDataBody}
        columns={columns}
        minWidth={"100rem"}
        selectedlistOut={upDatedataID}
        child={addedit}
        resetState={resetState}
        setState={setState}
      />
    </div>
  )
}

export default AppProduct
