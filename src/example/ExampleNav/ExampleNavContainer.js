import React, { Component } from 'react'
import ExampleNav from './ExampleNav.jsx'

const navs = {
  Navbar: [
    'ExampleNav'
  ],
}

class ExampleNavContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      root : true,
      links: Object.keys(navs)
    }

    this.onClick = this.onClick.bind(this)
    this.onBack = this.onBack.bind(this)
  }

  onClick(link) {
    this.setState({
      root: false,
      links: navs[link]
    })
  }

  onBack() {
    this.setState({
      root: true,
      links: Object.keys(navs)
    })
  }

  render() {
    const { links, root } = this.state
    const { onClick, onBack } = this

    if (root) {
      return React.createElement(ExampleNav, { links, onClick })
    } else {
      return React.createElement(ExampleNav, { links, onBack })
    }
  }
}

export default ExampleNavContainer