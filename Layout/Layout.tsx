import Navbar from "@/Components/Navbar";
import { Toolbar } from "@mui/material";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <Toolbar />
      {children}
    </>
  );
}
