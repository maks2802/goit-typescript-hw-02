import s from "./ImageCard.module.css";

const ImageCard = ({ item, onImageClick }) => {
  return (
    <div>
      <img
        className={s.image}
        src={item.urls.small}
        alt="Image"
        onClick={() => onImageClick(item)}
      />
    </div>
  );
};

export default ImageCard;
