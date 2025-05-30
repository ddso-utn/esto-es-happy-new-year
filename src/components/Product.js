import React from 'react';

const  Product = (props) =>  {
    const className = this.state.fav ? 'hny-fav' : '';
    const altText = `Imagen de un ${this.props.value.title}`;
    return(
    <article className={className} style={{order: this.state.order}}>
        <img src={this.props.value.image} alt={altText} />
        <h3>${this.props.value.price}</h3>
      </article>
    );
}

export default Product; 