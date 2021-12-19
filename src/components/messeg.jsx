import React, {Component } from 'react';



export default class Messeg extends Component {

   constructor(props){
       super(props);
       this.state ={
           count: 0,
       }  
       this.add = this.add.bind(this);
       this.del = this.del.bind(this);
   };
   
    add(){
    this.setState({count: this.state.count + 1});
  };

   del(){
  let delnum = 10
    if(this.state.count > delnum){
      this.setState({count:this.state.count - delnum})
    }else {
        this.setState({count:0})
    }
  };
    
    render() {
        return (
            <div>
                 <h1>{this.state.count}</h1>
                 <button onClick= {this.add} >add</button>
                 <button onClick= {this.del} >del</button>
            </div>
        )
    }
}
