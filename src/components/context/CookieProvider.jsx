import React, { createContext, useContext, useState } from "react";

const DataContext = createContext();

function CookieProvider() {
  return <div>ContextCookie</div>;
}

export default CookieProvider;
