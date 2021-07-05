import React, { Component } from 'react';
import Display from './Display';
import Keypad from './Keypad';
import {evaluate} from 'mathjs';

class Calculator extends Component {
    constructor() {
        super();
        this.state = {
            result: '',
            resultLength: 0
        };
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.result.length !== this.state.result.length) {
           if (this.state.resultLength > 8) {
               this.ERR();
           }
        }
    }

    handleButtonClick = (buttonText) => {
        // console.log('buttonText');
if (buttonText === 'AC') {
    // console.log('izbrisi se');
    this.AC();
} else if (buttonText === 'C') {
   this.C();
} else if(buttonText === '=') {
        //   console.log('napravi operacija');
        this.calculate();
       } else {
        this.setState({
            result: this.state.result + buttonText,
            resultLength: this.state.result.length + 1
        });
       }
    };

    calculate = () => {
        // console.log(evaluate(2 * 2 +6 -5)); // example safest option
if (this.state.result === "") return;

        try {
            this.setState({
                result: evaluate(this.state.result).toString(),
            }, () => {
            //    console.log(this.state.result); 
            this.setState({
                resultLength: this.state.result.length,
            });
            });
        } catch (error) {
            // console.log(error);
            this.ERR();
        }
     };

    ERR = () => {      // ovaa funkcija izleguva koga imame poveke brojki vnese  od 8 vo rezultatot
        this.setState({
            result: 'err',
            resultLength: 0,
        });
    };

    AC = () => {
        this.setState({
            result: '',
            resultLength: 0,
        });
    };

    C = () => {
        if (this.state.result === 'err') {
             this.AC();
        } else {
            this.setState({
                result: this.state.result.slice(0, -1),
                resultLength: this.state.resultLength -1 
            });
        }
    };

    render() {
        return (
            <div className="Calculator">
                <Display value={this.state.result}/>
                <Keypad onButtonClick={this.handleButtonClick} />
            </div>
        );
    }
};

export default Calculator;
