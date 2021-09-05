export function VerricalAxis({ scale, graphHeight }) {
  const strokeColor = "#888";
  const x = 0;
  const [y1, y2] = scale.range();
  const deviceWidth = window.innerWidth;
  return (
    <g>
      <line
        x1={x}
        y1={y1}
        x2={x}
        y2={y2 + 2}
        stroke={strokeColor}
        strokeWidth="2"
      ></line>
      <g>
        <g transform={`translate(-80, ${graphHeight / 2}) rotate(-90)`}>
          <text
            x="0"
            y="0"
            textAnchor="end"
            dominantBaseline="central"
            fontSize={deviceWidth > 768 ? "15" : "12"}
          >
            人口
          </text>
        </g>

        {scale.ticks().map((y, i) => {
          return (
            <g key={i} transform={`translate(0, ${scale(y)})`}>
              <line x1="0" y1="0" x2="5" y2="0" stroke={strokeColor}></line>
              <text
                x="-8"
                y="0"
                textAnchor="end"
                dominantBaseline="central"
                fill="black"
                fontSize={deviceWidth > 768 ? "12" : "10"}
              >
                {y}
              </text>
            </g>
          );
        })}
      </g>
    </g>
  );
}

export function VerricalHouseAxis({ scale, graphWidth }) {
  const strokeColor = "#888";
  const x = graphWidth;
  const [y1, y2] = scale.range();
  const deviceWidth = window.innerWidth;

  return (
    <g>
      <line
        x1={x}
        y1={y1}
        x2={x}
        y2={y2 + 2}
        stroke={strokeColor}
        strokeWidth="2"
      ></line>
      <g>
        <g transform={`translate(${x}, 200) rotate(-90)`}>
          <text
            x="30"
            y="60"
            textAnchor="end"
            dominantBaseline="central"
            fontSize={deviceWidth > 768 ? "15" : "12"}
          >
            世帯平均人数
          </text>
        </g>

        {scale.ticks().map((y, i) => {
          return (
            <g key={i} transform={`translate(${x}, ${scale(y)})`}>
              <line x1="0" y1="0" x2="-5" y2="0" stroke={strokeColor}></line>
              <text
                x="30"
                y="0"
                textAnchor="end"
                dominantBaseline="central"
                fill="black"
                fontSize={deviceWidth > 768 ? "12" : "10"}
              >
                {y}
              </text>
            </g>
          );
        })}
      </g>
    </g>
  );
}

export function HorizontalAxis({ scale, graphWidth, graphHeight }) {
  const strokeColor = "#888";
  const y = graphHeight;
  const deviceWidth = window.innerWidth;

  const [x1, x2] = scale.range();
  return (
    <g>
      <line x1={x1} y1={y} x2={x2 + 5} y2={y} stroke={strokeColor}></line>
      <g>
        <g transform={`translate(${graphWidth / 2}, ${y + 40})`}>
          <text
            x="0"
            y="0"
            textAnchor="end"
            dominantBaseline="central"
            fontSize="15"
          >
            年
          </text>
        </g>

        {scale.ticks(5).map((x, i) => {
          return (
            <g key={i} transform={`translate(${scale(x)}, 0)`}>
              <line
                x1="0"
                y1={graphHeight}
                x2="0"
                y2={graphHeight - 10}
                stroke={strokeColor}
              ></line>
              <text
                x="0"
                y={y + 15}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize={deviceWidth > 768 ? "12" : "10"}
              >
                {x}
              </text>
            </g>
          );
        })}
      </g>
    </g>
  );
}
