import React, { useRef } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Menu } from "primereact/menu"
import { Button } from "primereact/button"

function AppNavber() {
  const navigate = useNavigate()
  const menuData = useRef(null)
  const menuReport = useRef(null)
  const datamenuItems = [
    {
      label: "Weighttype",
      //icon: "pi pi-plus",
      command: () => {
        navigate("/Weighttype")
      },
    },
    {
      label: "Customer",
      //icon: "pi pi-fw pi-pencil",
      command: () => {
        navigate("/Customer")
      },
    },
    {
      label: "Product",
      //icon: "pi pi-times",
      command: () => {
        navigate("/Product")
      },
    },
    {
      label: "Driver",
      //icon: "pi pi-times",
      command: () => {
        navigate("/Driver")
      },
    },
    {
      label: "Transporter",
      command: () => {
        navigate("/Transporter")
      },
      //icon: "pi pi-times",
    },
    {
      label: "Weight",
      command: () => {
        navigate("/Weight")
      },
      //icon: "pi pi-times",
    },
  ]
  const reportmenuItems = [
    {
      label: "Weighttype",
      //icon: "pi pi-plus",
      command: () => {
        navigate("/Weighttype")
      },
    },
    {
      label: "Customer",
      //icon: "pi pi-fw pi-pencil",
      command: () => {
        navigate("/Customer")
      },
    },
    {
      label: "Product",
      //icon: "pi pi-times",
      command: () => {
        navigate("/Product")
      },
    },
    {
      label: "Driver",
      //icon: "pi pi-times",
      command: () => {
        navigate("/Driver")
      },
    },
    {
      label: "Transporter",
      command: () => {
        navigate("/Transporter")
      },
      //icon: "pi pi-times",
    },
    {
      label: "WeightReport",
      command: () => {
        navigate("/WeightReport")
      },
      //icon: "pi pi-times",
    },
  ]
  return (
    <div className="flex flex-wrap gap-2 justify-center p-2 bg-cyan-700 text-gray-200 text-lg">
      <div className="flex  self-start gap-2">
        <Button
          label="Main"
          icon="pi pi-home"
          className="p-2 w-24 h-12"
          onClick={() => navigate("/Weighttype")}
          aria-controls="popup_menu_left"
          aria-haspopup
        />
        <Menu model={datamenuItems} popup ref={menuData} id="popup_menu_left" />
        <Button
          label="Data"
          icon="pi pi-server"
          className="p-2 w-24 h-12"
          onClick={(event) => menuData.current.toggle(event)}
          aria-controls="popup_menu_left"
          aria-haspopup
        />
        <Menu
          model={reportmenuItems}
          popup
          ref={menuReport}
          id="popup_menu_left"
        />
        <Button
          label="Report"
          icon="pi pi-tablet"
          className="p-2 w-24 h-12"
          onClick={(event) => menuReport.current.toggle(event)}
          aria-controls="popup_menu_left"
          aria-haspopup
        />
        <Button
          label="LogOut"
          icon="pi pi-home"
          className="p-2 w-24 h-12"
          onClick={() => navigate("/Logout")}
          aria-controls="popup_menu_left"
          aria-haspopup
        />
      </div>
      {/* <Link
        className="border rounded-lg bg-cyan-700 hover:bg-cyan-800 p-1"
        to="/"
      >
        Main
      </Link> */}
    </div>
  )
}

export default AppNavber
