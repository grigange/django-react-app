"use client";
import Card from "@/app/components/Card";
import PortfolioValueGraph from "@/app/components/PortfolioValueGraph";
import { COLORS } from "@/app/utils";
import { HiBars3 } from "react-icons/hi2";
import { HiSquares2X2 } from "react-icons/hi2";
import { HiAdjustmentsVertical } from "react-icons/hi2";
import { HiDocumentArrowDown } from "react-icons/hi2";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import {
  Stock,
  TimeSeriesRow,
  assetsAllocation,
  getData,
  stocks,
  timeSeries,
} from "@/app/mockData";
import { useState } from "react";
import Table from "@/app/components/Table";
import AssetAllocation from "@/app/components/AssetAllocation";

export default function Home() {
  const [data, setData] = useState<TimeSeriesRow[]>(timeSeries);
  const [tableData, setTableData] = useState<Stock[]>(stocks[0]);
  return (
    <>
      <div className="flex gap-4 w-full absolute top-0 left-0 p-12 pb-0 z-50 bg-gradient-to-b from-bg1 via-bg1 ">
        <button className="bg-bg2 border-2 border-bg3 rounded-xl p-2 ">
          <HiBars3 size={32} className="fill-txt2" />
        </button>

        <select
          className="bg-bg2 border-2 border-bg3 rounded-xl py-2 px-4 min-w-20 max-w-full overflow-hidden ml-auto"
          onChange={(event) => {
            setData(() => {
              if (event.target.value === "Overall") return timeSeries;
              return getData(parseInt(event.target.value));
            });
            setTableData(stocks[parseInt(event.target.value) / 3]);
          }}
        >
          {/*Should be calculating the options based on timestamps of backend + duration option (1W,1M,3M)*/}
          <option value={"Overall"}>Overall</option>
          <optgroup label="2023">
            <option value={0}>2023-Q1</option>
            <option value={3}>2023-Q2</option>
            <option value={6}>2023-Q3</option>
            <option value={9}>2023-Q4</option>
          </optgroup>
          <optgroup label="2024">
            <option value={12}>2024-Q1</option>
            <option value={15}>2024-Q2</option>
          </optgroup>
        </select>
        <button className="bg-bg2 border-2 border-bg3  rounded-xl p-2">
          <HiSquares2X2 size={32} className="fill-txt2" />
        </button>
      </div>
      <div
        id="grid"
        className="grid z-0 grid-cols-12 grid-rows-5 xl:gap-6 gap-2 h-full w-full p-12 pt-[7.5rem] relative"
      >
        <div className="3xl:col-span-3 row-span-3 col-span-3 xl:flex hidden flex-col gap-2 h-full overflow-hidden">
          <AssetAllocation />
        </div>
        <div className="3xl:col-span-2 3xl:row-span-3 xl:col-span-9 xl:row-span-1 col-span-12 row-span-1 flex 3xl:flex-col overflow-auto gap-6">
          <Card name={"portfolio"} />
          <Card name={"best"} />
          <Card name={"worst"} />
        </div>
        <div className="3xl:col-span-7 3xl:row-span-3 xl:col-span-9 xl:row-span-2 col-span-12 row-span-2 flex flex-col gap-2">
          <PortfolioValueGraph data={data} />
        </div>
        <div className="col-span-12 row-span-2 flex flex-col gap-2 h-full min-h-max">
          <Table data={tableData} />
        </div>
      </div>
    </>
  );
}
