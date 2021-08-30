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
      <div class="hero is-success">
        <div class="hero-body">
          <p class="title">Kanagawa Visualizar</p>
          <p class="subtitle">Success subtitle</p>
        </div>
      </div>
    </header>
  );
}
function Footer() {
  return (
    <footer class="footer">
      <div class="content has-text-centered">
        <p>kanagawa visualizar</p>
      </div>
    </footer>
  );
}

export default App;
