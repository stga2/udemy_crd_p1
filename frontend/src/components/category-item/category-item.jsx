import { Component } from "react";
import "./category-item.scss";

class CategoryItem extends Component {
  render() {
    const { id, title, imageUrl } = this.props.category;

    return (
      <div key={id} className="category-container">
        <div
          className="background-image"
          style={{
            backgroundImage: `url(${imageUrl})`
          }}
        />
        <div className="category-body-container">
          <h2>{title}</h2>
          <p>Shop Now</p>
        </div>
      </div>
    );
  }
}
export default CategoryItem;
