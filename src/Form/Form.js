import React from 'react';
import Features from '../Features/Features';

class Form extends React.Component{
    render(){
        return(
            <form className="main__form">
                <h2>Customize your laptop</h2>
                <Features 
                    features={this.props.features} 
                    selected={this.props.selected}
                    onUpdate={(update, newValue) => this.props.onUpdate(update,newValue)} 
                    currency={this.props.currency}/>
            </form>
        )
    }
}

export default Form