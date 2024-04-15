import { HiArrowTrendingDown, HiArrowTrendingUp } from "react-icons/hi2";
import { Area, AreaChart, ResponsiveContainer } from "recharts";
import { carouselData } from "../mockData";
import { COLORS } from "../utils";


type CardType = 'portfolio' | "best" | "worst"
  const cardNames: {
    portfolio: string;
    best: string;
    worst: string;
} = {
    portfolio: "Portfolio",
    best: "Best Performing",
    worst: "Worst Performing",
  };
  
  const Card = ({ name }: { name: CardType }) => {
    // This calculations are probably gonna occur on server-side
    const increase = carouselData[0][name] < carouselData[6][name];
    const difference = carouselData[6][name] - carouselData[0][name];
    const percentageDiff =
      ((difference / carouselData[0][name]) * 100).toFixed(2) + "%";
    //
    const prefix = increase ? "" : "-";
    const color = increase ? "#291" : "#912";
    return (
      <div className="flex flex-col gap-2 h-full w-full min-w-[200px] min-h-[100px]">
        <div className="h-12 min-h-12 flex items-center justify-start">
          <h3 className="text-xl font-bold text-txt2">{cardNames[name]}</h3>
        </div>
        <div className="bg-bg2 border-2 border-bg3 rounded-2xl h-full w-full flex flex-col items-start p-4 gap-2 justify-start overflow-hidden relative">
          <ResponsiveContainer className="absolute top-0 left-0 z-0">
            <AreaChart width={250} height={150} data={carouselData} margin={{}}>
              <Area
                type="monotone"
                dataKey={name}
                stroke={color}
                strokeWidth={2}
                fill={color}
                animationDuration={200}
                animationBegin={100}
              />
            </AreaChart>
          </ResponsiveContainer>
          <div className="text-3xl z-10 font-semibold flex items-center gap-2">
            {name == "portfolio" && `$${carouselData[6][name]}`}
            {name == "best" && <>
            <div
                style={{ backgroundColor: COLORS[0] }}
                className="w-6 h-6 min-h-6 min-w-6 rounded-full"
              />
              <span>AAPL</span>
            </>}
            {name == "worst" && <><div
                style={{ backgroundColor: COLORS[3] }}
                className="w-6 h-6 min-h-6 min-w-6 rounded-full"
              />
              <span>TSLA</span>
            </>}
          </div>
          <h3 className="flex gap-1 items-center z-10 text-txt2">
            {increase ? <HiArrowTrendingUp /> : <HiArrowTrendingDown />}
            <span className="font-medium text-txt1">{percentageDiff}</span> •{" "}
            <span className="text-sm">
              {prefix}${Math.abs(difference)}
            </span>
          </h3>
        </div>
      </div>
    );
  };

  export default Card;