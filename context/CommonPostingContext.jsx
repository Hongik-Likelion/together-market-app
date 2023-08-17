import React, { createContext, useState } from 'react';

// Context 생성
export const CommonPostingContext = createContext();

// Context Provider
export const CommonPostingProvider = ({ children }) => {
  const [marketExists, setMarketExists] = useState(false);
  const [shopExists, setShopExists] = useState(false);
  const [selectedTag, setSelectedTag] = useState(-1);
  const [reviewText, setReviewText] = useState("");

  const values = {
    marketExists,
    setMarketExists,
    shopExists,
    setShopExists,
    selectedTag,
    setSelectedTag,
    reviewText,
    setReviewText,
  };

//   console.log("Context Values:", values);
  return (
    <CommonPostingContext.Provider
        value={values}
    >
        {children}
    </CommonPostingContext.Provider>
  );
};