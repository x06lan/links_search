// import { time } from 'eslint/lib/util/timing';
import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './Link_tabs.css';

class Link_block extends React.Component{
  render(){
    if(this.props.data.icon==null){
      this.props.data.icon="https://cdn-icons-png.flaticon.com/512/16/16686.png"
    }
    return(
        <a href={this.props.data.href} className='link_block' target="_blank"  rel="noopener noreferrer">
          <img  src={this.props.data.icon} className='link_image'/>
          <h3 className='link_title'>
            {this.props.data.id}
            {this.props.data.name}
          </h3>
        </a>
      )
  }
}
class Link_list extends React.Component{
  
  render(){
    let links=[]
    links=this.props.cat.indata.map((item,index)=>{
      let tem=this.props.data[item]
      tem.id=item
      return tem
    })
    return(
      <div className='container'>
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
      let data=this.props.data
      let cat=this.props.cat
      return (
        <div>
          <Tabs>
            <TabList>
              {cat.map(function(item,index){
                  return <Tab key={index}>
                    <h2>
                    {item.name}
                    </h2>
                    </Tab>
              })}
              {/* <Tab>Title 2</Tab> */}
            </TabList>

              {cat.map(function(item,index){
                  return <TabPanel >
                    <Link_list key={index} data={data} cat={item}></Link_list>
                  </TabPanel>
              })}
            {/* <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel> */}
          </Tabs>
        </div>
    )
  }
}
export default Link_tabs;
