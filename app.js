const element = React.createElement("h1", {id:"heading",xyz:"abc"} ,"React Heading Content");
console.log(element);  // return object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);

/* 
ReactElement(Object) -> Browser Understand:
*/