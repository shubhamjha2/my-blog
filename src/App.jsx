// src/App.jsx
import React, { useState } from "react";
import { Editor, EditorTools } from "@progress/kendo-react-editor";
import "@progress/kendo-theme-default/dist/all.css";  // Import Kendo UI theme
import "./App.css";
const {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Subscript,
  Superscript,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Indent,
  Outdent,
  OrderedList,
  UnorderedList,
  Undo,
  Redo,
  FontSize,
  FontName,
  FormatBlock,
  Link,
  Unlink,
  InsertImage,
  ViewHtml,
  InsertTable,
  AddRowBefore,
  AddRowAfter,
  AddColumnBefore,
  AddColumnAfter,
  DeleteRow,
  DeleteColumn,
  DeleteTable,
  MergeCells,
  SplitCell
} = EditorTools;

const App = () => {
  const [blogContent, setBlogContent] = useState("<h1>Your blog content here...</h1>");

  const handleContentChange = (e) => {
    setBlogContent(e.html);
  };

  const handleSave = () => {
    console.log("Saved Blog Content:", blogContent);
    alert("Blog content saved!");
  };

  return (
    <div className="juscen" style={{ padding: "20px", maxWidth: "900px", margin: "0 auto" }}>
      <h1>Create a New Blog Post</h1>
      <div style={{ marginBottom: "15px" }}>
        <label htmlFor="blogTitle" style={{ display: "block", marginBottom: "5px" }}>Blog Title:</label>
        <input
          type="text"
          id="blogTitle"
          name="blogTitle"
          placeholder="Enter your blog title"
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "16px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            marginBottom: "20px"
          }}
        />
      </div>

      <Editor
        tools={[
          [Bold, Italic, Underline, Strikethrough],
          [Subscript, Superscript],
          [AlignLeft, AlignCenter, AlignRight, AlignJustify],
          [Indent, Outdent],
          [OrderedList, UnorderedList],
          FontSize,
          FontName,
          FormatBlock,
          [Undo, Redo],
          [Link, Unlink, InsertImage, ViewHtml],
          [InsertTable],
          [AddRowBefore, AddRowAfter, AddColumnBefore, AddColumnAfter],
          [DeleteRow, DeleteColumn, DeleteTable],
          [MergeCells, SplitCell]
        ]}
        contentStyle={{ height: 630 }}
        defaultContent={blogContent}
        onChange={handleContentChange}
      />

      <button
        onClick={handleSave}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer"
        }}
      >
        Save Blog
      </button>
    </div>
  );
};

export default App;
