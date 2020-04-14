import React from "react";

function Card({index, title, image, content, likes, grid_left,
grid_right}) {
  const updates_likes=()=>{
    console.log("now it has to update this->"+index)
  }
  return (<React.Fragment>
    <div class={grid_left}></div>
      <div class="col-3">
        <div class="card  ml-2 mr-2 mt-3 mb-3 shadow p-4 mb-4 bg-white">
          <img
            src={image}
            class="card-img-top rounded-circle"
            style={{ height: "300px" }}
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title" style={{ height: "60px" }}>
              {title}
            </h5>
            <pre
              class="card-text"
              style={{ "white-space": "pre-wrap", height: "40px" }}
            >
              {content}
            </pre>
            <div class="ml-2 mr-2 mt-3 float-left">{likes} </div>
            <div class="float-left mt-2">
              <button type="button" class="btn btn-dark" onClick={updates_likes}>
                Like
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class={grid_right}></div>
    </React.Fragment>
  );
}

export default Card;
