import { FC } from "react";
import { Image } from "../../types";
import s from "./ImageCard.module.css";

interface ImageCardProps {
  item: Image;
  onImageClick: (image: Image) => void;
}

const ImageCard: FC<ImageCardProps> = ({ item, onImageClick }) => {
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
