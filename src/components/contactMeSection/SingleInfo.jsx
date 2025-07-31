import React from "react";

const SingleInfo = ({ text, label, Image }) => {
  return (
    <div className="flex gap-4 items-center justify-start">
      <Image className="text-3xl" />
      {text ? (
        <a
          href={text}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          {label}
        </a>
      ) : (
        <p>{label}</p>
      )}
    </div>
  );
};

export default SingleInfo;
