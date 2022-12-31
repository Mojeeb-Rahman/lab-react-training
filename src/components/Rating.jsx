const Rating = (props) => {
  const fullStarCount = Math.round(Number(props.children));
  const emptyStarCount = 5 - fullStarCount;
  return (
    <div className="rating">
      {'★'.repeat(fullStarCount) + '☆'.repeat(emptyStarCount)}
    </div>
  );
};

export default Rating;
