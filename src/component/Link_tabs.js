import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

class Link_block extends React.Component{
  render(){
    return(
      <a href={this.props.data.href}>
		    <img src={this.props.data.icon}/>
        <h4>
          {this.props.data.name}
        </h4>
      </a>

    )
  }
}
class Link_list extends React.Component{
  
  render(){
    let links=[]
    links=this.props.cat.index.map((item,index)=>{
      return this.props.data[index]
    })
    return(
      <div>
        {
          links.map((item,index)=>{
            return <Link_block  key={index} data={item}></Link_block>
          })
        }
      </div>
    )
  }
}
class Link_tabs extends React.Component{
  render(){
    console.log(this.props.cat)
    console.log(this.props.data)
      let data=this.props.data
      let cat=this.props.cat
      return (
      <Tabs>
        <TabList>
          {cat.map(function(item,index){
              console.log(item.name,index)
              return <Tab key={index}>{item.name}</Tab>
          })}
          <Tab>Title 2</Tab>
        </TabList>

          {cat.map(function(item,index){
              return <TabPanel >
                <Link_block key={index} data={data} cat={item}></Link_block>
              </TabPanel>
          })}
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    )
  }
}
export default Link_tabs;
