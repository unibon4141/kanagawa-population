import * as topojson from "topojson";
import * as d3 from "d3";
import { useEffect, useState } from "react";
import SubGraph from "./SubGraph";
function KanagawaMap(props) {
  const scale = 30000 * 0.7;
  const colorScale = props.scale;
  const [mapData, setMapData] = useState([]);
  const [clickedArea, setClickedArea] = useState(null);
  const [hoverArea, setHoverArea] = useState(null);
  const margin = {
    top: 10,
    bottom: 10,
    left: 50,
    right: 50,
  };
  const deviceWidth = window.innerWidth;
  const contentWidth =
    deviceWidth > 768 ? deviceWidth * 0.25 : deviceWidth * 0.6;
  const contentHeight = deviceWidth > 768 ? contentWidth * 0.7 : contentWidth;
  const svgWidth = margin.right + margin.left + contentWidth;
  const svgHeight = margin.top + margin.bottom + contentHeight;
  useEffect(() => {
    d3.json("kanagawa.topojson").then((topoData) => {
      const pathData = topojson.feature(topoData, topoData.objects.kanagawa); //TopoJSON=>GeoJSO変換
      const jsonData = { ...pathData };
      jsonData.features = [];

      const KANAGAWA_START_NUM = 14101;
      const KANAGAWA_END_NUM = 14402;
      let pathDataNum = KANAGAWA_START_NUM;
      const arrChanged = [];

      while (pathDataNum <= KANAGAWA_END_NUM) {
        const divideArray = pathData.features.filter((item) => {
          return item.properties.N03_007 == pathDataNum ? true : false;
        });
        // 配列の中身が空でないか
        if (divideArray.length > 0) {
          const tmpArray = { ...jsonData };
          tmpArray.features = divideArray;
          arrChanged.push(tmpArray);
        }
        pathDataNum++;
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
      setMapData(pathes);
    });
  }, []);

  function mouseEnterHandle(e) {
    setClickedArea(e.currentTarget.dataset.name);
  }
  function mouseOveerHandle(e) {
    setHoverArea(e.currentTarget.dataset.name);
  }
  function mouseOutHandle(e) {
    setHoverArea(null);
  }
  return (
    <div className="columns is-multiline is-mobile is-variable is-0-mobile">
      <div className="column is-4-desktop is-12-mobile">
        <div className="box">
          {mapData.length === 0 ? (
            <div
              style={{
                width: svgWidth * 0.8,
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
          ) : (
            <svg
              viewBox={`${-margin.left} ${-margin.top} ${svgWidth} ${svgHeight}`}
              width={svgWidth}
              height={svgHeight}
            >
              {mapData.map((item, i) => {
                let fillCol = "";
                if (item.name === clickedArea) {
                  fillCol = "#aad5ff";
                } else if (item.name === hoverArea) {
                  fillCol = "#dceaf8";
                } else {
                  fillCol = "#fff";
                }
                return (
                  <path
                    key={i}
                    onClick={mouseEnterHandle}
                    d={item.path}
                    data-name={item.name}
                    onMouseOver={mouseOveerHandle}
                    onMouseOut={mouseOutHandle}
                    style={{
                      stroke: "	#7f7f7f",
                      fill: fillCol,
                      strokeWidth: "1",
                    }}
                  ></path>
                );
              })}
            </svg>
          )}
        </div>
      </div>
      <div className="column is-7-desktop is-12-mobile">
        <SubGraph target={clickedArea} colorScale={colorScale} />
      </div>
    </div>
  );
}
export default KanagawaMap;
