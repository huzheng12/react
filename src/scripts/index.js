import React, { Component } from 'react';
import Home from './views/home';
import Kpingcang from './components/pingcang';

class Index extends Component {
  componentDidMount() {
    console.log(0)
  }
  componentWillMount() {
    console.log(11)
  }
  render() {
    return (
      <div>

        <Home></Home>
        <Kpingcang></Kpingcang>

      </div>
    );
  }
}

export default Index;