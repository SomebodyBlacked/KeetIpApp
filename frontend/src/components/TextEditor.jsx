import { useState, useEffect } from "preact/hooks";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const TextEditor = () => {
  const id = "67268e66e6fb533ad61b";
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(async () => {
    const res = await fetch(`http://localhost:3001/notes/${id}`);
    const data = await res.json();
    setTitle(data.title);
    setContent(data.content);
  }, []);

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }],
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link"],
      ["clean"],
    ],
  };

  function saveContent() {
    fetch(`http://localhost:3001/notes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content }),
    });
  }

  return (
    <>
      <div className="flex w-full gap-8">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input input-bordered input-primary w-full flex-1"
        />
        <button className="btn btn-primary" onClick={saveContent}>
          Save on cloud
        </button>
      </div>
      <div className="my-4"></div>
      <ReactQuill
        theme="snow"
        formats={["header", "bold", "italic", "underline", "list", "link"]}
        modules={modules}
        placeholder="Write something interesting man, idk, just write something cool"
        preserveWhitespace={true}
        style={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          width: "100%",
          height: "100%",
        }}
        onChange={setContent}
        value={content}
      />
    </>
  );
};

export default TextEditor;
