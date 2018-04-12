import React, {Component} from 'react';

export default class Sums extends Component {

    constructor() {
        super();

        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }
    updateNumber1(val) {
        this.setState (() => 
        {return {
            number1: val
        }
    })
}
    updateNumber2(e) {
        this.setState (() => 
        {return {
            number2: e
        }
    })
}
    addition(num1,num2) {
        let solution = parseInt(num1 , 10) + parseInt( num2, 10)
        this.setState(() => {
            return {
                sum: solution
            }
        }
            
        )
    }
    
    render() {
        return (
            <div className='puzzleBox sumPB'>
            <h4>Sum</h4>
            <input className='inputLine'type='number'onChange={e1 => this.updateNumber1(e1.target.value)}/>
            <input className='inputLine'type='number'onChange={e2 => this.updateNumber2(e2.target.value)}/>
            <button className='confirmationButton' onClick={() => this.addition(this.state.number1,this.state.number2)}>Add</button>
            <span className='resultsBox'> Sum: {this.state.sum}</span>
            </div>
        )
    }
}
