const useFind = (data, searchQuery) => {
  if (!data || !searchQuery) {
    return data;
  }

  const lowerCaseQuery = searchQuery.toLowerCase();

  return data.filter((item) => {
    const title = item.title ? item.title.toLowerCase() : "";
    const description = item.description ? item.description.toLowerCase() : "";

    return title.includes(lowerCaseQuery) || description.includes(lowerCaseQuery);
  });
};

export default useFind;

// import { useEffect, useState } from "react";

// const useSearch = (data, searchQuery) => {
//   const [filteredData, setFilteredData] = useState(data);

//   useEffect(() => {
//     const query = searchQuery.toLowerCase();
//     const filtered = data.filter(
//       (item) => item.title.toLowerCase().includes(query) || item.genre.toLowerCase().includes(query),
//     );
//     setFilteredData(filtered);
//   }, [data, searchQuery]);

//   return filteredData;
// };

// export default useSearch;          ===> 데이터 타입중 null이 하나라도 있으면 에러나는 코드
