import React, { Component } from 'react'
import { Fragment } from 'react'
import Header from './Header'
import Footer from './Footer'

export default class Layout extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        const { children } = this.props
        return <Fragment>
            <Header />
            {children.content}
            <button onClick={children.buttonClick}>Composition Component</button>
            <Footer />
        </Fragment>
    }
}