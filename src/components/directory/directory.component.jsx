import { Component } from "react";
import CategoryItem from "../category-item/category-item";
import "./directory.styles.scss";

class Directory extends Component {
  render() {
    return (
      <div className="categories-container">
        {this.props.categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    );
  }
}

export default Directory;
