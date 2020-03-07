import React from 'react';
 
import Form from '../Form/Form';
import Cart from '../Cart/Cart';

import './Main.css';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

class Main extends React.Component{
    state = {
        selected: {
          Processor: {
            name: '17th Generation Intel Core HB (7 Core with donut spare)',
            cost: 700
          },
          'Operating System': {
            name: 'Ubuntu Linux 16.04',
            cost: 200
          },
          'Video Card': {
            name: 'Toyota Corolla 1.5v',
            cost: 1150.98
          },
          Display: {
            name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
            cost: 1500
          }
        }
      };
    
      updateFeature = (feature, newValue) => {
        const selected = Object.assign({}, this.state.selected);
        selected[feature] = newValue;
        this.setState({
          selected
        });
      };

    render(){
        return(
            <main>
                <Form 
                    features={this.props.features} 
                    selected={this.state.selected}
                    onUpdate={(update, newValue) => this.updateFeature(update,newValue)} 
                    currency={USCurrencyFormat}/>
                <Cart 
                    selected={this.state.selected}
                    currency={USCurrencyFormat}/>
            </main>
        )
    }
}

export default Main