import React, {Component} from 'react';


export default class FilterString extends Component {

constructor() {
    super();

        this.state = {
            names: ['Jack', 'Jill', 'Bears', 'Beets', 'Battlestar', 'Galactica'] ,
            userInput: '',
            filteredNames: [],
        }

}

        handleChange(val) {
                this.setState(() => {
                    return {
                        userInput: val,
            }
        })
    }
        filterNames (input) {
            var names = this.state.names;
            var newArray = [];
            for(var i = 0; i < names.length; i++) {
                if (names[i].includes(input)) {
                    newArray.push(names[i])
                }
            }
            this.setState (() => {
            return {
                filteredNames: newArray,
            }
        })
    }
    
    render () {
        return (
            <div className='puzzleBox filterStringPB'>
            <h4>Filter String</h4>
            {/* <span className='puzzleText' >Name: {JSON.stringify(this.state.names)}</span> */}
            <input className='inputLine' onChange={e => this.handleChange(e.target.value)}/>
            <button className='confirmationButton' onCLick={this.filterNames(this.state.userInput)}>Filter</button>
            <span className='resultsBox filterStringRB'>Filtered Names: {JSON.stringify(this.state.filteredNames)}</span>
            </div>
        )
    }
}