import React, {Component} from 'react'
import emitter from './event'
import style from "./emit-event.less";

interface P {}
interface S {
}
interface LP {
    list: Array<LObject>
}
interface LObject {
    text: number,
    checked?: boolean
}
interface LIDefaultProps {
    checked: boolean
}
interface LIP {
    key: string,
    value: number,
    onChange: any,
    checked?: boolean

}
interface LS {
    list: Array<LObject>
}

function ListItem(props: LIP) {
    return (
        <li>
            <input
                type="checkbox"
                checked={props.checked}
                onChange={props.onChange}
            />
            <span>{props.value}</span>
        </li>
    )
}

class List extends Component<LP, LS> {
    constructor(props: LP) {
        super(props)

        this.state = {
            list: this.props.list.map((entry) => ({
                text: entry.text,
                checked: entry.checked || false
            }))
        }
    }

    onItemChange(entry: LObject) {
        const { list } = this.state

        this.setState({
            list: list.map(preEntry => ({
                text: preEntry.text,
                checked: preEntry.text === entry.text ? !preEntry.checked : preEntry.checked
            }))
        })

        emitter.emit('itemChange', entry)
    }

    render() {
        return(
            <ul>
                {this.state.list.map((entry, index) => (
                    <ListItem
                        key={`list-${index}`}
                        value={entry.text}
                        checked={entry.checked}
                        onChange={this.onItemChange.bind(this, entry)}
                    />
                ))}
            </ul>
        )
    }
}

class EmitEvent extends Component<P, S> {
    itemChange: any
    componentDidMount() {
        this.itemChange = emitter.on('itemChange', (data: Object) => {
            console.log(data)
        })
    }
    componentWillUnmount() {
        emitter.removeListener('itemChange', this.itemChange)
    }

    render() {
        return (
            <div className={style.wrapper}>
                <h1>没有嵌套关系的组件通信</h1>
                <List list={[{text: 1}, {text: 2}]} />
            </div>
        )
    }
}

export default EmitEvent
