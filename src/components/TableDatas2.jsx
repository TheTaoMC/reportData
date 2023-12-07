import { useState, useEffect, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { jsPDF } from "jspdf";
import "primereact/resources/themes/lara-light-cyan/theme.css";

import "primeicons/primeicons.css";

const TableData2 = () => {
  const [weightDatas, setWeightDatas] = useState([]);
  const [selectedlist, setSelectedlist] = useState(null);
  const dt = useRef(null);
  //console.log(weightDatas);
  //console.log(selectedlist);

  const columns1 = [
    "WeightTimeIn",
    "WeightTimeOut",
    "CarRegister",
    "CustomerID",
    "CustomerName",
    "ProductID",
    "ProductName",
    "Remark1",
    "Remark2",
    "Remark3",
    "Remark4",
    "WeightIn",
    "WeightOut",
    "Weight",
    "WeightNet",
  ];

  const columns = [
    {
      field: "WeightTimeIn",
      header: "WeightTimeIn",
    },
    {
      field: "WeightTimeOut",
      header: "WeightTimeOut",
    },
    {
      field: "CarRegister",
      header: "CarRegister",
    },
    {
      field: "CustomerID",
      header: "CustomerID",
    },
    {
      field: "CustomerName",
      header: "CustomerName",
    },
    {
      field: "ProductID",
      header: "ProductID",
    },
    {
      field: "ProductName",
      header: "ProductName",
    },
    {
      field: "Remark1",
      header: "Remark1",
    },
    {
      field: "Remark2",
      header: "Remark2",
    },
    {
      field: "Remark3",
      header: "Remark3",
    },
    {
      field: "Remark4",
      header: "Remark4",
    },
    {
      field: "WeightIn",
      header: "WeightIn",
    },
    {
      field: "WeightOut",
      header: "WeightOut",
    },
    {
      field: "Weight",
      header: "Weight",
    },
    {
      field: "WeightNet",
      header: "WeightNet",
    },
  ];

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://theotesteng.000webhostapp.com/API/api/weightreport/read.php",
        {
          method: "POST",
          body: JSON.stringify({
            WeightDateOutFilter: true,
            WeightDateOutFrom: "2021-01-01",
            WeightDateOutTo: "2023-12-31",
          }),
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      if (response.ok) {
        const data = await response.json(); // แปลง response เป็น JSON
        await setWeightDatas(data);
        //console.log("Data from the server:", data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const exportCSV = (selectionOnly) => {
    dt.current.exportCSV({ selectionOnly });
  };

  const exportPdf = () => {
    import("jspdf").then((jsPDF) => {
      import("jspdf-autotable").then(() => {
        const doc = new jsPDF.default(0, 0);

        doc.autoTable(exportColumns, weightDatas);
        doc.save("weightDatas.pdf");
      });
    });
  };

  const exportColumns = columns.map((col) => ({
    title: col.header,
    dataKey: col.field,
  }));
  const header = (
    <div className="flex sm:flex-row flex-col  sm:align-items-center items-center justify-between gap-2">
      <div className="flex sm:flex-row flex-col gap-2">
        <Button
          className="bg-cyan-300 hover:bg-cyan-400 p-2 w-24 h-12"
          label="Add"
        />
        <Button
          className="bg-cyan-300 hover:bg-cyan-400 p-2 w-24 h-12"
          label="Edit"
        />
        <Button
          className="bg-cyan-300 hover:bg-cyan-400 p-2 w-24 h-12"
          label="Delete"
        />
      </div>
      <div className="flex sm:flex-row flex-col gap-2">
        <Button
          className="bg-cyan-300 hover:bg-cyan-400 p-2 w-24 rounded-md "
          type="button"
          icon="pi pi-file-pdf"
          severity="warning"
          rounded
          onClick={exportPdf}
          data-pr-tooltip="PDF"
        />
        <Button
          className="bg-cyan-300 hover:bg-cyan-400 p-2 w-24 rounded-md"
          type="button"
          icon="pi pi-file"
          rounded
          onClick={() => exportCSV(false)}
          data-pr-tooltip="CSV"
        />
      </div>
    </div>
  );
  return (
    <>
      <div className="max-w-[95%] mx-auto">
        <div className="text-3xl font-bold flex justify-center my-2">
          รายงาน
        </div>
        <div className="card">
          <DataTable
            value={weightDatas}
            header={header}
            ref={dt}
            size="Small"
            showGridlines
            stripedRows
            paginator
            rows={5}
            rowsPerPageOptions={[5, 10, 25, 50]}
            removableSort
            scrollable
            scrollHeight={window.innerHeight - 200}
            tableStyle={{ minWidth: "200rem" }}
            //selection
            selectionMode="single"
            selection={selectedlist}
            onSelectionChange={(e) => setSelectedlist(e.value)}
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
};

export default TableData2;
