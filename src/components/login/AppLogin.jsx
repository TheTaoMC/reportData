import React, { useRef, useState } from "react";
import AppNavber from "../navbar/AppNavber";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useNavigate } from "react-router-dom";
import { Toast } from "primereact/toast";

function AppLogin() {
  const navigate = useNavigate();
  const toast = useRef(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "admin" && password === "1234") {
      return navigate("/main");
    } else {
      //alert("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
      toast.current.show({
        severity: "error",
        summary: "Error",
        detail: "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง",
        life: 3000,
      });
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleLogin();
      // ทำสิ่งที่คุณต้องการทำเมื่อกดปุ่ม Enter
      console.log("Enter key pressed");
    }
  };
  return (
    <div>
      <Toast ref={toast} />
      <AppNavber title={"login"} />
      <div className="flex justify-center items-center h-[90vh]">
        <div className="sm:w-[30%] rounded-lg border-4 border-sky-500/50">
          <div className="p-2 text-xl antialiased font-semibold">
            เข้าสู่ระบบ
          </div>
          <div className="p-2 flex flex-col">
            <label htmlFor="username">ชื่อผู้ใช้</label>
            <InputText
              id="username"
              aria-describedby="username-help"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="p-2 flex flex-col">
            <label htmlFor="username">รหัสผ่าน</label>
            <InputText
              onKeyDown={handleKeyPress}
              id="username"
              aria-describedby="username-help"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="p-2">
            <Button className="w-full" label="เข้าสู่ระบบ" onClick={handleLogin} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppLogin;
