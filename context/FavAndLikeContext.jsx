import React, { createContext, useContext, useState } from 'react';

// Context 생성
const SharedStateContext = createContext();

// Context Provider
export const SharedStateProvider = ({ children }) => {
  const [favorite, setFavorite] = useState(false);
  const [userLike, setUserLike] = useState(false);
  const [likeCount, setLikeCount] = useState(0); // 초기값 설정

  return (
    <SharedStateContext.Provider
      value={{ favorite, setFavorite, userLike, setUserLike, likeCount, setLikeCount }}
    >
      {children}
    </SharedStateContext.Provider>
  );
};

// Context 사용을 쉽게 하기 위한 커스텀 훅
export const useSharedState = () => {
  return useContext(SharedStateContext);
};
