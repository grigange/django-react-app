
export type Stock = {
    name: string;
    rank: number;
    return: number;
}

export type TimeSeriesRow = {
    [ticker: string]: number | string;
} &
{
    date: string;
}

export type Ticker = string;

export type StockAllocation = {
    name: Ticker;
    perc: number

}
export const assetsAllocation: StockAllocation[] = [
    { name: "AAPL", perc: 38.8 },
    { name: "NVDA", perc: 23.2 },
    { name: "LBBB", perc: 12.4 },
    { name: "TSLA", perc: 10.5 },
    { name: "GOOG", perc: 5.1 },
    { name: "ALL", perc: 100 },
]
export const carouselData:Array<any> = [
    {
      name: "Day1",
      portfolio: 2132,
      best: 20,
      worst: 100,
    },
    {
      name: "Day2",
      portfolio: 3000,
      best: 30,
      worst: 80,
    },
    {
      name: "Day3",
      portfolio: 2500,
      best: 70,
      worst: 110,
    },
    {
      name: "Day4",
      portfolio: 4000,
      best: 90,
      worst: 60,
    },
    {
      name: "Day5",
      portfolio: 6000,
      best: 80,
      worst: 40,
    },
    {
      name: "Day6",
      portfolio: 10000,
      best: 85,
      worst: 50,
    },
    {
      name: "Day7",
      portfolio: 11345.43,
      best: 100,
      worst: 10,
    }
  ];
export const timeSeries: TimeSeriesRow[] = [
    { date: "1/1/2023", AAPL: (Math.random() * 50).toPrecision(2), NVDA: (Math.random() * 50).toPrecision(2), LBBB: (Math.random() * 50).toPrecision(2), TSLA: (Math.random() * 50).toPrecision(2), GOOG: (Math.random() * 50).toPrecision(2), ALL: (Math.random() * 50).toPrecision(2) },
    { date: "1/2/2023", AAPL: (Math.random() * 50).toPrecision(2), NVDA: (Math.random() * 50).toPrecision(2), LBBB: (Math.random() * 50).toPrecision(2), TSLA: (Math.random() * 50).toPrecision(2), GOOG: (Math.random() * 50).toPrecision(2), ALL: (Math.random() * 50).toPrecision(2) },
    { date: "1/3/2023", AAPL: (Math.random() * 50).toPrecision(2), NVDA: (Math.random() * 50).toPrecision(2), LBBB: (Math.random() * 50).toPrecision(2), TSLA: (Math.random() * 50).toPrecision(2), GOOG: (Math.random() * 50).toPrecision(2), ALL: (Math.random() * 50).toPrecision(2) },
    { date: "1/4/2023", AAPL: (Math.random() * 50).toPrecision(2), NVDA: (Math.random() * 50).toPrecision(2), LBBB: (Math.random() * 50).toPrecision(2), TSLA: (Math.random() * 50).toPrecision(2), GOOG: (Math.random() * 50).toPrecision(2), ALL: (Math.random() * 50).toPrecision(2) },
    { date: "1/5/2023", AAPL: (Math.random() * 50).toPrecision(2), NVDA: (Math.random() * 50).toPrecision(2), LBBB: (Math.random() * 50).toPrecision(2), TSLA: (Math.random() * 50).toPrecision(2), GOOG: (Math.random() * 50).toPrecision(2), ALL: (Math.random() * 50).toPrecision(2) },
    { date: "1/6/2023", AAPL: (Math.random() * 50).toPrecision(2), NVDA: (Math.random() * 50).toPrecision(2), LBBB: (Math.random() * 50).toPrecision(2), TSLA: (Math.random() * 50).toPrecision(2), GOOG: (Math.random() * 50).toPrecision(2), ALL: (Math.random() * 50).toPrecision(2) },
    { date: "1/7/2023", AAPL: (Math.random() * 50).toPrecision(2), NVDA: (Math.random() * 50).toPrecision(2), LBBB: (Math.random() * 50).toPrecision(2), TSLA: (Math.random() * 50).toPrecision(2), GOOG: (Math.random() * 50).toPrecision(2), ALL: (Math.random() * 50).toPrecision(2) },
    { date: "1/8/2023", AAPL: (Math.random() * 50).toPrecision(2), NVDA: (Math.random() * 50).toPrecision(2), LBBB: (Math.random() * 50).toPrecision(2), TSLA: (Math.random() * 50).toPrecision(2), GOOG: (Math.random() * 50).toPrecision(2), ALL: (Math.random() * 50).toPrecision(2) },
    { date: "1/9/2023", AAPL: (Math.random() * 50).toPrecision(2), NVDA: (Math.random() * 50).toPrecision(2), LBBB: (Math.random() * 50).toPrecision(2), TSLA: (Math.random() * 50).toPrecision(2), GOOG: (Math.random() * 50).toPrecision(2), ALL: (Math.random() * 50).toPrecision(2) },
    { date: "1/10/2023", AAPL: (Math.random() * 50).toPrecision(2), NVDA: (Math.random() * 50).toPrecision(2), LBBB: (Math.random() * 50).toPrecision(2), TSLA: (Math.random() * 50).toPrecision(2), GOOG: (Math.random() * 50).toPrecision(2), ALL: (Math.random() * 50).toPrecision(2) },
    { date: "1/11/2023", AAPL: (Math.random() * 50).toPrecision(2), NVDA: (Math.random() * 50).toPrecision(2), LBBB: (Math.random() * 50).toPrecision(2), TSLA: (Math.random() * 50).toPrecision(2), GOOG: (Math.random() * 50).toPrecision(2), ALL: (Math.random() * 50).toPrecision(2) },
    { date: "1/12/2023", AAPL: (Math.random() * 50).toPrecision(2), NVDA: (Math.random() * 50).toPrecision(2), LBBB: (Math.random() * 50).toPrecision(2), TSLA: (Math.random() * 50).toPrecision(2), GOOG: (Math.random() * 50).toPrecision(2), ALL: (Math.random() * 50).toPrecision(2) },
    { date: "1/1/2024", AAPL: (Math.random() * 50).toPrecision(2), NVDA: (Math.random() * 50).toPrecision(2), LBBB: (Math.random() * 50).toPrecision(2), TSLA: (Math.random() * 50).toPrecision(2), GOOG: (Math.random() * 50).toPrecision(2), ALL: (Math.random() * 50).toPrecision(2) },
    { date: "1/2/2024", AAPL: (Math.random() * 50).toPrecision(2), NVDA: (Math.random() * 50).toPrecision(2), LBBB: (Math.random() * 50).toPrecision(2), TSLA: (Math.random() * 50).toPrecision(2), GOOG: (Math.random() * 50).toPrecision(2), ALL: (Math.random() * 50).toPrecision(2) },
    { date: "1/3/2024", AAPL: (Math.random() * 50).toPrecision(2), NVDA: (Math.random() * 50).toPrecision(2), LBBB: (Math.random() * 50).toPrecision(2), TSLA: (Math.random() * 50).toPrecision(2), GOOG: (Math.random() * 50).toPrecision(2), ALL: (Math.random() * 50).toPrecision(2) },
    { date: "1/4/2024", AAPL: (Math.random() * 50).toPrecision(2), NVDA: (Math.random() * 50).toPrecision(2), LBBB: (Math.random() * 50).toPrecision(2), TSLA: (Math.random() * 50).toPrecision(2), GOOG: (Math.random() * 50).toPrecision(2), ALL: (Math.random() * 50).toPrecision(2) },
]

