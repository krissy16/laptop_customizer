import React from 'react';
import Summary from '../Summary/Summary';

import './Cart.css';
import Total from '../Total/Total';

class Cart extends React.Component{
    render(){
        return(
            <section className="main__summary">
                <h2>Your cart</h2>
                <Summary 
                    selected={this.props.selected}
                    currency={this.props.currency}/>
                <Total 
                    selected={this.props.selected}
                    currency={this.props.currency}/>
            </section>
        )
    }
}

export default Cart