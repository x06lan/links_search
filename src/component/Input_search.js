import React from 'react';
import './Input_search.css';

class Input_search extends React.Component{

    render(){
        function search(){
            let text=document.querySelector("#input_search").value
            // let text=document.querySelector("#input_search").value
            console.log(text)
        }
        return(
            <div className='search_box'>
                <input id='input_search' className='input_search'></input>
                <div className='btn_search'onClick={search}>
                    <input className='btn_image' type="image" src="./img/search.png"  ></input>
                </div>

            </div>
        )
    }
}
export default Input_search;