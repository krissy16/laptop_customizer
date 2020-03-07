import React from 'react';
import Summary from '../Summary/Summary';

class Cart extends React.Component{
    render(){
      
          const total = Object.keys(this.props.selected).reduce(
            (acc, curr) => acc + this.props.selected[curr].cost,
            0
          );

        return(
            <section className="main__summary">
                <h2>Your cart</h2>
                <Summary 
                    selected={this.props.selected}
                    currency={this.props.currency}/>
                <div className="summary__total">
                <div className="summary__total__label">Total</div>
                <div className="summary__total__value">
                    {this.props.currency.format(total)}
                </div>
                </div>
            </section>
        )
    }
}

export default Cart