import React from "react";

function PointsSummary({ pointCategories, attendedEventsByCategory }) {
  return (
    <div id="summary-container">
      {pointCategories.map((category) => {
        const eventCategory = attendedEventsByCategory.find(
          (item) => item.category === category
        );
        return (
          <div key={category} className="category-summary">
            <h3>{category}</h3>
            <p>{eventCategory ? eventCategory.points : 0}</p>
          </div>
        );
      })}
    </div>
  );
}

export default PointsSummary;
