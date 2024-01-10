const Root = document.getElementById("root");

const newDiv = React.createElement("div",{
  id:"mainDiv",
  children:[
    "parent",
    
    React.createElement("div",{className:"children",children:1,style:{backgroundColor:"red"}}),
    React.createElement("div",{className:"children",children:2,style:{backgroundColor:"green"}}),
    React.createElement("div",{className:"children",children:3,style:{backgroundColor:"blue"}}),
    React.createElement("div",{className:"children",children:4,style:{backgroundColor:"yellow"}}),
  ],
  style:{
    border:"2px solid black",
  }
})

const reactRoot = ReactDOM.createRoot(Root);
reactRoot.render(newDiv)