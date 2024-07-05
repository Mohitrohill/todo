import React  from "react";
const Hi =()=>{
return(<>
<div className="container">
      <div className="box">
        <h1>TODO</h1>
      </div>
      <div className="tasklist">
        <h4>Task list</h4>
        <p>3/6 done</p>
      </div>
      <div className="checkitmes">
        <div className="first">
        <i class="fa fa-bars"/>
          <input type="checkbox" />
          <p>
            <strike>identity and contextualize the problem</strike>
          </p>
        </div>
        <div className="first">
        <i class="fa fa-bars"/>
          <input type="checkbox" />
          <p>
            <strike>identity and contextualize the problem</strike>
          </p>
        </div>
        <div className="first">
        <i class="fa fa-bars"/>
          <input type="checkbox" />
          <p>
            <strike>identity and contextualize the problem</strike>
          </p>
        </div>
        <div className="first">
        <i class="fa fa-bars"/>
          <input type="checkbox" />
          <p>identity and contextualize the problem</p>
        </div>
      </div>
      <button className="taskbtn">+ Add Task</button>
    </div>
    </>








)
}


export default Hi;
