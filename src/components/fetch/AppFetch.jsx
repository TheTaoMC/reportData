import { useState, useEffect, useRef } from "react"
import { DataTable } from "primereact/datatable"
import { Column } from "primereact/column"
import fetchData from "./FetchData"
import header from "./HeaderBtn"

function AppFetch({
  title,
  sortField,
  fetchDataURL,
  delDataURL,
  addDataURL,
  editDataURL,
  fetchDataBody,
  delDataBody,
  addDataBody,
  editDataBody,
  columns = [],
  minWidth,
  selectedlistOut,
  child,
  resetState,
  setState,
}) {
  //console.log("selectedlistOut ", selectedlistOut)
  //console.log("singlefetchDataURL:AppFetch: ", singlefetchDataURL)
  //console.log("resetState:AppFetch: ", resetState)
  //console.log("pops AppFetch: ", addDataURL, addDataBody);
  //console.log("AppFetch: ", child);
  const [Datas, setDatas] = useState([])
  const [selectedlist, setSelectedlist] = useState(null)
  const dt = useRef(null)
  //console.log("selectedlist:AppFetch:", selectedlist)
  //console.log(delDataBody);

  const fetchdata = async () => {
    try {
      await fetchData(fetchDataURL, fetchDataBody, setDatas)
    } catch (error) {
      console.error("Error deleting data:", error)
      throw error // ให้เรียก throw error เพื่อให้ catch ใน caller จัดการ
    }
  }

  //load Data
  useEffect(() => {
    fetchdata()
    //console.log("load Data")
  }, [])

  const funheader = () => {
    //console.log("resetState:AppFetch: ", resetState)
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
      editDataURL,
      editDataBody,
      resetState,
      setState
    )
  }

  return (
    <>
      <div className="max-w-[95%] mx-auto">
        <div className="text-3xl font-bold flex justify-center my-2">
          {title}
        </div>
        <div className="card">
          <DataTable
            //tableClassName="text-red-500"
            //className="text-red-500"
            sortField={sortField}
            sortOrder={1}
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
              setSelectedlist(e.value)
              selectedlistOut(e.value)
            }}
            dataKey="DataID"
            metaKeySelection={true}
          >
            {columns.map((e, i) => (
              <Column
                key={i}
                field={e.field}
                header={e.header}
                sortable
              ></Column>
            ))}
          </DataTable>
        </div>
      </div>
    </>
  )
}

export default AppFetch
