
import logo from './logo.svg';
import './App.css';
import Lottie from 'react-lottie';
import lottie from 'lottie-web'
import check from './check.json'
import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      isStopped: false, 
      isPaused: false
    }
  }

  onMouseOverHandle = () => {
    console.log('hover')
  }
  
  componentDidMount() {
    lottie.loadAnimation({
      container: this.checkRef, // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: check // the path to the animation json
    })
  }


  render() {
    
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: check,
    };

    return (
  
        <div>
      <header className="App-header">
        <div>
          <Lottie options={defaultOptions} 
          height={400} 
          width={400}
          ></Lottie>
        </div>
        <div ref={(ref) => this.checkRef = ref} onMouseOver={() => console.log('mouseOver')}></div>
      </header>
    </div>
    )
  }
}
