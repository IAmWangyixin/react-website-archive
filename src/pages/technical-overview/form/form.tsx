import React from 'react'
import style from './form.less'

interface P {}
interface S { 
    textValue: string,
    textareaValue: string,
    fruitArr: Array<string>,
    checkedValues: Array<string>,
    radioValue: string,
    area: Array<string>
}
type ValuesTypes = 'textValue' | 'textareaValue' | 'radioValue'

class Form extends React.Component<P, S> {
    constructor(props: P) {
        super(props)
        // this.handleTextChange = this.handleTextChange.bind(this)
        // this.handleTextareaChange = this.handleTextareaChange.bind(this)
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
        this.clickButton = this.clickButton.bind(this)
        // this.handleRadioChange = this.handleRadioChange.bind(this)
        this.handleAreaChange = this.handleAreaChange.bind(this)
        

        // react需控制表单的值，则需要增加onChange事件等。
        this.state = {
            textValue: 'test',
            textareaValue: '',
            fruitArr: [
                'apple',
                'banana',
                'strawberry'
            ],
            checkedValues: [], //复选框选中的值
            radioValue: '',
            area: []
        }
    }

    handleChange(name: ValuesTypes, e: any) {
        const { value } = e.target
        const obj = { ...this.state }
        obj[name] = value
        this.setState(obj)
    }

    /* handleTextChange(e: any) {
        this.setState({
            textValue: e.target.value
        })
    }
    handleTextareaChange(e: any) {
        this.setState({
            textareaValue: e.target.value
        })
    } */
    handleCheckboxChange(e: any) {
        const { checked, value } = e.target
        const { checkedValues } = this.state

        if (checked && checkedValues.indexOf(value) === -1) {
            checkedValues.push(value)
        } else {
            checkedValues.filter(item => item !== value)
        }

        this.setState({
            checkedValues
        })
    }
    /* handleRadioChange(e: any) {
        this.setState({
            radioValue: e.target.value
        })
    } */
    handleAreaChange(e: any) {
        const { options } = e.target
        const area = Object.keys(options)
                            .filter(i => options[i].selected === true)
                            .map(i => options[i].value)
        this.setState({
            area
        })
    }
    clickButton() {
        console.log('fruits lists checked value:', this.state.checkedValues)
        console.log('input value:', this.state.textValue)
        console.log('radio value:', this.state.radioValue)
    }
    render() {
        const {
                textValue, 
                textareaValue, 
                fruitArr, 
                checkedValues,
                radioValue,
                area
            } = this.state
        return (
            <div className={style.wrapper}>
                <h1>表单</h1>
                <p>
                    单行输入框：
                    <input
                        type="text" 
                        value={textValue} 
                        onChange={this.handleChange.bind(this, 'textValue')}
                        />
                </p>
                <p>
                    多行输入框：
                    <textarea 
                        value={textareaValue}
                        onChange={this.handleChange.bind(this, 'textareaValue')} 
                        />
                </p>
                <p>
                    受控组件：
                    <input 
                        type="text" 
                        value={textValue} 
                        onChange={(e) => {
                            this.setState({
                                textValue: e.target.value.toUpperCase()
                            })
                        }}/>
                </p>
                <p>
                    非受控组件：
                    <input 
                        type="text" 
                        defaultValue={textValue} 
                        onChange={(e) => {
                            this.setState({
                                textValue: e.target.value.toUpperCase()
                            })
                        }}/>
                </p>
                <div className={style.item}>
                    checkbox:
                    {
                        fruitArr.map(fruit => (
                            <label htmlFor={fruit} key={fruit}>
                                <input 
                                    type="checkbox"
                                    value={fruit}
                                    id={fruit}
                                    name="fruit"
                                    checked={checkedValues.indexOf(fruit) !== -1}
                                    onChange={this.handleCheckboxChange}
                                    />
                                {fruit}
                            </label>
                        ))
                    }
                </div>
                <div className={style.item}>
                    radio:
                    <input 
                        type="radio"
                        value="watchTV"
                        checked={radioValue === 'watchTV'}
                        onChange={this.handleChange.bind(this, 'radioValue')}
                        />
                    <span>watch TV</span>
                    <input 
                        type="radio"
                        value="coding"
                        checked={radioValue === 'coding'}
                        onChange={this.handleChange.bind(this, 'radioValue')}
                        />
                    <span>coding</span>
                </div>
                <div className={style.item}>
                    select:
                    <select 
                        name="area" 
                        multiple={true} 
                        value={area} 
                        onChange={this.handleAreaChange}
                        >
                        <option value="shanghai">上海</option>
                        <option value="beijing">北京</option>
                        <option value="chengdu">成都</option>
                    </select>
                </div>
                <button 
                    type="button"
                    onClick={this.clickButton}
                    >
                    查看值
                </button>
            </div>
        )
    }
}

export default Form
