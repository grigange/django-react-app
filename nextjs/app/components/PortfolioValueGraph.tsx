import React, { PureComponent, ReactNode, useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceArea,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import { HiMagnifyingGlassMinus } from "react-icons/hi2";
import { COLORS } from "@/app/utils";
import {
  TimeSeriesRow,
  assetsAllocation,
  getData,
  timeSeries,
} from "../mockData";
import GridElementHeader from "./GridElementHeader";
import { Payload } from "recharts/types/component/DefaultTooltipContent";


const getAxisYDomain = (data:TimeSeriesRow[], offset:number) => {
    let [bottom, top]:[number,number] = [-10, 10];
    assetsAllocation.forEach((a)=>{
        data.forEach((d) => {
            if (d[a.name] > top) top = d[a.name];
            if (d[a.name] < bottom) bottom = d[a.name];
          })
    })
    console.log(bottom)
    console.log(top)

  return [parseFloat((bottom | 0) - offset), parseFloat((top | 0) + offset)];
};
const CustomTooltip = ({ active, payload, label }:{ active?:boolean, payload?:Payload<number,string>[], label?:string }) => {
    console.log(active)
    console.log(payload)
    console.log(label)
    if (active && payload && payload.length) {
      return (
        <div className="flex flex-col bg-bg3/75 border-2 text-txt1 border-bg3 rounded-xl shadow-xl overflow-hidden text-sm">
            
          <p className="w-full text-center line p-2 tracking-wider bg-bg2 text-base spa font-bold">{label}</p>
          {payload.sort((a:Payload<number,string>,b:Payload<number,string>)=>b.value! - a.value!).map((element:any,index:number)=>(
                <li key={`item-${index}`} className="flex gap-3 p-2 items-center">
                <div
                  key={`cell-${index}`}
                  style={{ backgroundColor: element.color }}
                  className="w-3 h-3 min-h-3 min-w-3 rounded-full"
                />
                <h4 className="font-medium">{element.name}</h4>
                <h4 className="ml-auto">{element.value}{element.unit}</h4>
              </li>
            )
          )}
        </div>
      );
    }
  
    return null;
  };

export default function PortfolioValueGraph({
  data,
}: {
  data: TimeSeriesRow[];
}) {
  const [state, setState] = useState<any>({
    data: data,
    left: "dataMin",
    right: "dataMax",
    refAreaLeft: "",
    refAreaRight: "",
    top: "dataMax+10",
    bottom: "dataMin-10",
    axisXDomain: ["dataMin","dataMax"],
    axisYDomain: ["dataMin-10","dataMax+10"],
    animation: true,
  });
  // TODO: Zoom Out
  const zoom = () => {
    if (state.refAreaLeft === state.refAreaRight || state.refAreaRight === "") {
      setState({
        refAreaLeft: "",
        refAreaRight: "",
        ...state,
      });
      return;
    }

    // xAxis domain
    if (state.refAreaLeft > state.refAreaRight)
      [state.refAreaLeft, state.refAreaRight] = [
        state.refAreaRight,
        state.refAreaLeft,
      ];

    // yAxis domain
    const [bottom, top] = getAxisYDomain(state.data, 1);

    setState(() => ({
      refAreaLeft: "",
      refAreaRight: "",
      refToRender: state.refToRender,
      data: state.data,
      left: state.refAreaLeft,
      right: state.refAreaRight,
      bottom,
      top,
    }));
  };
// TODO: Zoom In
  const zoomOut = () => {
    setState(() => ({
      data: state.data,
      refAreaLeft: "",
      refAreaRight: "",
      refToRender: state.refToRender,
      left: "dataMin",
      right: "dataMax",
      top: "dataMax+10",
      bottom: "dataMin-10",
    }));
  };

  const RightElement = (): ReactNode => (
    <div className="flex gap-2 hidden">
      <button className="bg-bg2 border-2 border-bg3 text-txt2 hover:bg-bg3 hover:text-txt1 transition-colors rounded-xl text-lg font-bold p-2 w-12 h-12">
        1W
      </button>
      <button className="bg-bg2 border-2 border-bg3 text-txt2 hover:bg-bg3 hover:text-txt1 transition-colors rounded-xl text-lg font-bold p-2 w-12 h-12">
        1M
      </button>
      <button className="bg-bg2 border-2 border-bg3 text-txt2 hover:bg-bg3 hover:text-txt1 transition-colors rounded-xl text-lg font-bold p-2 w-12 h-12">
        3M
      </button>
    </div>
  );
  return (
    <>
      <GridElementHeader
        title={"Portfolio Value Graph"}
        rightElement={<RightElement />}
      />
      <div className="bg-bg2 border-2 border-bg3 rounded-2xl relative min-h-max h-full w-full flex items-end justify-start select-none">
        {/* <button
          type="button"
          className=" bg-bg2 group hover:bg-bg3 transition-colors p-2 rounded-xl absolute top-2 right-2 z-10"
          onClick={zoomOut}
        >
          <HiMagnifyingGlassMinus
            size={32}
            className="fill-txt2 group-hover:fill-txt1"
          />
        </button> */}

        <ResponsiveContainer width="95%" height="90%" className={"m-auto"} >
          <LineChart
            data={data}
            onMouseDown={(e) =>
              setState({ ...state, refAreaLeft: e.activeLabel })
            }
            onMouseMove={(e) =>
              state.refAreaLeft &&
              setState({ ...state, refAreaRight: e.activeLabel })
            }
            // onMouseUp={zoom}
          >
            <CartesianGrid opacity={0.5} fill={"#121212"} radius={20} strokeDasharray="3 3" color="#f00" />
            <XAxis
              allowDataOverflow
              dataKey="date"
              domain={state.axisXDomain}
            />
            <YAxis
              allowDataOverflow
              domain={state.axisYDomain}
              unit={"%"}
            />
            <Tooltip
              content={<CustomTooltip/>}
            />
            {assetsAllocation.map((e, i) => (
              <Line
                type="natural"
                dataKey={e.name}
                stroke={e.name == "ALL" ? "#b3b3b3" : COLORS[i]}
                strokeWidth={e.name == "ALL" ? 5 : 2}
                animationDuration={200}
                animationBegin={i * 50}
                unit={"%"}
              />
            ))}
            <ReferenceLine  y={0} stroke="red" label="0%" strokeDasharray="3 3"
                strokeOpacity={0.5}  />

            {/* Zoom Drag Reference Area*/}
            {state.refAreaLeft && state.refAreaRight ? (
              <ReferenceArea
                x1={state.refAreaLeft}
                x2={state.refAreaRight}
                strokeOpacity={0.3}
              />
            ) : null}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}
