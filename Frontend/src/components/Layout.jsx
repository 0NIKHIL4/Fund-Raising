import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Base from "./base";
import { ToastContainer } from 'react-toastify';

import { BiconomyProvider } from "./Hooks/Connection";
import { UseAlchemy } from "./Hooks/Connection";

import Nav from "./nav";
const Layout = () => {
  const {Account,smartAccountAddress,provider, handleLogin} = UseAlchemy();
  
  return (
    
    <div>
      <Nav/>
      <ToastContainer/>
      <Outlet />
    </div>  
    
  );
};

export default Layout;