import React, { useRef, useState } from "react"
import { Button } from "primereact/button"
import { ConfirmDialog } from "primereact/confirmdialog"
import { confirmDialog } from "primereact/confirmdialog"
import { Toast } from "primereact/toast"
import "primeicons/primeicons.css"
import AddData from "../AddData"
import delData from "./DelData"
import addData from "./AddData"
import AppFetch from "./AppFetch"
import fetchData from "./FetchData"
import editData from "./EditData"

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
  editDataURL,
  editDataBody,
  resetState,
  setState
) => {
  //console.log("selectedlist1?? ", selectedlist)
  //console.log("resetState:header: ", resetState)
  const [visibleAdd, setVisibleAdd] = useState(false)
  const [visibleEdit, setVisibleEdit] = useState(false)
  //console.log(setSelectedlist);

  //บันทึกข้อมูล
  const add = async () => {
    try {
      const data = await addData(addDataURL, addDataBody, fetchdata)
      //console.log("typeof fetchdata : ", typeof fetchdata);

      console.log("add data?????? ", data)
      if (data) {
        await toast.current.show({
          severity: "info",
          summary: "แจ้งเตือน",
          detail: "เพิ่มข้อมูลเรียบร้อย",
          life: 3000,
        })

        resetState()
      } else {
        await toast.current.show({
          severity: "warn",
          summary: "แจ้งเตือน",
          detail: "ข้อมูลไม่ถูกต้อง",
          life: 3000,
        })
      }
    } catch (error) {
      console.error("Error: ", error)
      throw error // ให้เรียก throw error เพื่อให้ catch ใน caller จัดการ
    }
  }

  //แก้ไข
  /*   const edit = async () => {
    try {
      const data = await fetchData(singlefetchDataURL, fetchDataBody, setDatas)
    } catch (error) {
      console.error("Error deleting data:", error)
      throw error // ให้เรียก throw error เพื่อให้ catch ใน caller จัดการ
    }
  } */
  const edit = async () => {
    try {
      const data = await editData(
        editDataURL,
        editDataBody,
        setSelectedlist,
        fetchdata,
        selectedlist
      )
      console.log("data:data", data)
      if (data) {
        await toast.current.show({
          severity: "info",
          summary: "แจ้งเตือน",
          detail: "แก้ไขข้อมูลเรียบร้อย",
          life: 3000,
        })
        resetState()
        setVisibleEdit(false)
      } else {
        await toast.current.show({
          severity: "warn",
          summary: "แจ้งเตือน",
          detail: "ข้อมูลไม่ถูกต้อง",
          life: 3000,
        })
      }
    } catch (error) {
      console.error("Error deleting data:", error)
      throw error // ให้เรียก throw error เพื่อให้ catch ใน caller จัดการ
    }
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
      )
    } catch (error) {
      console.error("Error deleting data:", error)
      throw error // ให้เรียก throw error เพื่อให้ catch ใน caller จัดการ
    }
  }

  const toast = useRef(null)
  const accept = async () => {
    try {
      const deletedData = await del()
      if (deletedData) {
        toast.current.show({
          severity: "info",
          summary: "แจ้งเตือน",
          detail: "ลบข้อมูลเรียบร้อย",
          life: 3000,
        })
      } else {
        toast.current.show({
          severity: "warn",
          summary: "แจ้งเตือน",
          detail: "กรุณาเลือกข้อมูล",
          life: 3000,
        })
      }
    } catch (error) {
      // จัดการ error ที่เกิดขึ้นในการลบข้อมูล
      console.error("Error deleting data:", error)
    }
  }

  const reject = () => {
    toast.current.show({
      severity: "warn",
      summary: "แจ้งเตือน",
      detail: "ยกเลิก",
      life: 3000,
    })
  }

  const confirmdel = () => {
    if (!selectedlist) {
      console.log("ไม่ได้เลือกข้อมูล กรุณาเลือกข้อมูลที่ต้องการลบ")
      // คุณอาจต้องแสดงข้อความไปยังผู้ใช้ทาง UI ด้วย
      toast.current.show({
        severity: "warn",
        summary: "แจ้งเตือน",
        detail: "ไม่ได้เลือกข้อมูล กรุณาเลือกข้อมูลที่ต้องการลบ",
        life: 3000,
      })
      return
    }
    confirmDialog({
      message: "Do you want to delete this record?",
      header: "Delete Confirmation",
      icon: "pi pi-info-circle",
      acceptClassName: "bg-red-700 hover:bg-red-800",
      rejectClassName: "",
      accept,
      reject,
    })
  }

  //Export CSV Pdf
  const exportCSV = (selectionOnly) => {
    dt.current.exportCSV({ selectionOnly })
  }

  const exportPdf = () => {
    import("jspdf").then((jsPDF) => {
      import("jspdf-autotable").then(() => {
        const doc = new jsPDF.default(0, 0)

        doc.autoTable(exportColumns, Datas)
        doc.save("weightDatas.pdf")
      })
    })
  }

  const exportColumns = columns.map((col) => ({
    title: col.header,
    dataKey: col.field,
  }))

  //visible Dialog Add/Edit
  const handleClickAdd = () => {
    if (!visibleAdd) {
      setVisibleAdd(true)
      resetState()
    } else {
      setVisibleAdd(false)
    }
  }

  const handleClickEdit = () => {
    if (!selectedlist) {
      console.log("ไม่ได้เลือกข้อมูล กรุณาเลือกข้อมูลที่ต้องการแก้ไข")
      // คุณอาจต้องแสดงข้อความไปยังผู้ใช้ทาง UI ด้วย
      toast.current.show({
        severity: "warn",
        summary: "แจ้งเตือน",
        detail: "ไม่ได้เลือกข้อมูล กรุณาเลือกข้อมูลที่ต้องการแก้ไข",
        life: 3000,
      })
      return
    }

    if (!visibleEdit) {
      setVisibleEdit(true)
      setState()
    } else {
      setVisibleEdit(false)
    }
  }

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
          VisibleIn={visibleAdd}
          VisibleOut={handleClickAdd}
          SaveOut={add}
          child={child}
          title={"เพิ่มข้อมูล"}
        />

        <Button
          className="bg-cyan-700 hover:bg-cyan-800 p-2 w-24 h-12"
          label="Edit"
          onClick={handleClickEdit}
        />
        <AddData
          VisibleIn={visibleEdit}
          VisibleOut={handleClickEdit}
          SaveOut={edit}
          child={child}
          title={"แก้ไข"}
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
  )
}

export default header
