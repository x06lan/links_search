import React from 'react';
import './Input_search.css';

class Input_search extends React.Component{
    render(){
        return(
            <div className='search_box'>
                <input id='input_search' className='input_search'></input>
                <button id='btn_search' className='btn_search'>搜索</button>
            </div>
        )
    }
}
export default Input_search;