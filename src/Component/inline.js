import React ,{ useState }from "react";


function Inline({array}) {
  const [count, setCount] = useState(0);
  const updates_likes=()=>{}
  return (
    <div class="d-flex flex-row bd-highlight mb-3" style={{'width':'100%'}}>
            {array && array.map((i,index) => {
              return (
      <div class="p-2 bd-highlight col-3 float-left" >
    <div class="card  ml-2 mr-2 mt-3 mb-3 shadow p-4 mb-4 bg-white">
      <img
        src={i.image}
        class="card-img-top rounded-circle"
        style={{ height: "300px" }}
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title" style={{ height: "60px" }}>
          {i.title}
        </h5>
        <pre
          class="card-text"
          style={{ "white-space": "pre-wrap", height: "40px" }}
        >
          {i.content}
        </pre>
        <div class="ml-2 mr-2 mt-3 float-left">{i.likes} Likes</div>
        <div class="float-left mt-2">
          <button type="button" class="btn btn-dark" onClick={updates_likes(index)}>
            Like
          </button>
        </div>
      </div>
    </div>
    </div>)})
}
</div>
  )
}


export default Inline;
