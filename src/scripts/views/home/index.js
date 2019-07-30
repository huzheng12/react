import React, { Component } from 'react';
import './index.scss'
import Zback from '../../components/zuoyi';
class Home extends Component {
  constructor() {
    super()
    this.state = {
      log: require("../../img/logo.png")
    }
  }
  render() {
    const {
      log
    } = this.state
    return (
      <div className="home-wap">
        <div className="home-heds">
          <div style={{ overflow: "hidden" }}>
            <img style={{ width: 89, height: 26, marginTop: 12, marginLeft: 20 }} src={log} alt="" />
          </div>
        </div>
        <div style={{ width: "100%", height: 20, background: "rgba(235,235,235,1)" }}>

        </div>
        <Zback></Zback>
      </div>
    );
  }
}

export default Home;