import styles from '../index.module.css' // 模块化方式加载样式
import React, { useState, useEffect } from 'react'

export default function Lifecycle(props) {
    let [count, setCount] = useState(0)
    useEffect(() => { // componentDidMount, componentDidUpdate, componentDidUnmount
        console.log('count:', count)
        return
    }, [count])
    return (<div><button className={styles.counter} onClick={() => { setCount(count + 1) }}>{count}</button></div>)
}