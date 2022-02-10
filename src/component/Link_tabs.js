import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

class Link_block extends React.Component{
  render(){
    return(
      <h3></h3>

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
            return <Link_block></Link_block>
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
      return (
      <Tabs>
        <TabList>
          {this.props.cat.cat.map(function(item,index){
              return <Tab key={index}>{item.name}</Tab>
          })}
          <Tab>Title 2</Tab>
        </TabList>

          {this.props.cat.cat.map(function(item,index){
              return <TabPanel key={index}>
                <Link_block key={index} data={data.data} cat={cat.cat}></Link_block>
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