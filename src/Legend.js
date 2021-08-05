function Legend({ scale, type }) {
  const dx = type === "main" ? 150 : 150;
  if (type === "main") {
    return (
      <g transform={`translate(${dx},0)`}>
        {scale.domain().map((item, i) => {
          return (
            <g key={i} transform={`translate(400, ${20 + i * 15})`}>
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
      <g transform={`translate(${dx},0)`}>
        {scale.domain().map((item, i) => {
          if (i === 1) {
            return (
              <g key={i} transform={`translate(400, ${20 + i * 15})`}>
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
