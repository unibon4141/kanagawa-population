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
          <p className="title">Kanagawa Visualizar</p>
          <p className="subtitle">Success subtitle</p>
        </div>
      </div>
    </header>
  );
}
function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>kanagawa visualizar</p>
      </div>
    </footer>
  );
}

export default App;
