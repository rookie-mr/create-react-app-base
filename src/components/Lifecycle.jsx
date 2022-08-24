import React, { Component } from 'react'
import { connect } from 'react-redux'
// 注释掉的为已弃用的生命周期，新增两个getSnapshotBeforeUpdate、getDerivedStateFromProps
export default connect(
    state => ({ num: state}), // 把state映射到props，第二个参数为dispatch映射
    {
        add: () => ({type: 'ADD'})
    }
)(class Lifecycle extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    // UNSAFE_componentWillReceiveProps(nextProps) {

    // }
    // UNSAFE_componentWillMount() {

    // }
    componentDidMount() {

    }
    // UNSAFE_componentWillUpdate() {

    // }
    componentDidUpdate() {

    }
    shouldComponentUpdate() {
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log(prevProps, prevState)
        return null
    }
    static getDerivedStateFromProps(props, state) {
        console.log(props, state)
        return {}
    }
    render() {
        const {add}  = this.props
        console.log('props', this.props)
        return (<div>
            <button onClick={add}>react redux connect</button>
        </div>)
    }
})