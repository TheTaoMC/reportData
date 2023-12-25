import React, { useEffect, useState } from "react";
import { Checkbox } from "@material-tailwind/react";
import { Accordion, AccordionTab } from "primereact/accordion";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import fetchData from "./FetchData";
import { Button } from "primereact/button";
import { classNames } from "primereact/utils";

function AppSearch() {
  const [dataCustomers, setDataCustomers] = useState([]);
  const [dataProducts, setDataProducts] = useState([]);
  const [dataWeighttypes, setDataWeighttypes] = useState([]);
  const [dataDrivers, setDataDrivers] = useState([]);
  const [dataTransporters, setDataTransporters] = useState([]);

  const [filters, setFilters] = useState({
    WeightScaleIDInFilter: false,
    weightScaleIDOutFilter: false,
    SequenceWeightInFilter: false,
    SequenceWeightOutFilter: false,
    WeightDateInFilter: false,
    WeightTimeInFilter: false,
    WeightDateOutFilter: false,
    WeightTimeOutFilter: false,
    CarRegisterFilter: false,
    WeightTypeIDFilter: false,
    CustomerIDFilter: false,
    ProductIDFilter: false,
    TransporterIDFilter: false,
    DriverIDFilter: false,
    RFIDTagIDFilter: false,
    FlagStatusFilter: false,
    FlagCancelFilter: false,
    FlagPaymentFilter: false,
  });

  const [filters2, setFilters2] = useState([
    {
      Title: "เครื่องชั่งขาเข้า",
      Filter: false,
      Typeinput: "text",
      From: "",
      To: "",
    },
    {
      Title: "เครื่องชั่งขาออก",
      Filter: false,
      Typeinput: "text",
      From: "",
      To: "",
    },
    {
      Title: "เวลาชั่งเข้า",
      Filter: false,
      Typeinput: "calendar",
      From: new Date(),
      To: new Date(),
    },
    {
      Title: "เวลาชั่งออก",
      Filter: true,
      Typeinput: "calendar",
      From: new Date(),
      To: new Date(),
    },
    {
      Title: "เลขที่เข้า",
      Filter: false,
      Typeinput: "text",
      From: "",
      To: "",
    },
    {
      Title: "ทะเบียนรถ",
      Filter: false,
      Typeinput: "text",
      From: "",
      To: "",
    },
    {
      Title: "เลขที่ออก",
      Filter: false,
      Typeinput: "text",
      From: "",
      To: "",
    },
    {
      Tablename: "weighttype",
      Title: "ประเภทชั่ง",
      Filter: false,
      Typeinput: "dropdown",
      From: "Select a Country",
      To: "Select a Country",
    },
    {
      Tablename: "customer",
      Title: "คู่ค้า",
      Filter: false,
      Typeinput: "dropdown",
      From: "",
      To: "",
    },
    {
      Tablename: "product",
      Title: "สินค้า",
      Filter: false,
      Typeinput: "dropdown",
      From: "Select a Country",
      To: "Select a Country",
    },
    {
      Tablename: "transporter",
      Title: "ผู้ขนส่ง",
      Filter: false,
      Typeinput: "dropdown",
      From: "Select a Country",
      To: "Select a Country",
    },
    {
      Tablename: "driver",
      Title: "พนักงานขับรถ",
      Filter: false,
      Typeinput: "dropdown",
      From: "Select a Country",
      To: "Select a Country",
    },
    {
      Title: "สถานะการยกเลิก",
      Filter: false,
      Typeinput: "Singledropdown",
      From: "",
      To: "",
    },
    {
      Title: "แสดงรถชั่งเสร็จ",
      Filter: false,
      Typeinput: "",
      From: "",
      To: "",
    },
    {
      Title: "แสดงงรถค้างชั่ง",
      Filter: false,
      Typeinput: "",
      From: "",
      To: "",
    },
  ]);

  //ดึงค่า WeightScaleIDInFilter
  //console.log("เวลา: ", filters2[3].From);

  //console.log("filters2: ", filters2);

  const fetchDataAndSetState = async () => {
    try {
      await fetchData(
        "https://theotesteng.000webhostapp.com/API/api/customer/read.php",
        { method: "GET" },
        setDataCustomers
      );
      await fetchData(
        "https://theotesteng.000webhostapp.com/API/api/product/read.php",
        { method: "GET" },
        setDataProducts
      );
      await fetchData(
        "https://theotesteng.000webhostapp.com/API/api/weighttype/read.php",
        { method: "GET" },
        setDataWeighttypes
      );
      await fetchData(
        "https://theotesteng.000webhostapp.com/API/api/driver/read.php",
        { method: "GET" },
        setDataDrivers
      );
      await fetchData(
        "https://theotesteng.000webhostapp.com/API/api/transporter/read.php",
        { method: "GET" },
        setDataTransporters
      );

      //setDataCustomers(data1);
      //setDataProducts(data2);
      //setDataWeighttypes(data3);
      //setDataDrivers(data4);
      //setDataTransporters(data5);
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  //load Data
  useEffect(() => {
    fetchDataAndSetState();
    //console.log("load Data")
  }, []);

  /*   const [weightScaleIDInFilter, setWeightScaleIDInFilter] = useState("");
  const [weightScaleIDOutFilter, setWeightScaleIDOutFilter] = useState("");
  const [sequenceWeightInFilter, setSequenceWeightInFilter] = useState("");
  const [sequenceWeightOutFilter, setSequenceWeightOutFilter] = useState("");
  const [weightDateInFilter, setWeightDateInFilter] = useState("");
  const [weightTimeInFilter, setWeightTimeInFilter] = useState("");
  const [weightDateOutFilter, setWeightDateOutFilter] = useState("");
  const [weightTimeOutFilter, setWeightTimeOutFilter] = useState("");
  const [carRegisterFilter, setCarRegisterFilter] = useState("");
  const [weightTypeIDFilter, setWeightTypeIDFilter] = useState("");
  const [customerIDFilter, setCustomerIDFilter] = useState("");
  const [productIDFilter, setProductIDFilter] = useState("");
  const [transporterIDFilter, setTransporterIDFilter] = useState("");
  const [driverIDFilter, setDriverIDFilter] = useState("");
  const [RFIDTagIDFilter, setRFIDTagIDFilter] = useState("");
  const [FlagStatusFilter, setFlagStatusFilter] = useState("");
  const [FlagCancelFilter, setFlagCancelFilter] = useState("");
  const [FlagPaymentFilter, setFlagPaymentFilter] = useState(""); */

  //filterKey คือตัวเลข
  const handleCheckbox = (i) => {
    setFilters2((prevFilters2) => {
      //console.log("i: ", i);
      const updatedFilters = [...prevFilters2];
      //console.log("updatedFilters: ", updatedFilters);
      updatedFilters[i] = {
        ...updatedFilters[i],
        Filter: !updatedFilters[i].Filter,
      };
      return updatedFilters;
    });
  };

  const handleText = (index, fromorto, newValue) => {
    console.log("fromorto: ", fromorto, newValue);
    if (fromorto === "From") {
      setFilters2((prevFilters2) => {
        const updatedFilters = [...prevFilters2];
        console.log("updatedFilters: ", updatedFilters);
        updatedFilters[index] = {
          ...updatedFilters[index],
          From: newValue,
          //fromorto: !updatedFilters[index].fromorto,
        };
        return updatedFilters;
      });
    } else if (fromorto === "To") {
      setFilters2((prevFilters2) => {
        const updatedFilters = [...prevFilters2];
        console.log("updatedFilters: ", updatedFilters);
        updatedFilters[index] = {
          ...updatedFilters[index],
          To: newValue,
          //fromorto: !updatedFilters[index].fromorto,
        };
        return updatedFilters;
      });
    }
  };

  //datas.map((datas) => console.log(datas.WeightTypeID, datas.WeightTypeName));

  const renderSwitch = (
    typeinput,
    filter,
    value,
    index,
    fromorto,
    tablename
  ) => {
    //console.log("index:value: ", index, value);
    //console.log("tablename: ", tablename);
    switch (typeinput) {
      case "text":
        return (
          <>
            {fromorto === "From" && (
              <InputText
                disabled={filter ? false : true}
                className="w-[100%]"
                value={filters2[index].From}
                onChange={(e) => handleText(index, fromorto, e.target.value)}
              />
            )}

            {fromorto === "To" && (
              <InputText
                disabled={filter ? false : true}
                className="w-[100%]"
                value={filters2[index].To}
                onChange={(e) => handleText(index, fromorto, e.target.value)}
              />
            )}
          </>
        );
      case "calendar":
        return (
          <>
            {fromorto === "From" && (
              <Calendar
                disabled={filter ? false : true}
                className="w-[100%]"
                showTime
                value={filters2[index].From}
                onChange={(e) => handleText(index, fromorto, e.value)}
                hourFormat="24"
                dateFormat="dd/mm/yy"
                showIcon
                showButtonBar
                onTodayButtonClick={true}
              />
            )}
            {fromorto === "To" && (
              <Calendar
                disabled={filter ? false : true}
                className="w-[100%]"
                showTime
                value={filters2[index].To}
                onChange={(e) => handleText(index, fromorto, e.value)}
                hourFormat="24"
                dateFormat="dd/mm/yy"
                showIcon
                showButtonBar
                onTodayButtonClick={true}
              />
            )}
          </>
        );
      case "dropdown":
        return (
          <>
            {fromorto === "From" && (
              <Dropdown
                disabled={filter ? false : true}
                className="w-[100%]"
                value={filters2[index].From}
                onChange={(e) => handleText(index, fromorto, e.value)}
                options={
                  tablename === "weighttype"
                    ? dataWeighttypes.map((data) => ({
                        value: data.WeightTypeID,
                        label: data.WeightTypeID + " : " + data.WeightTypeName,
                      }))
                    : tablename === "customer"
                    ? dataCustomers.map((data) => ({
                        value: data.CustomerID,
                        label: data.CustomerID + " : " + data.CustomerName,
                      }))
                    : tablename === "product"
                    ? dataProducts.map((data) => ({
                        value: data.ProductID,
                        label: data.ProductID + " : " + data.ProductName,
                      }))
                    : tablename === "transporter"
                    ? dataTransporters.map((data) => ({
                        value: data.TransporterID,
                        label:
                          data.TransporterID + " : " + data.TransporterName,
                      }))
                    : tablename === "driver"
                    ? dataDrivers.map((data) => ({
                        value: data.DriverID,
                        label: data.DriverID + " : " + data.DriverName,
                      }))
                    : [] // Add more cases as needed
                }
                placeholder="Select a Country"
                filter
                showClear
              />
            )}
            {fromorto === "To" && (
              <Dropdown
                disabled={filter ? false : true}
                className="w-[100%]"
                value={filters2[index].To}
                onChange={(e) => handleText(index, fromorto, e.value)}
                options={
                  tablename === "weighttype"
                    ? dataWeighttypes.map((data) => ({
                        value: data.WeightTypeID,
                        label: data.WeightTypeID + " : " + data.WeightTypeName,
                      }))
                    : tablename === "customer"
                    ? dataCustomers.map((data) => ({
                        value: data.CustomerID,
                        label: data.CustomerID + " : " + data.CustomerName,
                      }))
                    : tablename === "product"
                    ? dataProducts.map((data) => ({
                        value: data.ProductID,
                        label: data.ProductID + " : " + data.ProductName,
                      }))
                    : tablename === "transporter"
                    ? dataTransporters.map((data) => ({
                        value: data.TransporterID,
                        label:
                          data.TransporterID + " : " + data.TransporterName,
                      }))
                    : tablename === "driver"
                    ? dataDrivers.map((data) => ({
                        value: data.DriverID,
                        label: data.DriverID + " : " + data.DriverName,
                      }))
                    : [] // Add more cases as needed
                }
                placeholder="Select a Country"
                filter
                showClear
              />
            )}
          </>
        );
      case "Singledropdown":
        return (
          <>
            {fromorto === "From" && (
              <Dropdown
                className="w-[100%] ml-[61px]"
                value={filters2[index].Filter}
                onChange={(e) => handleCheckbox(index, fromorto, e.value)}
                options={[
                  { show: "ใช่", value: true },
                  { show: "ไม่", value: false },
                ].map((data) => ({
                  value: data.value,
                  label: data.show,
                }))}
                placeholder="Select a Country"
                showClear
              />
            )}
          </>
        );
      default:
        return null;
    }
  };

  const [activeIndex, setActiveIndex] = useState();

  const onClickClose = () => {
    if (activeIndex.length === 0) {
      // If no tabs are open, open all tabs
      setActiveIndex([0, 1, 2]);
    } else {
      // If any tabs are open, close all tabs
      setActiveIndex([]);
    }
  };

  const handleSearch = () => {
    console.log("Data Search: ", filters2);
  };

  return (
    <div>
      <Accordion
        className="mt-2"
        activeIndex={activeIndex}
        onTabChange={(e) => setActiveIndex(e.index)}
      >
        <AccordionTab
          header="ค้นหา"
          pt={{
            headerAction: "bg-sky-200 hover:bg-sky-300 ",
          }}
        >
          <div className="">
            <div className="flex flex-col align-items-center">
              {filters2.map((e, i) => (
                // eslint-disable-next-line react/jsx-key
                <div key={i} className="flex flex-col md:flex-row">
                  <div className="flex">
                    {e.Typeinput === "Singledropdown" ? (
                      <label
                        onClick={() => handleCheckbox(i)}
                        className="ml-[37px] self-center min-w-[8rem] cursor-pointer"
                      >
                        {e.Title}
                      </label>
                    ) : (
                      <>
                        <Checkbox
                          className={"scale-150 cursor-pointer"}
                          onChange={() => handleCheckbox(i)}
                          checked={e.Filter}
                        />
                        <label
                          onClick={() => handleCheckbox(i)}
                          className="self-center min-w-[8rem] cursor-pointer"
                        >
                          {e.Title}
                        </label>
                      </>
                    )}
                  </div>
                  {e.Typeinput === "Singledropdown" ||
                  e.Typeinput === "" ? null : (
                    <label className="self-start md:self-center md:ml-4 mr-2">
                      ตั้งแต่
                    </label>
                  )}

                  {renderSwitch(
                    e.Typeinput,
                    e.Filter,
                    e.Value,
                    i,
                    "From",
                    e.Tablename
                  )}
                  {e.Typeinput === "Singledropdown" ||
                  e.Typeinput === "" ? null : (
                    <label className="self-start md:self-center md:mx-2">
                      ถึง
                    </label>
                  )}

                  {renderSwitch(
                    e.Typeinput,
                    e.Filter,
                    e.Value,
                    i,
                    "To",
                    e.Tablename
                  )}
                </div>
              ))}
              <div className="flex justify-end gap-2">
                <Button
                  className=" p-2 w-24 h-10"
                  label="ค้นหา"
                  icon="pi pi-search"
                  onClick={handleSearch}
                />
                <Button
                  className=" p-2 w-24 h-10"
                  severity="danger"
                  label="ปิด"
                  icon="pi pi-times"
                  onClick={onClickClose}
                />
              </div>
            </div>
          </div>
        </AccordionTab>
      </Accordion>
    </div>
  );
}

export default AppSearch;
