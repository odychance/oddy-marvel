import React, { useState } from 'react'
import axiosConfig from "../../axios/axiosConfig";
import { Navbar } from './Navbar';
import { Footer } from './Footer';

const Layout = ({children, infoMarvel, setInfoMarvel, setError}) => {

  document.addEventListener("DOMContentLoaded", axiosConfig({ setInfoMarvel, setError}))

  return (
    <div>
      <Navbar />
        {children}
      {/* <Footer /> */}
    </div>
  )
}

export { Layout }