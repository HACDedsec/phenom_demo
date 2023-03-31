import React, { useState } from "react";
import "./styleComponent.css";
import Dropdown from "react-bootstrap/Dropdown";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import DropdownButton from "react-bootstrap/DropdownButton";

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "First Year Sale",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [0, 10, 5, 2, 20, 30, 45],
    },
  ],
};
const data2 = {
  labels: labels,
  datasets: [
    {
      label: "Second Year Sale",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [0, 10, 5, 26, 20, 30, 45],
    },
  ],
};
const data3 = {
  labels: labels,
  datasets: [
    {
      label: "Third Year Sale",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [0, 10, 5, 2, 200, 30, 95],
    },
  ],
};

const SectionComponent = () => {
  const [value, setValue] = useState("");
  const handleSelect = (e) => {
    console.log(e);
    setValue(e);
  };

  return (
    <div className=" backgroundStyle ">
      <div className="firstDiv">
        <div className="text">
          <h2>Select a Year from dropdown</h2>
          &nbsp;
          <span>To see the sales overview</span>
          <DropdownButton
            alignRight
            title={(value && value) || "Select"}
            id="dropdown-menu-align-right"
            onSelect={handleSelect}
          >
            {value && value ? (
              <Dropdown.Item eventKey="Select">Select</Dropdown.Item>
            ) : (
              ""
            )}
            <Dropdown.Item eventKey="2020">2020</Dropdown.Item>
            <Dropdown.Item eventKey="2021">2021</Dropdown.Item>
            <Dropdown.Item eventKey="2022">2022</Dropdown.Item>
            <Dropdown.Divider />
          </DropdownButton>
        </div>
      </div>
      <div className="secondDiv">
        <h1>seconod</h1>
        {value === "2020" ? (
          <Line data={data} />
        ) : value === "2021" ? (
          <Line data={data2} />
        ) : value === "2023" ? (
          <Line data={data3} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default SectionComponent;
