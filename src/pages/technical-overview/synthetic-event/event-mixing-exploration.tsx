import React, { Component } from 'react'
import QR from 'images/qr.jpg'
import './synthetic-event.less'

interface IsProps {}
interface IsState {
    active: boolean
}

class EventMixingExploration extends Component<IsProps, IsState> {
    constructor(props: IsProps) {
        super(props)
        this.handleButtonClick = this.handleButtonClick.bind(this)
        this.cancelChangeActive = this.cancelChangeActive.bind(this)
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

        console.log(this.state.active)
        this.setState({
            active: false
        })
    }
    cancelChangeActive(e: { stopPropagation: () => void; }) {
        e.stopPropagation()
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
        return (
            <div className="qr-wrapper">
                <button
                    className="qr-button" 
                    onClick={this.handleButtonClick}>
                    二维码
                </button>
                <div 
                    className="qr-content"
                    style={{ display: this.state.active ? 'block' : 'none' }}
                    >
                    <img className="qr-image" src={QR} alt="qr"/>
                </div>
            </div>
        )
    }
}

export default EventMixingExploration
