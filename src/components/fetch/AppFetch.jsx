import { useState, useEffect, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primeicons/primeicons.css";
import fetchData from "./FetchData";
import header from "./HeaderBtn";

function AppFetch({
  title = "title",
  columns = [],
  fetchDataURL = "",
  delDataURL = "",
  addDataURL = "",
  singlefetchDataURL = "",
  fetchDataBody = {},
  delDataBody = {},
  addDataBody = {},
  minWidth = "100rem",
  selectedlistOut,
  child,
  resetform,
}) {
  //console.log("pops AppFetch: ", addDataURL, addDataBody);
  //console.log("AppFetch: ", child);
  const [Datas, setDatas] = useState([]);
  const [selectedlist, setSelectedlist] = useState(null);
  const dt = useRef(null);
  //console.log(selectedlist);
  //console.log(delDataBody);

  //fetchData
  /*   const fetchData = async () => {
    try {
      const response = await fetch(fetchDataURL, fetchDataBody);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      if (response.ok) {
        const data = await response.json(); // แปลง response เป็น JSON
        await setDatas(data);
        //console.log("Data from the server:", data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }; */

  const fetchdata = async () => {
    try {
      await fetchData(fetchDataURL, fetchDataBody, setDatas);
    } catch (error) {
      console.error("Error deleting data:", error);
      throw error; // ให้เรียก throw error เพื่อให้ catch ใน caller จัดการ
    }
  };

  //load Data
  useEffect(() => {
    fetchdata();
    console.log("load Data");
  }, []);

  //delData
  /*   const delData = async () => {
    try {
      // ตรวจสอบว่า selectedlist มีค่าหรือไม่
      if (!selectedlist) {
        console.log("ไม่ได้เลือกข้อมูล กรุณาเลือกข้อมูลที่ต้องการลบ");
        // คุณอาจต้องแสดงข้อความไปยังผู้ใช้ทาง UI ด้วย
        return;
      }

      // ทำ HTTP POST request ไปยัง URL ที่กำหนด
      const response = await fetch(delDataURL, delDataBody);

      // ตรวจสอบว่าการเชื่อมต่อกับเซิร์ฟเวอร์เป็นไปตามปกติหรือไม่
      if (!response.ok) {
        // หากไม่ปกติ ให้ throw ข้อผิดพลาด
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // สมมติว่าเซิร์ฟเวอร์ตอบกลับด้วยข้อมูลหลังจากการลบ
      const data = await response.json();
      await console.log(data);
      await setSelectedlist(null);
      await fetchData();
      return data;

      // ประมวลผลข้อมูลตามที่ต้องการ เช่น อัปเดต state หรือ UI
      //await setWeightDatas(data);

      // ล็อกข้อมูลที่ได้จากเซิร์ฟเวอร์
      // console.log("ข้อมูลจากเซิร์ฟเวอร์:", data);
    } catch (error) {
      // ถ้ามีข้อผิดพลาดในขณะทำงาน ให้ล็อกไว้
      console.error("เกิดข้อผิดพลาดในการลบข้อมูล:", error);
    }
  }; */

  /*   const del = async () => {
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
  }; */

  //const toast = useRef(null);

  /*   const accept = () => {
    del().then((deletedData) => {
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
    });
  }; */
  /*   const accept = async () => {
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
  }; */

  /*   const reject = () => {
    toast.current.show({
      severity: "warn",
      summary: "แจ้งเตือน",
      detail: "ยกเลิก",
      life: 3000,
    });
  }; */

  /*   const confirmdel = () => {
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
  }; */

  //Export CSV Pdf
  /*   const exportCSV = (selectionOnly) => {
    dt.current.exportCSV({ selectionOnly });
  }; */

  /*   const exportPdf = () => {
    import("jspdf").then((jsPDF) => {
      import("jspdf-autotable").then(() => {
        const doc = new jsPDF.default(0, 0);

        doc.autoTable(exportColumns, Datas);
        doc.save("weightDatas.pdf");
      });
    });
  }; */

  /*   const exportColumns = columns.map((col) => ({
    title: col.header,
    dataKey: col.field,
  })); */

  //visible Dialog
  /*   const handleClick = () => {
    if (!visible) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }; */

  /*   const header = (
    <div className="flex sm:flex-row flex-col  sm:align-items-center items-center justify-between gap-2">
      <Toast ref={toast} />
      <ConfirmDialog className="text-6xl border border-gray-950" />
      <div className="flex sm:flex-row flex-col gap-2">
        <Button
          className="bg-cyan-700 hover:bg-cyan-800 p-2 w-24 h-12"
          label="Add"
          onClick={handleClick}
        />
        <AddData VisibleIn={visible} VisibleOut={handleClick} />
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
        <Button
          className="bg-red-700 hover:bg-red-800 p-2 w-24 h-12"
          label="Delete"
          icon="pi pi-times"
          onClick={del}
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
  ); */

  const funheader = () => {
    return header(
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
      singlefetchDataURL,
      resetform
    );
  };

  return (
    <>
      <div className="max-w-[95%] mx-auto">
        <div className="text-3xl font-bold flex justify-center my-2">
          {title}
        </div>
        <div className="card">
          <DataTable
            value={Datas}
            header={funheader}
            ref={dt}
            size="Small"
            showGridlines
            stripedRows
            paginator
            rows={5}
            rowsPerPageOptions={[5, 10, 25, 50]}
            removableSort
            scrollable
            scrollHeight={window.innerHeight - 250}
            tableStyle={{ minWidth: minWidth }}
            //selection
            selectionMode="single"
            selection={selectedlist}
            onSelectionChange={(e) => {
              setSelectedlist(e.value);
              selectedlistOut(e.value);
            }}
            dataKey="DataID"
            metaKeySelection={true}
          >
            {columns.map((e, i) => (
              <Column
                key={i}
                field={e.field}
                header={e.header}
                //style={{ width: "50%" }}
                sortable
              ></Column>
            ))}
          </DataTable>
        </div>
      </div>
    </>
  );
}

export default AppFetch;
