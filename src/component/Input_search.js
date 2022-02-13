import React from 'react';
import './Input_search.css';
import * as data from '../data.json'
import { max } from 'mathjs';

class Input_search extends React.Component{
    render(){
        let trigger_time=new Date().getTime()

        data.data.map((item,index)=>{
            // searchApi.indexDocument(index,item.name)
            // searchApi.indexDocument(index,item.href)
        })
        function search(open_link){
            let text=document.querySelector("#input_search").value
            console.log(text)
            // let data_score=[]
            let search_text=text.split(" ")
            let max_3=[[0,0,0]]

            for(let i =0;i<data.data.length;i++){
                let ele=data.data[i]
                let score=0
                for(let j =0;j<search_text.length;j++){
                    let key_word=search_text[j]
                    score+=15*ele.name.toLowerCase().split(key_word).length
                    score+=3*ele.href.toLowerCase().split(key_word).length
                    for (let k = 0; k < key_word.length-1; k+=2) {
                        let sk=key_word.slice(k,k+1)
                        score+=0.3*ele.name.toLowerCase().split(sk).length/ele.name.length
                        score+=0.2*ele.href.toLowerCase().split(sk).length/ele.href.length
                    }
                }
                if(score>max_3[max_3.length-1][0]){
                    max_3.push([score,ele.name,ele.href])
                }
            }
            console.log(max_3)
            if(open_link){
                let tem=document.createElement("a")
                tem.href=max_3[max_3.length-1][2]
                // tem.href=max_3[max_3.length-1][3]
                document.body.appendChild(tem)
                tem.click()
                document.body.removeChild(tem);
            }
        }
        function keydown_search(e){
            let now_time=new Date().getTime()
            if(e.which==13 || now_time-trigger_time>100){
                console.log("t")
                trigger_time=new Date().getTime()
                if (e.which==13){
                    search(true)
                }
                else{
                    search(false)
                }
            }
        }
        return(
            <div className='search_box'>
                <input id='input_search' className='input_search' onChange={keydown_search} onKeyUp={keydown_search}></input>
                <div className='btn_search'onClick={()=>{search(true)}}>
                    <input className='btn_image' type="image" src="./img/search.png" ></input>
                </div>
            </div>
        )
    }
}
export default Input_search;