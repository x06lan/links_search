import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './Link_tabs.css';

class Link_block extends React.Component{
  render(){
    // console.log(this.props.data.herf);
    return(
      <a href={this.props.data.herf} className='link_block'>
		    <img src={this.props.data.icon} className='link_image'/>
        <h4 className='link_title'>
          {this.props.data.name}
        </h4>
      </a>

    )
  }
}
class Link_list extends React.Component{
  
  render(){
    let links=[]
    links=this.props.cat.indata.map((item,index)=>{
      return this.props.data[item]
    })
    console.log(this.props.cat.name);
    console.log(links);
    
    return(
      <div className='container'>
        {
          links.map((item,index)=>{
            // console.log(item);
            // return <h3> {index}</h3>
            return <Link_block  key={index} data={item}></Link_block>
          })
        }
      </div>
    )
  }
}
class Link_tabs extends React.Component{
  render(){
    // console.log(this.props.cat)
    // console.log(this.props.data)
      let data=this.props.data
      let cat=this.props.cat
      return (
        <div>
          <Tabs>
            <TabList>
              {cat.map(function(item,index){
                  // console.log(item.name,index)
                  return <Tab key={index}>{item.name}</Tab>
              })}
              <Tab>Title 2</Tab>
            </TabList>

              {cat.map(function(item,index){
                  return <TabPanel >
                    <Link_list key={index} data={data} cat={item}></Link_list>
                  </TabPanel>
              })}
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
          </Tabs>
        </div>
    )
  }
}
export default Link_tabs;
