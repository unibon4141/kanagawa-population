import * as topojson from "topojson";
import * as d3 from "d3";
import { useEffect, useState } from "react";
import SubAreaGraph from "./SubAreaGraph";
import { VerricalAxis, VerricalHouseAxis, HorizontalAxis } from "./Axis";
import Legend from "./Legend";
function App() {
  return (
    <div>
      <Main />
    </div>
  );
}

function Main() {
  const colorScale = d3.scaleOrdinal(d3.schemeCategory10);
  return (
    <div>
      <Kanagawa scale={colorScale} />
    </div>
  );
}
// 神奈川の折れ線グラフを描画
function KanagawaGraph(props) {
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
      <h2 style={{ position: "absolute", top: "0", left: "0" }}>
        神奈川県全体のグラフ
      </h2>
      <div style={{ position: "absolute", top: "50px", left: 0 }}>
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
                  fill={colorScale("1世帯あたりの人員")}
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

// 神奈川県の地図を描画
function Kanagawa(props) {
  // これはいろいろ変えて試してみる
  const scale = 30000 * 0.7;
  const colorScale = props.scale;
  const [data, setData] = useState([]);
  const [clickedArea, setClickedArea] = useState(null);
  const margin = {
    top: 10,
    bottom: 10,
    left: 50,
    right: 100,
  };
  const contentWidth = 400;
  const contentHeight = 300;
  const svgWidth = margin.right + margin.left + contentWidth;
  const svgHeight = margin.top + margin.bottom + contentHeight;
  useEffect(() => {
    d3.json("kanagawa.topojson").then((topoSaitama) => {
      const geoSaitama = topojson.feature(
        topoSaitama,
        topoSaitama.objects.kanagawa
      ); //TopoJSON=>GeoJSO変換
      const geoSaitamacp = JSON.parse(JSON.stringify(geoSaitama));
      geoSaitamacp.features = [];

      let i = 14101;
      const arrChanged = [];
      while (i <= 14402) {
        const divideArray = geoSaitama.features.filter((item) => {
          if (item.properties.N03_007 == i) {
            return true;
          } else {
            return false;
          }
        });
        // 配列の中身が空でないか
        if (divideArray.length > 0) {
          const tmpArray = JSON.parse(JSON.stringify(geoSaitamacp));
          tmpArray.features = divideArray;
          arrChanged.push(tmpArray);
        }
        i++;
      }

      const east = 138.915833,
        west = 139.796111,
        north = 35.672778,
        south = 35.128889;
      const kanagawaWidth = contentWidth;
      const kanagawaHeight = contentHeight;
      const aProjection = d3
        // 「緯度経度の点座標」を「svg上の点座標」に変換
        .geoMercator()
        .center([(west + east) / 2, (north + south) / 2])
        .translate([kanagawaWidth / 2, kanagawaHeight / 2])
        .scale(scale);
      const geoPath = d3.geoPath().projection(aProjection);

      const pathes = [];
      arrChanged.map((item) => {
        pathes.push({
          name: item.features[0].properties.N03_004,
          path: geoPath(item),
        });
      });
      setData(pathes);
    });
  }, []);
  // 神奈川県の地図がクリックされた時に発火
  function mouseEnterHandle(e) {
    setClickedArea(e.currentTarget.dataset.name);
  }
  if (data == 0) {
    return <div>loading</div>;
  }
  return (
    <div style={{ position: "relative", margin: 0, padding: 0 }}>
      <div>
        <KanagawaGraph scale={colorScale} />
        <SubAreaGraph target={clickedArea} colorScale={colorScale} />
      </div>
      <div style={{ position: "absolute", top: "470px", left: "800px" }}>
        <svg
          viewBox={`${-margin.left} ${-margin.top} ${svgWidth} ${svgHeight}`}
          width={svgWidth}
          height={svgHeight}
          style={{ border: "solid 2px" }}
        >
          {data.map((item, i) => {
            return (
              <path
                key={i}
                onClick={mouseEnterHandle}
                d={item.path}
                data-name={item.name}
                style={{
                  stroke: "black",
                  fill: clickedArea === item.name ? "#aad5ff" : "white",
                  strokeWidth: "1",
                }}
              ></path>
            );
          })}
        </svg>
      </div>
    </div>
  );
}
export default App;
