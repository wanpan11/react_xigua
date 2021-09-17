import React, { Component } from 'react';

export default class index extends Component {
  state = {
    name: 'wanpan',
    age: 12,
    isMan: false,
    count: 0,
  };

  componentDidMount() {
    this.setState((prestate) => {
      prestate.name = 'cao';
      prestate.count += 1;
      //   return { ...prestate };
      // console.log('#1 ', prestate);
      return prestate;
    });
    console.log('#1 name count', this.state.name, this.state.count);

    this.setState((prestate) => {
      prestate.age = 18;
      prestate.count += 1;
      //   return { ...prestate };
      // console.log('#2 ', prestate);
      return prestate;
    });
    // console.log('#2 age count', this.state.age, this.state.count);

    /* setState 同步状态 */
    // setTimeout(() => {
    //   this.setState((prestate) => {
    //     prestate.isMan = true;
    //     prestate.count += 1;
    //     return prestate;
    //   });
    //   console.log('#3 ', this.state);
    // }, 0);
  }

  render() {
    return (
      <div>
        {this.state.name}
        {this.state.age}
        {this.state.count}
      </div>
    );
  }
}
