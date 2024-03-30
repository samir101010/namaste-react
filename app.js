const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "i am h1 sibling"),
    React.createElement("h2", {}, "i am h2 sibling"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "i am h1 sibling"),
    React.createElement("h2", {}, "i am h2 sibling"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "i am h1 sibling"),
    React.createElement("h2", {}, "i am h2 sibling"),
  ])
);

console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
