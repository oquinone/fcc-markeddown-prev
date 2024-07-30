import "./App.css";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import UnfoldLessIcon from "@mui/icons-material/UnfoldLess";
import { useMarkdownPreviewerHooks } from "./hooks";

const App = () => {
  const {
    prevRef,
    prevContainerRef,
    editorRef,
    editorContainerRef,
    editor,
    setEditor,
    preview,
    setPreview,
    data,
    setData,
  } = useMarkdownPreviewerHooks();

  return (
    <div className="app">
      <div id="editor-container" ref={editorContainerRef}>
        <div id="editor-header">
          <h4>Editor</h4>
          {!editor ? (
            <UnfoldMoreIcon
              id="unfold-icon"
              onClick={() => setEditor(!editor)}
            />
          ) : (
            <UnfoldLessIcon
              id="unfold-icon"
              onClick={() => setEditor(!editor)}
            />
          )}
        </div>
        <textarea
          id="editor"
          value={data}
          onChange={(e) => setData(e.target.value)}
          type="text"
          ref={editorRef}
        ></textarea>
      </div>
      <div id="preview-container" ref={prevContainerRef}>
        <div id="preview-header">
          <h4>Preview</h4>
          {!preview ? (
            <UnfoldMoreIcon
              id="unfold-icon"
              onClick={() => setPreview(!preview)}
            />
          ) : (
            <UnfoldLessIcon
              id="unfold-icon"
              onClick={() => setPreview(!preview)}
            />
          )}
        </div>
        <div id="preview" ref={prevRef}></div>
      </div>
    </div>
  );
};

export default App;
