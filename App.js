const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello World from React !"
);
console.log(heading); // object

// Nested Elements
// =======================================
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "hello from h1 tag"),
    React.createElement("h2", {}, "hello from h2 tag"),
  ])
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
