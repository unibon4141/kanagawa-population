import * as d3 from "d3";
import KanagawaMap from "./KanagawaMap";
import OverallGraph from "./OverallGraph";
import "bulma/css/bulma.css";
function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

function Main() {
  const colorScale = d3.scaleOrdinal(d3.schemeCategory10);
  return (
    <div>
      <OverallGraph scale={colorScale} />
      <KanagawaMap scale={colorScale} />
    </div>
  );
}

function Header() {
  return (
    <header>
      <div className="hero is-success">
        <div className="hero-body">
          <p className="title">Kanagawa-Vis</p>
          <p className="subtitle">
            神奈川県の人口と世帯平均人数の推移、市区町村ごとの人口の推移を可視化
          </p>
        </div>
      </div>
    </header>
  );
}
function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>Kanagawa-Vis</p>
      </div>
    </footer>
  );
}

export default App;
