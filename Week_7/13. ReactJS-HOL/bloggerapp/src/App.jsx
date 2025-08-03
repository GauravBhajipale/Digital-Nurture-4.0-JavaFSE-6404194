import React, { useState } from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  const [type, setType] = useState("book");

  // 1. Element variable
  let displayComponent;
  if (type === "book") {
    displayComponent = <BookDetails />;
  } else if (type === "blog") {
    displayComponent = <BlogDetails />;
  } else {
    displayComponent = <CourseDetails />;
  }

  return (
    <div>
      <h1>📘 Blogger App</h1>

      <div>
        <button onClick={() => setType("book")}>Book</button>
        <button onClick={() => setType("blog")}>Blog</button>
        <button onClick={() => setType("course")}>Course</button>
      </div>

      <hr />

      {/* 1. Using element variable */}
      {displayComponent}

      {/* 2. Ternary operator */}
      <h3>Ternary Rendering:</h3>
      {type === "book" ? <BookDetails /> : type === "blog" ? <BlogDetails /> : <CourseDetails />}

      {/* 3. Logical AND rendering */}
      <h3>Logical && Rendering:</h3>
      {type === "book" && <BookDetails />}
      {type === "blog" && <BlogDetails />}
      {type === "course" && <CourseDetails />}
    </div>
  );
}

export default App;
