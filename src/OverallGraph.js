import * as d3 from "d3";
import { useEffect, useState } from "react";
import { VerricalAxis, VerricalHouseAxis, HorizontalAxis } from "./Axis";
import Legend from "./Legend";

function OverallGraph(props) {
  const colorScale = props.scale;
  const deviceWidth = window.innerWidth;
  const [mapData, setMapData] = useState([]);
  const margin = {
    top: 10,
    bottom: deviceWidth > 768 ? 50 : 90,
    left: deviceWidth > 768 ? 100 : 55,
    right: deviceWidth > 768 ? 180 : 55,
  };

  const contentWidth =
    deviceWidth > 768 ? deviceWidth * 0.6 : deviceWidth * 0.6;
  const contentHeight = contentWidth * 0.6;
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
    return (
      <div className="columns is-centered is-mobile ">
        <div className=" column is-10-desktop is-12-mobile mt-3">
          <div className="box">
            <h2>神奈川県全体のグラフ</h2>
            <div>
              <div
                style={{
                  width: svgWidth,
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
          </div>
        </div>
      </div>
    );
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
    <div className="columns is-centered is-mobile">
      <div
        className=" column is-10-desktop is-12-mobile mt-3"
        style={{ margin: 0 }}
      >
        <div className="box">
          <h2>神奈川県全体のグラフ</h2>
          <div>
            <svg
              viewBox={`${-margin.left} ${-margin.top} ${svgWidth} ${svgHeight}`}
              width={svgWidth}
              height={svgHeight}
            >
              <Legend
                scale={colorScale}
                type="main"
                graphWidth={contentWidth}
              />
              <VerricalAxis
                scale={yScalePopulation}
                graphHeight={contentHeight}
              />
              <HorizontalAxis
                scale={xScale}
                graphWidth={contentWidth}
                graphHeight={contentHeight}
              />
              <VerricalHouseAxis
                scale={yScaleHousehold}
                graphWidth={contentWidth}
              />
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
                        stroke={colorScale("世帯平均人数")}
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
                      r={deviceWidth > 768 ? "5" : "4"}
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
                        stroke={colorScale("人口")}
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
                      r={deviceWidth > 768 ? "5" : "4"}
                      fill={colorScale("人口")}
                    />
                  );
                })}
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
export default OverallGraph;
