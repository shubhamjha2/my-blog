// src/BlogEditor.jsx
import React, { useState } from "react";
import { Editor, EditorTools } from "@progress/kendo-react-editor";
import "@progress/kendo-theme-default/dist/all.css";


// Importing Editor tools for formatting
const {
  Bold, Italic, Underline, Strikethrough, Subscript, Superscript, ForeColor, BackColor, 
  FontSize, FontName, FormatBlock, AlignLeft, AlignCenter, AlignRight, AlignJustify, 
  Indent, Outdent, OrderedList, UnorderedList, Undo, Redo, Link, Unlink
} = EditorTools;

const BlogEditor = () => {
  const [content, setContent] = useState("");

  const handleContentChange = (e) => {
    setContent(e.html);  // This will save the HTML content
  };

  return (
    <div className="blog-editor-container">
      <h2>Create a Blog Post</h2>
      <Editor
        tools={[
          [Bold, Italic, Underline, Strikethrough],
          [Subscript, Superscript],
          [ForeColor, BackColor],
          [FontSize, FontName],
          [FormatBlock],
          [AlignLeft, AlignCenter, AlignRight, AlignJustify],
          [Indent, Outdent],
          [OrderedList, UnorderedList],
          [Undo, Redo],
          [Link, Unlink]
        ]}
        contentStyle={{ height: 400 }}
        defaultContent={content}
        onChange={handleContentChange}
      />
      <button onClick={() => console.log(content)}>Save Blog</button>
    </div>
  );
};

export default BlogEditor;
