import React from "react";

const DotsLoader = () => {
  return (
    <div className="flex h-6 items-center justify-start space-x-2">
      {[0, 1, 2].map((index) => (
        <div
          key={index}
          className={`size-3 animate-bounce rounded-full ${
            index === 0
              ? "bg-black dark:bg-white"
              : "bg-gray-300 dark:bg-gray-600"
          }`}
          style={{
            animationDelay: `${index * 0.3}s`,
          }}
        />
      ))}
    </div>
  );
};

export default DotsLoader;
