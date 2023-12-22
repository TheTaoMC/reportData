import React, { useState } from "react";
import { Checkbox } from "@material-tailwind/react";
import { Accordion, AccordionTab } from "primereact/accordion";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";

function AppSearch() {
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

  /* const [filters2, setFilters2] = useState([
    {
      WeightScaleIDInTitle: "เครื่องชั่งขาเข้า",
      WeightScaleIDInFilter: false,
      WeightScaleIDInTypeinput: "text",
    },
    {
      WeightScaleIDOuTtitle: "เครื่องชั่งขาออก",
      WeightScaleIDOutFilter: false,
      WeightScaleIDInTypeinput: "text",
    },
    {
      WeightTimeInTitle: "เวลาชั่งเข้า",
      WeightTimeInFilter: false,
      WeightTimeInTypeinput: "calendar",
    },
    {
      WeightTimeOutTitle: "เวลาชั่งออก",
      WeightTimeOutFilter: false,
      WeightTimeOutTypeinput: "calendar",
    },
    {
      WeightTypeIDTitle: "เวลาชั่งออก",
      WeightTypeIDFilte: false,
      WeightTypeIDTypeinput: "combobox",
    },
  ]); */

  const [filters2, setFilters2] = useState([
    {
      Title: "เครื่องชั่งขาเข้า",
      Filter: false,
      Typeinput: "text",
      From: "IN1",
      To: "IN1",
    },
    {
      Title: "เครื่องชั่งขาออก",
      Filter: false,
      Typeinput: "text",
      From: "Out1",
      To: "Out1",
    },
    {
      Title: "เวลาชั่งเข้า",
      Filter: false,
      Typeinput: "calendar",
      From: "",
      To: "",
    },
    {
      Title: "เวลาชั่งออก",
      Filter: true,
      Typeinput: "text",
      From: "",
      To: "",
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
      Typeinput: "calendar",
      From: "",
      To: "",
    },
    {
      Title: "ประเภทชั่ง",
      Filter: false,
      Typeinput: "dropdown",
      From: "",
      To: "",
    },
    {
      Title: "คู่ค้า",
      Filter: false,
      Typeinput: "dropdown",
      From: "",
      To: "",
    },
    {
      Title: "สินค้า",
      Filter: false,
      Typeinput: "dropdown",
      From: "",
      To: "",
    },
    {
      Title: "ผู้ขนส่ง",
      Filter: false,
      Typeinput: "dropdown",
      From: "",
      To: "",
    },
    {
      Title: "พนักงานขับรถ",
      Filter: false,
      Typeinput: "dropdown",
      From: "",
      To: "",
    },
    {
      Title: "สถานะการยกเลิก",
      Filter: false,
      Typeinput: "dropdown",
      From: "",
      To: "",
    },
    {
      Title: "แสดงรถชั่งเสร็จ",
      Filter: false,
      Typeinput: "dropdown",
      From: "",
      To: "",
    },
    {
      Title: "แสดงงรถค้างชั่ง",
      Filter: false,
      Typeinput: "dropdown",
      From: "",
      To: "",
    },
  ]);

  //ดึงค่า WeightScaleIDInFilter
  console.log(filters2[2]);

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
    console.log("fromorto: ", fromorto);
    setFilters2((prevFilters2) => {
      const updatedFilters = [...prevFilters2];
      updatedFilters[index] = {
        ...updatedFilters[index],
        //fromorto: newValue,
        fromorto: !updatedFilters[index].fromorto,
      };
      return updatedFilters;
    });
  };

  const renderSwitch = (typeinput, filter, value, index, fromorto) => {
    console.log("value: ", value);
    console.log("index: ", index);
    switch (typeinput) {
      case "text":
        return (
          <InputText
            disabled={filter ? false : true}
            className="w-[100%]"
            value={value}
            onChange={(e) => handleText(index, fromorto, e.target.value)}
          />
        );
      case "calendar":
        return (
          <Calendar
            disabled={filter ? false : true}
            className="w-[100%]"
            //value={datetime24h}
            //onChange={(e) => setDateTime24h(e.value)}
            showTime
            hourFormat="24"
          />
        );
      case "dropdown":
        return (
          <Dropdown
            disabled={filter ? false : true}
            className="w-[100%]"
            //value={selectedCountry}
            //onChange={(e) => setSelectedCountry(e.value)}
            //options={countries}
            optionLabel="name"
            placeholder="Select a Country"
            filter
            //valueTemplate={selectedCountryTemplate}
            //itemTemplate={countryOptionTemplate}
          />
        );
      default:
        return <InputText value={""} onChange={""} />;
    }
  };

  return (
    <div>
      <Accordion className="mt-2">
        <AccordionTab header="ค้นหา">
          <div className="">
            <div className="flex flex-col align-items-center">
              {filters2.map((e, i) => (
                // eslint-disable-next-line react/jsx-key
                <div key={i} className="flex flex-col md:flex-row">
                  <div className="flex">
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
                  </div>

                  <label className="self-start md:self-center md:ml-4 mr-2">
                    ตั้งแต่
                  </label>
                  {renderSwitch(e.Typeinput, e.Filter, e.Value, i, "From")}
                  <label className="self-start md:self-center md:mx-2">
                    ถึง
                  </label>
                  {renderSwitch(e.Typeinput, e.Filter, e.Value, i, "To")}
                </div>
              ))}
            </div>
          </div>
        </AccordionTab>
      </Accordion>
    </div>
  );
}

export default AppSearch;
