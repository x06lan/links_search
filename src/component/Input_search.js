import React from 'react';
import './Input_search.css';
import MiniSearch from 'minisearch'
import * as data from '../data.json'
import { re } from 'mathjs';

class Input_search extends React.Component{
    render(){
        let trigger_time=new Date().getTime()
        let miniSearch = new MiniSearch({
            fields:["name","herf"],
            // storeFields:["href"],
            searchOptions: {
            fuzzy: 0.5
            }
        })
        let search_data=data.data.map((item,index)=>{
            item["id"]=index
            return item
        })
        miniSearch.addAll(search_data)
        // console.log(trigger_time)
        function search(){
            let text=document.querySelector("#input_search").value
            console.log(text)
            let results=miniSearch.search(text)
            results.sort((a,b)=>{
                return b.score-a.score
            })
            console.log(results[0])
        }
        function keydown_search(e){
            let now_time=new Date().getTime()
            if(e.which==13 || now_time-trigger_time>200){
                console.log("t")
                search()
                trigger_time=new Date().getTime()
            }
        }
        return(
            <div className='search_box'>
                <input id='input_search' className='input_search' onChange={keydown_search} onKeyUp={keydown_search}></input>
                <div className='btn_search'onClick={search}>
                    <input className='btn_image' type="image" src="./img/search.png" ></input>
                </div>

            </div>
        )
    }
}
export default Input_search;