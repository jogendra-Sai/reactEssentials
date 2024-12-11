import React,{useState} from "react";
import TabButton from "./TabButton";
import { TabButtonsConstants } from "../../data";
import { EXAMPLES } from "../../data";
import Section from "./Section";

const Examples = () => {
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
    <>
      <Section id="examples" title="Examples">
        <menu>
          {TabButtonsConstants.map((item) => (
            <TabButton
              key={item.button}
              isSelected={selectedTabName === item.button}
              onClick={() => onhandleClick(item.button)}
            >
              {item.label}
            </TabButton>
          ))}
        </menu>
        {tabContent}
      </Section>
    </>
  );
};

export default Examples;
