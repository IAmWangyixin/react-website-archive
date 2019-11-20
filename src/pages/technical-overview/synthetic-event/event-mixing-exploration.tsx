import React, { Component } from 'react'
import styles from './synthetic-event.less'
import classNames from 'classnames'
import QR from 'images/qr.jpg'

interface IsProps {}
interface IsState {
    active: boolean
}

class EventMixingExploration extends Component<IsProps, IsState> {
    constructor(props: IsProps) {
        super(props)
        this.handleButtonClick = this.handleButtonClick.bind(this)
        // this.handleImageClick = this.handleImageClick.bind(this)
        this.bodyClick = this.bodyClick.bind(this)

        this.state = {
            active: false
        }
    }
    bodyClick(e: any) {
        if (e.target && (e.target.matches('img.qr-image') || e.target.matches('button.qr-button'))) {
            return;
        }
        
        this.setState({
            active: false
        })
    }
    componentDidMount() {
        document.body.addEventListener('click', this.bodyClick)
    }
    componentWillUnmount() {
        document.body.removeEventListener('click', this.bodyClick)
    }
    handleButtonClick() {
        console.log('button',this.state.active)
        this.setState({
            active: !this.state.active
        })
    }
    // handleImageClick(e: { stopPropagation: () => void; }) {
    //     console.log(111)
    //     e.stopPropagation()
    // }
    render() {
        const contentClassName = classNames({
            [styles.hideContent]: !this.state.active,
            [styles.showContent]: this.state.active
        });
        return (
            <div className={styles.wrapper}>
                <h1>合成事件与原生事件探索</h1>
                <button
                    className={styles.button}
                    onClick={this.handleButtonClick}>
                    二维码
                </button>
                <div 
                    className={contentClassName}
                    >
                    <img className={styles.image} src={QR} alt="qr"/>
                </div>
            </div>
        )
    }
}

export default EventMixingExploration
