function Legend({ scale, type, graphWidth }) {
  const deviceWidth = window.innerWidth;

  if (type === "main") {
    return (
      <g
        transform={`translate(${deviceWidth > 768 ? 150 : -100},${
          deviceWidth > 768 ? 0 : 190
        })`}
      >
        {scale.domain().map((item, i) => {
          return (
            <g
              key={i}
              transform={`translate(${graphWidth - 80}, ${20 + i * 15})`}
            >
              <circle r="5" fill={scale(item)} />
              <text x="10" fontSize="11" dominantBaseline="central">
                {item}
              </text>
            </g>
          );
        })}
      </g>
    );
  } else {
    return (
      <g transform={`translate(150,0)`}>
        {scale.domain().map((item, i) => {
          if (i === 1) {
            return (
              <g
                key={i}
                transform={`translate(${
                  deviceWidth > 768 ? graphWidth - 100 : -50
                }, ${deviceWidth > 768 ? 20 + i * 15 : 240})`}
              >
                <circle r="5" fill={scale(item)} />
                <text x="10" fontSize="11" dominantBaseline="central">
                  {item}
                </text>
              </g>
            );
          }
        })}
      </g>
    );
  }
}
export default Legend;
