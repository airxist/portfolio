import React from "react";

const IconWrapper = ({
  iconElement: Icon,
  containerStyle,
  iconElementProps,
  imageUrl,
  imageStyle = 'object-cover object-center size-full',
  iconStyle = {}
}) => {
  return (
    <div className={containerStyle} style={iconStyle}>
      {Icon && <Icon {...iconElementProps} />}
      {imageUrl && (
        <img
          src={imageUrl}
          alt="icon"
          className={imageStyle}
        />
      )}
    </div>
  );
};

export default IconWrapper;
