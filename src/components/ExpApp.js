import React from 'react';
import '../styles/ExpApp.css'

class ExpApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            num: 0,
            pow: 0,
            answ: null,
            info: 'Заполните поля',
            infoColor: 'info yel',
            flag1: false,
            flag2: false,
        };
        this.changePow = this.changePow.bind(this);
      }

    clickEvent = () => {       
        if(this.state.flag1 && this.state.flag2){
            let res = Math.pow(this.state.num,this.state.pow)
            this.setState({
                answ: res
            })
        }
    } 


    changeNum = (event) => {

        let num1 = event.target.value

        if(!isNaN(parseFloat(num1)) && isFinite(num1) && (num1 <= 99999999)){
            this.setState({
                num: num1,
                flag1: true
            })
            if(this.state.flag2){
                this.setState({
                    info: 'OK!',
                    infoColor: 'info green'
                })
            } else{
                this.setState({
                    info: 'Введите степень',
                    infoColor: 'info yel'
                })
            }
        } else{
            if(num1>99999999){
                this.setState({
                    info: 'Число должно быть меньше 99999999',
                    infoColor: 'info red',
                    flag1: false
                })
            } else{ 
                this.setState({
                    info: 'Число введено не корректно',
                    infoColor: 'info red',
                    flag1: false
                })
            }
        }
    }

    
    changePow = (event) => {

        let num1 = event.target.value

        if(!isNaN(parseFloat(num1)) && isFinite(num1) && (num1<=99999999)){
            this.setState({
                pow: num1,
                flag2: true
            })
            if(this.state.flag1){
                this.setState({
                    infoColor: 'info green',
                    info: 'OK!'
                })
            } else{
                this.setState({
                    infoColor: 'info yel',
                    info: 'Введите число'
                })
            }
        } else{
            if(num1>99999999){
                this.setState({
                    info: 'Степень должна быть меньше 99999999',
                    infoColor: 'info red',
                    flag2: false
                })
            } else{
                this.setState({
                    info: 'Степень введена не корректно',
                    infoColor: 'info red',
                    flag2: false
                })
            }
        }

    }

    render () {
        console.log('YES')
        return (
            <div className='content'>
                <label className='num'>{this.state.num}</label>
                <label className='pow'>{this.state.pow}</label>
                <button className='eql' onClick={this.clickEvent}>=</button>
                <label className='answer'>{this.state.answ}</label>
                <label className={this.state.infoColor}>{this.state.info}</label>
                <label className='numInfo'>Число:</label>
                <input className='inNum' onChange={this.changeNum}/>
                <label className='powInfo'>Степень:</label>
                <input className='inPow' onChange={this.changePow}/>
            </div>
        )
    }
    
}
export default ExpApp;