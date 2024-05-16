// import React, { useState } from 'react';
// import axios from 'axios';

// const App = () => {
//   const [data, setData] = useState();

//   const onClick = async () => {
//     //async : 비동기 작업
//     try {
//       const response = await axios.get(
//         'https://newsapi.org/v2/top-headlines?country=kr&apiKey=e6777ed900de4616859add57b7ea0c35'
//       );
//       setData(response.data);
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   //get 요청
//   return (
//     <div>
//       <div>
//         <button onClick={onClick}>불러오기</button>
//       </div>
//       <div>
//         {data && (
//           <textarea
//             rows={7}
//             value={JSON.stringify(data, null, 2)}
//             readOnly={true}
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;

import React from 'react';
import NewsList from './components/NewsList';

const App = () => {
  return <NewsList />;
};

export default App;
