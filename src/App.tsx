import { inject, observer } from 'mobx-react'
import * as React from 'react';
import './App.css';
import { Store } from './store'

import logo from './logo.svg';

@inject('store')
@observer
class App extends React.Component<{ store?: Store }> {
  // constructor(props: Store) {
  //   super(props)
  //   this.store = props.store
  //   this.plus = this.store.plus
  //   this.minus = this.store.minus
  // }

  public render(): JSX.Element {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {this.props.store!.text}
        </p>
        <button onClick={this.minus}>-</button>
        <p>{this.props.store!.num}</p>
        <button onClick={this.plus}>+</button>
      </div>
    );
  }

  private minus = () => {
    this.props.store!.minus()
  }

  private plus = () => {
    this.props.store!.plus()
  }
}

export default App;
