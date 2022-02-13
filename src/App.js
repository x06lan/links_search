import Link_tabs from "./component/Link_tabs";
import Input_search from "./component/Input_search";
import React from "react";
import "./App.css";
import * as data from"./data.json"
import * as cat from"./category.json"
class App extends React.Component {
  render(){
  return (
    <div>
      <div className="header">
        <Input_search data={data.data}></Input_search>
      </div>
      <div className="content">
        <Link_tabs key={0} data={data.data} cat={cat.cat}></Link_tabs>
      </div>
    </div>
    
  );

  }
}

export default App;
