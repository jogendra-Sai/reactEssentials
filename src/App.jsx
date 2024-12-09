import { CORE_CONCEPTS, EXAMPLES } from "../data";
import { TabButtonsConstants } from "../data";
import Header from "./components/Header/Header";
import CoreConcepts from "./components/coreConcepts/CoreConcepts";
import TabButton from "./components/TabButton";
import { useState } from "react";

function App() {
  const [selectedTabName, setSelectedTabName] = useState();
  const onhandleClick = (tabName) => {
    setSelectedTabName(tabName);
  };
  let tabContent = <p>Please select a tab to show content.</p>;
  if (selectedTabName) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTabName].title}</h3>
        <p>{EXAMPLES[selectedTabName].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTabName].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcepts key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {TabButtonsConstants.map((item) => (
              <TabButton
                key={item.button}
                isSelected={selectedTabName === item.button}
                onSelect={() => onhandleClick(item.button)}
              >
                {item.label}
              </TabButton>
            ))}
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
