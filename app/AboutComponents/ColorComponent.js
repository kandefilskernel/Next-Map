"use client"
import React from 'react'
import  { useState } from "react";

export default function ColorComponent() {
  const[chosenColor, setChosenCoolor] = useState("green");
  function ToggleColor(){
    setChosenCoolor(chosenColor=== "green" ? "blue" : "green");
  }
  return (
    <>
      <h1 style={{color: chosenColor, fontSize:"2rem"}}>
         This is the About Page
      </h1>
      <button onClick={ToggleColor} className="bg-black text-white">Change Color</button>
  </>
  )
}
