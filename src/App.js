import React from "react";
import axios from "axios";

import Card from "./Component/card";
import Inline from "./Component/inline";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: [],
      grid_left:"",
      grid_right:"",
      in_Line:false,
      two:false,
      three:false
    };
  }
  four=(e)=>{
    e.preventDefault()
    this.setState({
      grid_left:"",
      grid_right:"",
      in_Line:false
    })
  }
  three=(e)=>{
    e.preventDefault()
    this.setState({
      grid_left:"",
      grid_right:"col-1",
      in_Line:false,
    })
  }  
  two=(e)=>{
    e.preventDefault()
    this.setState({
      grid_left:"col-2",
      grid_right:"col-1",
      in_Line:false
    })
  }
  one=(e)=>{
    e.preventDefault()
    this.setState({
      grid_left:"col-4",
      grid_right:"col-5",
      in_Line:false
    })
  }

  in_line=(e)=>{
    e.preventDefault()
    this.setState({
      in_Line:true
    })
  }

  componentDidMount() {
    axios
      .get("http://www.json-generator.com/api/json/get/cgBxyvNvci?indent=2")
      .then(a => {
        const persons = a.data.reverse();
        this.setState({ details: [...persons] });
      });
  }

  render = () => {
    return (
      <body style={{ 'margin': '0'}}>
        <nav class="navbar navbar-dark bg-dark nav" style={{ 'width': '100%'}}>
        <form class="form-inline">
        <button class="btn btn-dark" onClick={this.four}>4</button>
        <button class="btn btn-dark" onClick={this.three}>3</button>
        <button class="btn btn-dark" onClick={this.two}>2</button>
        <button class="btn btn-dark" onClick={this.one}>1</button>
        <button class="btn btn-light ml-2" onClick={this.in_line}>Inline</button>
        </form>
        </nav>
        {this.state.in_Line?<Inline array={this.state.details}></Inline>:
        <div class="row ml-2 mr-2 mt-2">
          {this.state.details &&
            this.state.details.map((i,index) => {
              return (
                <React.Fragment>
                
                    <Card
                      index={index}
                      title={i.title}
                      image={i.image}
                      content={i.content}
                      likes={i.likes}
                      grid_left={this.state.grid_left}
                      grid_right={this.state.grid_right}
                    />
                    </React.Fragment>
              );
            })}
        </div>}
      </body>
    );
  };
}

export default App;
