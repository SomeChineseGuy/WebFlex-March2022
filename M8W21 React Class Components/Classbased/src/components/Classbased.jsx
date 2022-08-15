// const Classbased = (props) => {
  // const increase = () => {

  // }
  // const [mesage, setMessage] = useState("HEllo")
// const {info} = props;
// return (
//   <div>stuff</div>
// )
// }

import React from "react"

class Classbased extends React.Component {
  constructor() {
    super()
    this.state = {
      message: "Hello everyone",
      count: 0
    }
    this.increase = this.increase.bind(this)
  }

  increase() {
    // this.state.count += 1
    // this.setState({count: this.state.count + 1, massage: "Sleep"})
    this.setState(prev => ({count: prev.count + 1}))
  }

  render() {
    
    return(
      <div>
        <h1>My Count {this.state.count}</h1>
        <h3>{this.state.message}</h3>
        <button onClick={this.increase}>Increase</button>
        {/* <button onClick={this.setState({counter: this.state.count + 1})}>Increase</button> */}
      </div>
    )
  }
}

export default Classbased