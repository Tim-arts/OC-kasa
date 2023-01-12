function Banner(props) {
  return (
    <div className={props.BannerClass}>
      <img
        className={props.BannerClassImage}
        src={props.img}
        alt={props.alt}
      ></img>
      <p className={props.BannerClassText}>{props.BannerText}</p>
    </div>
  );
}

export default Banner;
