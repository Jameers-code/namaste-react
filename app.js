const parent=React.createElement("div",{id:"parent"},[

React.createElement("div",{id:"child"},[
    React.createElement("h1",{},"iam the h1 tag"),
        React.createElement("h2",{},"iam the h2 tag"),
]),
    React.createElement("div",{id:"child2"},[]
        React.createElement("hi",{},"iam the h1 tag"),
        React.createElement("hi",{},"iam the h1 tag"),
]);
    


console.log(parent);
const root =ReactDOM.createRoot(doucment.getElementById("root"));
root.render(parent);