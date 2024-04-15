import React from "react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { assetsAllocation } from "../mockData";
import { COLORS } from "../utils";
import GridElementHeader from "./GridElementHeader";

const AssetAllocation = () => {
  return (
    <>
      <GridElementHeader title={"Asset Allocation"} />
      <div className="bg-bg2 rounded-2xl w-full h-full border-2 border-bg3 flex flex-col p-8 items-center justify-between relative">
        <ResponsiveContainer width="100%" height={"50%"}>
          <PieChart height={225}>
            <Pie
              data={assetsAllocation.slice(0,-1)}
              dataKey="perc"
              nameKey="name"
              cx="50%"
              cy="50%"
              startAngle={90}
              endAngle={480}
              innerRadius={"60%"}
              outerRadius={"100%"}
              animationDuration={500}
              animationBegin={0}
            >
              {/*Apply Colors to SVG Rechart Cells*/ }
              {assetsAllocation.slice(0,-1).map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                  strokeOpacity={0}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        {/* Custom Legend
            MAYBE: Use Rechart Legend*/ }
        <ul className="flex flex-col divide-y-2 divide-bg3 w-full h-2/5 max-h-44 pr-2 overflow-y-scroll">
          {assetsAllocation.slice(0,-1).map((element, index) => (
            <li key={`item-${index}`} className="flex gap-6 items-center p-2">
              <div
                key={`cell-${index}`}
                style={{ backgroundColor: COLORS[index] }}
                className="w-4 h-4 min-h-4 min-w-4 rounded-full"
              />
              <h4 className="font-medium">{element.name}</h4>
              <h4 className="ml-auto">{element.perc}%</h4>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default AssetAllocation;
