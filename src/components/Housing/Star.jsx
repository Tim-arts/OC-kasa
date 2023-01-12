export default function Star(props) {
  return (
    <>
      {[...Array(5)].map((x, index) => {
        const _index = ++index;
        return (
          <div className="star" key={_index}>
            <span className={_index <= props.StarRating ? 'active-star' : ''}>
              &#9733;
            </span>
          </div>
        );
      })}
    </>
  );
}
