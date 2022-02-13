import Link_tabs from "./component/Link_tabs";
import Input_search from "./component/Input_search";
import React from "react";
import "./App.css";
import * as data from"./data.json"
import * as cat from"./category.json"
// let data={"data": [
//       {
//         "name": "youtube",
//         "herf": "https://www.youtube.com/",
//         "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABx0lEQVQ4jZ2TQWtTQRDHfzO7yUsNKSG0heJJ0YKnCvVSkHrV7+BBeu7Vk9+lH8CLN6EXk4Lo1V48lGClFBELGmmSmr73djy8fS8vll4c+LO7s7OzM///LhQmBmrg+uDtZrgIBQQAKyf/YQbiBexFt9t9niSP7ji3umrW7og0UfWL0ZaOzGYjmBxn2c/BdPpJxuNz+vDwFxxnqmaqZs4V8L5AuS6haqmqXcDpO3jCEN4YmEFmkMcxrSCSGqSh8GcGIY52Am91Ce5HJ5EYBRwbG45222HmUHVS+DX2DhASuKu3oAeolGSqCiDs7gqHh8L2thCCxOQSbxFAO9BToClzNQSJokwmsLUFgwHs78P6eklnlQho6c0axUKbTVhZgUYjHpeqCwE8kMWFxYNF9uVlGA5hbw8ODuqJzajqnPENPtfYDxU2N4OtrRVzkVDfC0V8/h2G/g98AR7ESkJF8tFRcYdzkOf15iRW6y/hlD48voCz+BbmELFrvhrG8OMjPBOAV3D7qXM791R73Var00qSJRoNTyifB5Dn+eVsNv19dTX+mmWj93n+4SWciM1LKkmqy7RoImFBqPqPfH39K7t/4A18f74nAH8Bjm35s3ZkOjEAAAAASUVORK5CYII=",
//         "add_time": "1576056480"
//       },
//       {
//         "name": "Download Wallpaper Engine Wallpapers FREE: Anime",
//         "herf": "https://www.wallpaperenginefree.com/search/label/Anime#archive-page-2",
//         "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC6klEQVQ4jW2TX2iTZxTGf++bfPmSJi0NC12blW4m3ki1XdIbwbWQC9mNkGJXwSG7EbzaUPFKp7KxoVfq/LMLUQbzP6tu9XJaSp1bUSzOYpegtsFgFyyypqbfkqbJ9x0vorWo5+49PM8573nOeRTviMa7Y6eddCrOXCEkIoqG+lkVjY4X1nV/8SZWLX8EH/5zsnrl6jZxbJA3kQqlNd6eTwaerevZ9FaBxsnJ4erFCwmUwhKBxUXqTBMNWOUyGAYBrWuFIpHx+c2ffwygAYKT6ZPLyXG/n8u9vRTn57Hm5ji/YQOfvhfCchwQQTKZzuDw0CCAG6A68Nu2pc6VRVYGW+mLd5FqCVOqVIi3tfEom+X33DSW10cAqN66nQyItLsaHzw47UxMxC0RYn4/PS1h+lavpj38AX9PTVGwLD5qbgYRCv/NEvR4yJTLeABDSVg1nD1z18lmY1a5zOVkL31dXTVxvt6DNgw6TC/3ctMUjxzF53Yzkk6TOHeWQF0dKhTKuCkUQgB1pslnA7+QCod5MjMDhoH9zbcAbDx+jCujoyTWrCHx4wk8gUBNi3y+VYuIWlLTtilVFqnaNp2m+Xq9Xh+2bVOuVGBhAbcIYlkgojQN9bO8XNX5/n7ibR+yPhZjPJdj4/FjbD11ip/+/IPk2rVEmpq4tn0HxVKpNqZL59wqGh2XJ9MdGAY/j43x6HGW7lWrKB75gV9HR6naVQ5t2cJULsfVO3eYmHkKr34XWZlSAPUHD4jYNpY4UFog2dLC4Jdf8W8+T7lSIdLUxP5Ll/jur5vg9eF3uVBa4zpwcL0G8PZ0D6AUAaXB5+OZ43AjnaJ1316ie3Zz/f79WueXZAAVi488V2po6ZTrL164J5lMJyK1gyoW8dg2bqjNbJpLZKP5/cdzO3eteNtMw0OD1Vu3k+I4tYQ4iPX/az9pjYp1jsxv2px4pxsBAiLt7ps3vrdT6Q7J51sRUUrpHNEVKd3fd/i5MoaW418AhKtFsVX/Fv4AAAAASUVORK5CYII=",
//         "add_time": "1544260817"
//       },
//       {
//         "name": "臺灣大學-IBM量子電腦中心",
//         "herf": "htt// import Image_block_list from "./component/Image_block.js"
// import Icon_block_list from "./component/Icon_block.js"
// import Headeff from "./component/headline.js"p://quantum.ntu.edu.tw/#about",
//         "icon": null,
//         "add_time": "1576584969"
//       },
// ]}
// let cat ={
//   "cat":[
//     {name:"test1",indata:[0,1]},
//     {name:"test2",indata:[2]},
    
//   ]
// }
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
