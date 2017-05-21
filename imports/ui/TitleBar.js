import React from 'react';
// install proptypes via meteor npm install prop-types
//this iis necessary for the new proptype declaration standard
import PropTypes from 'prop-types';


//common convention is to place each component within a ui folder inside of imports.

//JSX requires uppercase convention when working with components.

//props are added into an array of key-value pairs behind the scenes and do not require a declaration.
//you can see below that we access the title prop, passed in from client side main.js via the 
//this.props.title method.
export default class TitleBar extends React.Component{
  renderSubtitle(){
      if(this.props.subtitle){
          return <h3>{this.props.subtitle}</h3>
      }
  }
  
  render(){
    return (
      <div className = "title-bar">
          <div className = "wrapper">
            <h1>{this.props.title}</h1>
            {this.renderSubtitle()}
          </div>
      </div>
    );
  }
}

//while this below code is not required for the creation of props, this code helps to regulate the prop
//by ensuring that it is a specific datatype and whether or not it is Required.
TitleBar.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
}

//thiis below sets a default value for a title in the event that one is not provided.
TitleBar.defaultProps = {
    title: 'Default title'
}