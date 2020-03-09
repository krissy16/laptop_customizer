import React from 'react';
import Options from '../Options/Options';
import './Features.css';

class Features extends React.Component{
    render(){ 
        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
      
            return (
              <fieldset className="feature" key={featureHash}>
                <legend className="feature__name">
                  <h3>{feature}</h3>
                </legend>
                <Options 
                  features={this.props.features} 
                  feature={feature}
                  selected={this.props.selected}
                  onUpdate={(update, newValue) => this.props.onUpdate(update,newValue)} 
                  currency={this.props.currency}/>
              </fieldset>
            );
          });
        return(
            <>
                {features}
            </>
        )
    }
}

export default Features