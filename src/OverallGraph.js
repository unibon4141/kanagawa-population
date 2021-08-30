import * as d3 from "d3";
import { useEffect, useState } from "react";
import { VerricalAxis, VerricalHouseAxis, HorizontalAxis } from "./Axis";
import Legend from "./Legend";

function OverallGraph(props) {
  const colorScale = props.scale;
  const [mapData, setMapData] = useState([]);
  const margin = {
    top: 10,
    bottom: 50,
    left: 100,
    right: 180,
  };
  const contentWidth = 500;
  const contentHeight = 350;
  const svgWidth = margin.right + margin.left + contentWidth;
  const svgHeight = margin.top + margin.bottom + contentHeight;
  useEffect(() => {
    (async () => {
      const response = await fetch("kanagawa1.json");
      const fetchData = await response.json();
      setMapData(fetchData);
    })();
  }, []);

  if (mapData.length == 0) {
    return <div>loading</div>;
  }

  // scalelinier:変数変換
  const xScale = d3
    .scaleLinear()
    // dommain(a,b): 元の座標の最小、最大ヲ指定
    // d3.extent(array):return : [array_min, array_max]
    .domain(d3.extent(mapData, (item) => item["year"]))
    // range:出力の最大、最小値
    .range([0, contentWidth])
    .nice();
  const yScaleHousehold = d3
    .scaleLinear()
    .domain([0, d3.extent(mapData, (item) => item["sizeOfHousehold"])[1]])
    .range([contentHeight, 0]);

  const yScalePopulation = d3
    .scaleLinear()
    .domain([0, d3.extent(mapData, (item) => item["population"])[1]])
    .range([contentHeight, 0]);
  return (
    <div>
      <h2>神奈川県全体のグラフ</h2>
      <div>
        <svg
          viewBox={`${-margin.left} ${-margin.top} ${svgWidth} ${svgHeight}`}
          width={svgWidth}
          height={svgHeight}
          style={{ border: "solid 2px" }}
        >
          <Legend scale={colorScale} type="main" />
          <VerricalAxis scale={yScalePopulation} />
          <HorizontalAxis scale={xScale} />
          <VerricalHouseAxis scale={yScaleHousehold} />
          <g>
            {mapData.map((item, i) => {
              const preData = i > 0 ? mapData[i - 1] : null;
              if (i > 0) {
                return (
                  <line
                    key={item.id}
                    x1={xScale(preData["year"])}
                    y1={yScaleHousehold(preData.sizeOfHousehold)}
                    x2={xScale(item["year"])}
                    y2={yScaleHousehold(item.sizeOfHousehold)}
                    stroke="black"
                  ></line>
                );
              }
            })}
          </g>
          <g>
            {mapData.map((item, i) => {
              return (
                <circle
                  key={item.id}
                  cx={xScale(item.year)}
                  cy={yScaleHousehold(item.sizeOfHousehold)}
                  r="5"
                  fill={colorScale("世帯平均人数")}
                ></circle>
              );
            })}
          </g>
          <g>
            {mapData.map((item, i) => {
              const preData = i > 0 ? mapData[i - 1] : null;
              if (i > 0) {
                return (
                  <line
                    key={item.id}
                    x1={xScale(preData["year"])}
                    y1={yScalePopulation(preData["population"])}
                    x2={xScale(item["year"])}
                    y2={yScalePopulation(item["population"])}
                    stroke="black"
                  ></line>
                );
              }
            })}
          </g>
          <g>
            {mapData.map((item, i) => {
              return (
                <circle
                  transform={`translate(${xScale(
                    item["year"]
                  )},${yScalePopulation(item["population"])})`}
                  key={item.id}
                  cx="0"
                  cy="0"
                  r="5"
                  fill={colorScale("人口")}
                />
              );
            })}
          </g>
        </svg>
      </div>
    </div>
  );
}
export default OverallGraph;
