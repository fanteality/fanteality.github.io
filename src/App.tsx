import React, { Component } from 'react'
import RoutePart from './route'
import { observer, inject } from 'mobx-react'
import { HideBanner } from './store/type'
import { BrowserRouter as Router } from 'react-router-dom'

interface Iprops {
  hideBanner?: HideBanner
}

@inject('hideBanner')
@observer
export default class App extends Component<Iprops, {}> {
  render() {
    let { hide } = this.props.hideBanner!
    return (
      <div className="blog">
        <Router>
          <RoutePart hide={hide} />
        </Router>
      </div>
    )
  }
}
