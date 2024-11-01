import { useState } from "preact/hooks";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const TextEditor = () => {
  const [content, setContent] = useState("");

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }],
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link"],
      ["clean"],
    ],
  };

  return (
    <ReactQuill
      theme="snow"
      formats={["header", "bold", "italic", "underline", "list", "link"]}
      modules={modules}
      placeholder="Write something idk man..."
      preserveWhitespace={true}
      style={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        width: "100%",
        height: "100%",
      }}
      onChange={function (x) {
        console.log(x);
        return setContent(x);
      }}
      value={content}
    />
  );
};

export default TextEditor;
