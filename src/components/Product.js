import React from 'react';

export default class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fav: false,
      order: 0
    }
  }

  render() {
    const className = this.state.fav ? 'hny-fav' : '';
    const altText = `Imagen de un ${this.props.value.title}`;
    return (
      <article className={className} style={{order: this.state.order}}>
        <img src={this.props.value.image} alt={altText} />
        <h3>${this.props.value.price}</h3>
      </article>
    );
  }

  onClick() {
    if (!this.state.fav) {
      this.setState({order: this.props.maxOrder});
      this.props.onFav();
    } else {
      this.setState({order: 0});
    }
    this.setState({fav: !this.state.fav});
  }
}
