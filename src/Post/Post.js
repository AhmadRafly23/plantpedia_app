import React from "react";
import "./Post.css"

function Post (props){
   return (
       <div className="body">
           <div className="card-info">
                <div>

                    <img src={props.img} className="image"/>
                    <p className="name">{props.nama}</p>
                </div>
           </div>
       </div>
   );
}

export default Post;