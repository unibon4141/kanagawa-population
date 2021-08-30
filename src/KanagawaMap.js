import * as topojson from "topojson";
import * as d3 from "d3";
import { useEffect, useState } from "react";
import SubGraph from "./SubGraph";
function KanagawaMap(props) {
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
  const deviceWidth = window.innerWidth;
  const deviceHeight = window.innerHeight;
  const contentWidth = deviceWidth * 0.25;
  const contentHeight = contentWidth * 0.7;
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
    <div class="columns">
      <div class="column">
        <div class="box">
          <svg
            viewBox={`${-margin.left} ${-margin.top} ${svgWidth} ${svgHeight}`}
            width={svgWidth}
            height={svgHeight}
          >
            {data.map((item, i) => {
              return (
                <path
                  key={i}
                  onClick={mouseEnterHandle}
                  d={item.path}
                  data-name={item.name}
                  style={{
                    stroke: "	#7f7f7f",
                    fill: clickedArea === item.name ? "#aad5ff" : "#fff",
                    strokeWidth: "1",
                  }}
                ></path>
              );
            })}
          </svg>
        </div>
      </div>
      <div class="column">
        <SubGraph target={clickedArea} colorScale={colorScale} />
      </div>
    </div>
  );
}
export default KanagawaMap;
