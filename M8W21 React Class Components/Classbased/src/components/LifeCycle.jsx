import React from "react";

class LifeCycle extends React.Component {
  constructor() {
    super()
    this.state = {
      searchTerm: "",
      interval: null
    }
  }

  // Anything you need to call ONE TIME;
  // API call, connecting web socket
  // useEffect(() => {}, [])
  componentDidMount() {
    console.log("The Component has Mounted")
    const interval = setInterval(() => {
      console.log("This is working")
    }, 1000)

    this.setState({interval})
  }

  // This fire when a component receive new props or state
  // useEffect(() => {}, [state])
  componentDidUpdate(prevProps, prevState) {
    console.log("This is an Update")
  }

  // Clean up
  // When the component un renders
  // // useEffect(() => { return clean }, [])
  componentWillUnmount() {
    console.log("This is unmount")
    clearInterval(this.state.interval);
  }

  render () {
    return(
      <div>
        <h2>Life Cycle</h2>
        <input type="text" onChange={e => this.setState({searchTerm: e.target.value})} />
        <h3>Your search term: {this.state.searchTerm}</h3>
      </div>
    )
  }
} 

export default LifeCycle;