import React from "react";
import { Link } from "react-router-dom";

function AppNavber() {
  return (
    <div className="flex gap-2 justify-center p-2 bg-cyan-700 text-gray-200 text-lg">
      <Link
        className="border rounded-lg bg-cyan-700 hover:bg-cyan-800 p-1"
        to="/"
      >
        Main
      </Link>
      <Link
        className="border rounded-lg bg-cyan-700 hover:bg-cyan-800 p-1"
        to="/login"
      >
        login
      </Link>
      <Link
        className="border rounded-lg bg-cyan-700 hover:bg-cyan-800 p-1"
        to="/weight"
      >
        Weight
      </Link>
      <Link
        className="border rounded-lg bg-cyan-700 hover:bg-cyan-800 p-1"
        to="/weightreport"
      >
        WeightRport
      </Link>
      <Link
        className="border rounded-lg bg-cyan-700 hover:bg-cyan-800 p-1"
        to="/tableData2"
      >
        TesttableData2
      </Link>
      <Link
        className="border rounded-lg bg-cyan-700 hover:bg-cyan-800 p-1"
        to="/customer"
      >
        Customer
      </Link>
      <Link
        className="border rounded-lg bg-cyan-700 hover:bg-cyan-800 p-1"
        to="/product"
      >
        Product
      </Link>
      <Link
        className="border rounded-lg bg-cyan-700 hover:bg-cyan-800 p-1"
        to="/weighttype"
      >
        Weighttype
      </Link>
      <Link
        className="border rounded-lg bg-cyan-700 hover:bg-cyan-800 p-1"
        to="/driver"
      >
        Driver
      </Link>
      <Link
        className="border rounded-lg bg-cyan-700 hover:bg-cyan-800 p-1"
        to="/transporter"
      >
        Transporter
      </Link>
    </div>
  );
}

export default AppNavber;
