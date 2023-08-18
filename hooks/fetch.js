import { useEffect, useState } from 'react';

/**
 * 단순 데이터 fetch용 custom hook
 * @param {func} callback data를 fetch 하는 api 함수
 * @returns
 * isLoading: 로딩 여부
 * isError: 에러 발생 여부
 * data: fetch 성공한 데이터
 */
function useFetchData(callback) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetch = async () => {
    try {
      const response = await callback();
      setData(response.data);
      setIsError(false);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setIsError(true);
    }
  };

  useEffect(() => {
    console.log('fetch');
    setIsLoading(true);
    fetch();
  }, []);

  return [isLoading, isError, data];
}

export { useFetchData };
