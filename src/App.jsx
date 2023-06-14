//components import
import { Component} from "react"
import Input from "./Components/Input"
import Output from './Components/Output'


class App extends Component{
  constructor(props){
    super(props)
    this.state= { userName : "Abibi"
    }
  }
  newUsername = (e) =>{
    this.setState({
      userName: e.target.value
    })
  }

  
  render () {
    return(
      <div className=' flex flex-col gap-5 justify-center items-center h-screen bg-sky-700'>
      <Output userName =  {this.state.userName}/>
      <Input newName = {this.newUsername}/>
      </div>
   
    )
  }
};


export default App