export const stocks = [
    [
        { name: "AAPL", rank: 1, return: 23.1 },
        { name: "NVDA", rank: 2, return: 11.8 },
        { name: "LBBB", rank: 3, return: 7.3 },
        { name: "TSLA", rank: 4, return: -2.2 },
        { name: "GOOG", rank: 5, return: -3.3 }
    ],
    [
        { name: "AAPL", rank: 2, return: 3.1 },
        { name: "NVDA", rank: 1, return: 113.8 },
        { name: "LBBB", rank: 3, return: 71.3 },
        { name: "TSLA", rank: 5, return: 22.2 },
        { name: "GOOG", rank: 4, return: 31.3 }
    ],
    [
        { name: "AAPL", rank: 4, return: -15.1 },
        { name: "NVDA", rank: 3, return: 50.8 },
        { name: "LBBB", rank: 2, return: 66.3 },
        { name: "TSLA", rank: 1, return: 87.2 },
        { name: "GOOG", rank: 5, return: -31.3 }
    ],
    [
        { name: "AAPL", rank: 1, return: 33.1 },
        { name: "NVDA", rank: 2, return: 11.8 },
        { name: "LBBB", rank: 3, return: 7.3 },
        { name: "TSLA", rank: 4, return: -2.2 },
        { name: "GOOG", rank: 5, return: -3.3 }
    ],
    [
        { name: "AAPL", rank: 3, return: -1.2 },
        { name: "NVDA", rank: 2, return: 60.8 },
        { name: "LBBB", rank: 1, return: 71.4 },
        { name: "TSLA", rank: 4, return: -2.3 },
        { name: "GOOG", rank: 5, return: -3.3 }
    ],
    [
        { name: "AAPL", rank: 1, return: 23.1 },
        { name: "NVDA", rank: 2, return: 22.8 },
        { name: "LBBB", rank: 3, return: 15.3 },
        { name: "TSLA", rank: 4, return: 11.2 },
        { name: "GOOG", rank: 5, return: 9.3 }
    ],
    [
        { name: "AAPL", rank: 1, return: 50.1 },
        { name: "NVDA", rank: 2, return: 40.8 },
        { name: "LBBB", rank: 3, return: 30.3 },
        { name: "TSLA", rank: 4, return: -20.2 },
        { name: "GOOG", rank: 5, return: -32.3 }
    ],
    [
        { name: "AAPL", rank: 1, return: 12.1 },
        { name: "NVDA", rank: 2, return: 11.8 },
        { name: "LBBB", rank: 3, return: 10.3 },
        { name: "TSLA", rank: 4, return: -2.2 },
        { name: "GOOG", rank: 5, return: -3.3 }
    ],
]


export const getData = (month: number): TimeSeriesRow[] => {
    // console.log(timeSeries.slice(month, month + 3));
    return (timeSeries.slice(month, month + 4))
};