import { useEffect, useState } from "react";
import { VerricalAxis, HorizontalAxis } from "./Axis";
import * as d3 from "d3";
import Legend from "./Legend";

function SubGraph({ target, colorScale }) {
  const [eachKanagawaData, setEachKanagawaData] = useState([]);
  const deviceWidth = window.innerWidth;
  const deviceHeight = window.innerHeight;
  const contentWidth =
    deviceWidth > 768 ? deviceWidth * 0.4 : deviceWidth * 0.65;
  const contentHeight =
    deviceWidth > 768 ? deviceHeight * 0.5 : contentWidth * 0.7;
  const margin = {
    top: 20,
    bottom: deviceWidth > 768 ? 50 : 90,
    left: deviceWidth > 768 ? 100 : 55,
    right: deviceWidth > 768 ? 180 : 55,
  };
  const svgWidth = margin.right + margin.left + contentWidth;
  const svgHeight = margin.top + margin.bottom + contentHeight;

  useEffect(() => {
    (async () => {
      const response = await fetch("kanagawa3.json");
      const fetchData = await response.json();
      setEachKanagawaData(fetchData);
    })();
  }, []);
  if (eachKanagawaData.length === 0) {
    return (
      <div className="box">
        <h2>市区町村別のグラフ</h2>
        <div
          style={{
            width: svgWidth * 0.9,
            height: svgHeight,
            position: "relative",
          }}
        >
          <progress
            className="progress is-small is-success"
            max="100"
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              margin: "auto",
            }}
          ></progress>
        </div>
      </div>
    );
  } else if (target === null) {
    return (
      <div className="box">
        <h2>市区町村別のグラフ</h2>
        <div
          style={{
            width: svgWidth * 0.9,
            height: svgHeight,
            position: "relative",
            margin: "0 auto",
          }}
        >
          <p
            style={{
              width: "  ",
              position: "absolute",
              top: 0,
              bottom: 0,
              margin: "auto",
              textAlign: "center",
              height: "50px",
            }}
          >
            神奈川県の地図をクリックするとここにグラフが表示されます。
          </p>
        </div>
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
    <div className="box">
      <h2>市区町村別のグラフ : {target}</h2>
      <div>
        <svg
          viewBox={`${-margin.left} ${-margin.top} ${svgWidth} ${svgHeight}`}
          width={svgWidth}
          height={svgHeight}
        >
          <Legend scale={colorScale} type="sub" graphWidth={contentWidth} />
          <VerricalAxis scale={yScalePopulation} graphHeight={contentHeight} />
          <HorizontalAxis
            scale={xScale}
            graphWidth={contentWidth}
            graphHeight={contentHeight}
          />

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
                    stroke={colorScale("人口")}
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
                  r={deviceWidth > 768 ? "5" : "3"}
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
