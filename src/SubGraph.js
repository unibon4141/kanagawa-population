import { useEffect, useState } from "react";
import { VerricalAxis, HorizontalAxis } from "./Axis";
import * as d3 from "d3";
import Legend from "./Legend";

function SubGraph({ target, colorScale }) {
  const [eachKanagawaData, setEachKanagawaData] = useState([]);
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
      const response = await fetch("kanagawa3.json");
      const fetchData = await response.json();
      setEachKanagawaData(fetchData);
    })();
  }, []);
  if (eachKanagawaData.length === 0 || target === null) {
    return (
      <div>
        <h2>市区町村別のグラフ</h2>
        <div
          style={{
            width: svgWidth,
            height: svgHeight,
            border: "solid 2px",
          }}
        ></div>
      </div>
    );
  }
  const targetData = eachKanagawaData.find((item) => item.name === target);

  let startI = 1970;
  const graphDataTmp = targetData.population.filter((item) => {
    if (item[startI] !== null) {
      startI += 5;
      return true;
    } else {
      startI += 5;
      return false;
    }
  });

  const graphData = graphDataTmp.map((item) => {
    const year = Object.keys(item)[0];
    return {
      year: year,
      population: item[year],
    };
  });

  const xScale = d3
    .scaleLinear()
    .domain(d3.extent(graphData, (item) => item.year))
    .range([0, contentWidth])
    .nice();
  const yScalePopulation = d3
    .scaleLinear()
    .domain([0, d3.extent(graphData, (item) => item.population)[1]])
    .range([contentHeight, 0]);
  return (
    <div>
      <h2>市区町村別のグラフ : {target}</h2>
      <div>
        <svg
          viewBox={`${-margin.left} ${-margin.top} ${svgWidth} ${svgHeight}`}
          width={svgWidth}
          height={svgHeight}
          style={{ border: "solid 2px" }}
        >
          <Legend scale={colorScale} type="sub" />
          <VerricalAxis scale={yScalePopulation} />
          <HorizontalAxis scale={xScale} />

          <g>
            {graphData.map((item, i) => {
              const preData = i > 0 ? graphData[i - 1] : null;
              if (i > 0) {
                return (
                  <line
                    key={i}
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
            {graphData.map((item, i) => {
              return (
                <circle
                  transform={`translate(${xScale(
                    item["year"]
                  )},${yScalePopulation(item["population"])})`}
                  key={i}
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
export default SubGraph;
