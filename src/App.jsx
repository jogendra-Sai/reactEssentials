import Examples from "./components/Examples";
import Header from "./components/Header";
import CoreConceptsMain from "./components/CoreConceptsMain";

function App() {
  return (
    <div>
      <Header />
      <main>
        <CoreConceptsMain />
        <Examples/>
      </main>
    </div>
  );
}

export default App;
