import React from "react";

const InputField = ({
  containerStyle,
  type = "text",
  name,
  label,
  placeholder,
  handleInput,
  value,
  inputStyle,
}) => {
  return (
    <div className={containerStyle}>
      <label htmlFor={name} className="text-sm font-avenir md:text-base">
        {label} *
      </label>
      {type === "text-box" ? (
        <textarea
          className={inputStyle}
          placeholder={placeholder}
          value={value}
          onInput={handleInput}
          name={name}
        />
      ) : (
        <>
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            onInput={handleInput}
            value={value}
            className={inputStyle}
          />
          <div className="h-4 text-xs text-[var(--soft-red)]">
            {!value.length && <p>{placeholder}</p>}
          </div>
        </>
      )}
    </div>
  );
};

export default InputField;
