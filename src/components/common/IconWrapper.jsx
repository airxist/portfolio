import React from "react";

const IconWrapper = ({
  iconElement: Icon,
  containerStyle,
  iconElementProps,
  imageUrl,
}) => {
  return (
    <div className={containerStyle}>
      {Icon && <Icon {...iconElementProps} />}
      {imageUrl && (
        <img
          src={imageUrl}
          alt="icon"
          className="object-cover object-center size-full"
        />
      )}
    </div>
  );
};

export default IconWrapper;
