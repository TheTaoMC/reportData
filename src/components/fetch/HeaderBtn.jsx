import React, { useRef, useState } from "react";
import { Button } from "primereact/button";
import { ConfirmDialog } from "primereact/confirmdialog";
import { confirmDialog } from "primereact/confirmdialog";
import { Toast } from "primereact/toast";
import "primeicons/primeicons.css";
import AddData from "../AddData";
import delData from "./DelData";
import addData from "./AddData";

const header = (
  child,
  selectedlist,
  delDataURL,
  delDataBody,
  setSelectedlist,
  fetchdata,
  dt,
  Datas,
  columns,
  addDataURL,
  addDataBody,
  resetform
) => {
  //console.log("pops header: ", addDataURL, addDataBody);
  //console.log("header: ", child);
  const [visible, setVisible] = useState(false);
  //console.log(setSelectedlist);

  //บันทึกข้อมูล
  const add = async () => {
    try {
      const data = await addData(addDataURL, addDataBody, fetchdata);
      console.log("typeof fetchdata : ", typeof fetchdata);

      console.log("? ", data);
      if (data) {
        await toast.current.show({
          severity: "info",
          summary: "แจ้งเตือน",
          detail: "เพิ่มข้อมูลเรียบร้อย",
          life: 3000,
        });
        resetform();
      } else {
        await toast.current.show({
          severity: "warn",
          summary: "แจ้งเตือน",
          detail: "ข้อมูลไม่ถูกต้อง",
          life: 3000,
        });
        //resetform();
      }
    } catch (error) {
      console.error("Error deleting data:", error);
      throw error; // ให้เรียก throw error เพื่อให้ catch ใน caller จัดการ
    }
  };

  //แก้ไข
  const edit =async()=>{
    
  }

  //ลบข้อมูล
  const del = async () => {
    try {
      return await delData(
        delDataURL,
        delDataBody,
        setSelectedlist,
        fetchdata,
        selectedlist
      );
    } catch (error) {
      console.error("Error deleting data:", error);
      throw error; // ให้เรียก throw error เพื่อให้ catch ใน caller จัดการ
    }
  };

  const toast = useRef(null);
  const accept = async () => {
    try {
      const deletedData = await del();
      if (deletedData) {
        toast.current.show({
          severity: "info",
          summary: "แจ้งเตือน",
          detail: "ลบข้อมูลเรียบร้อย",
          life: 3000,
        });
      } else {
        toast.current.show({
          severity: "warn",
          summary: "แจ้งเตือน",
          detail: "กรุณาเลือกข้อมูล",
          life: 3000,
        });
      }
    } catch (error) {
      // จัดการ error ที่เกิดขึ้นในการลบข้อมูล
      console.error("Error deleting data:", error);
    }
  };

  const reject = () => {
    toast.current.show({
      severity: "warn",
      summary: "แจ้งเตือน",
      detail: "ยกเลิก",
      life: 3000,
    });
  };

  const confirmdel = () => {
    if (!selectedlist) {
      console.log("ไม่ได้เลือกข้อมูล กรุณาเลือกข้อมูลที่ต้องการลบ");
      // คุณอาจต้องแสดงข้อความไปยังผู้ใช้ทาง UI ด้วย
      toast.current.show({
        severity: "warn",
        summary: "แจ้งเตือน",
        detail: "ไม่ได้เลือกข้อมูล กรุณาเลือกข้อมูลที่ต้องการลบ",
        life: 3000,
      });
      return;
    }
    confirmDialog({
      message: "Do you want to delete this record?",
      header: "Delete Confirmation",
      icon: "pi pi-info-circle",
      acceptClassName: "bg-red-700 hover:bg-red-800",
      rejectClassName: "",
      accept,
      reject,
    });
  };

  //Export CSV Pdf
  const exportCSV = (selectionOnly) => {
    dt.current.exportCSV({ selectionOnly });
  };

  const exportPdf = () => {
    import("jspdf").then((jsPDF) => {
      import("jspdf-autotable").then(() => {
        const doc = new jsPDF.default(0, 0);

        doc.autoTable(exportColumns, Datas);
        doc.save("weightDatas.pdf");
      });
    });
  };

  const exportColumns = columns.map((col) => ({
    title: col.header,
    dataKey: col.field,
  }));

  //visible Dialog
  const handleClickAdd = () => {
    if (!visible) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  return (
    <div className="flex sm:flex-row flex-col  sm:align-items-center items-center justify-between gap-2">
      <Toast ref={toast} />
      <ConfirmDialog className="text-6xl border border-gray-950" />
      <div className="flex sm:flex-row flex-col gap-2">
        <Button
          className="bg-cyan-700 hover:bg-cyan-800 p-2 w-24 h-12"
          label="Add"
          onClick={handleClickAdd}
        />
        <AddData
          VisibleIn={visible}
          VisibleOut={handleClickAdd}
          SaveOut={add}
          child={child}
          title={"เพิ่มข้อมูล"}
        />
        <Button
          className="bg-cyan-700 hover:bg-cyan-800 p-2 w-24 h-12"
          label="Edit"
        />
        <Button
          className="bg-red-700 hover:bg-red-800 p-2 w-24 h-12"
          label="Delete"
          icon="pi pi-times"
          onClick={confirmdel}
        />
      </div>
      <div className="flex sm:flex-row flex-col gap-2">
        <Button
          className="bg-cyan-700 hover:bg-cyan-800 p-2 w-24 rounded-md "
          type="button"
          icon="pi pi-file-pdf"
          severity="warning"
          rounded
          onClick={exportPdf}
          data-pr-tooltip="PDF"
        />
        <Button
          className="bg-cyan-700 hover:bg-cyan-800 p-2 w-24 rounded-md"
          type="button"
          icon="pi pi-file"
          rounded
          onClick={() => exportCSV(false)}
          data-pr-tooltip="CSV"
        />
      </div>
    </div>
  );
};

export default header;
