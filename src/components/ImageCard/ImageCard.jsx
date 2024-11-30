import s from "./ImageCard.module.css";

const ImageCard = ({ onClick, description, likes, urls, imageSrc }) => {
  return (
    <div className={s.imageCard} onClick={onClick}>
      <img
        className={s.regularImage}
        src={imageSrc + "&h=260&crop=entropy"}
        height={260}
        alt={description}
      />
      <span>
        Likes: <span>{likes}</span>
      </span>
    </div>
  );
};

export default ImageCard;
