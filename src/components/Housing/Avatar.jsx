export default function Avatar(props) {
  return (
    <div className="housing__avatar">
      <img
        src={props.PictureSrc}
        className="housing__avatar-image"
        alt="Visage"
      />
    </div>
  );
}
