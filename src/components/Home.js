import React from "react";
import AnujPhoto from "../assest/anuj photo.jpg"

const Home = () => {
    return(
        <div>
            <div className="flex items-center justify-around bg-red-500 ">
                <div>
                    <h1>Hello I'm</h1>
                    <h1>ANUJ BHALADHARE</h1>
                    <h1>FULL-STACK WEB-DEVLOPER</h1>
                </div>
               <div>
                  <img src={AnujPhoto} />
               </div>
            </div>

            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
        </div>
    )
}

export default Home;