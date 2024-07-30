import "./App.css";
import React, { useRef, useState, useEffect } from "react";
import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";

let defaultData =
  "\n# Welcome to my React Markdown Previewer!\
\n___\
\
\n## This is a sub-heading...\
\n___\
\n### And here's some other cool stuff:\
\
\
\nHeres some code, `<div></div>`, between 2 backticks.\
\
\n```\
\n// this is multi-line code:\
\n\
\nfunction anotherExample(firstLine, lastLine) {\
  \n\tif (firstLine == '```' && lastLine == '```') \t{\
    \n\t\treturn multiLineCode;\
    \n\t}\
  \n}\
    \n```\
\
\
\nYou can also make text **bold**... whoa!\
\n\nOr _italic_.\
\n\nOr... wait for it... **_both!_**\
\n\nAnd feel free to go crazy ~~crossing stuff out~~.\
\
\n\nThere's also [links](https://www.freecodecamp.org), and\
\n> Block Quotes!\
\
\n\nAnd if you want to get really crazy, even tables:\
\
\nWild Header | Crazy Header | Another Header?\
\n------------ | ------------- | -------------\
\nYour content can | be here, and it | can be here....\
\nAnd here. | Okay. | I think we get it.\
\
\n- And of course there are lists.\
\n  - Some are bulleted.\
\n     - With different indentation levels.\
\n        - That look like this.\
\
\
\n1. And there are numbered lists too.\
\n1. Use just 1s if you want!\
\n1. And last but not least, let's not forget embedded images:\
\
\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)\
\
";

const App = () => {
  const ref = useRef(null);
  const [data, setData] = useState(defaultData);

  useEffect(() => {
    if (ref.current) {
      ref.current.innerHTML = marked.parse(data);
    }
  }, [data]);

  return (
    <div className="app">
      <div id="editor-container">
        <div id="editor-header">
          <h4>Editor</h4>
        </div>
        <textarea
          id="editor"
          value={data}
          onChange={(e) => setData(e.target.value)}
          type="text"
        ></textarea>
      </div>
      <div id="preview-container">
        <div id="preview-header">
          <h4>Preview</h4>
        </div>
        <div id="preview" ref={ref}></div>
      </div>
    </div>
  );
};

export default App;
