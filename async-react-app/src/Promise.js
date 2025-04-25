import { useEffect, useState } from "react";

export const PromiseDemo = () => {

  const [result, setResult] = useState(null);
  useEffect(() => {
    const promise = new Promise((resolve, reject) => {
      console.log('resolve() :',typeof resolve);
      console.log('reject() :', typeof reject);
      resolve('완료');
    })
    promise.then(value => {
      console.log('Promise fulfilled with : ', value);
    })
    .catch(error => {
      console.log('Promise rejected with :', error);
    })
  }, 2000)

  return(
    <div>
      <h2>Promise 결과</h2>
      <p>Promise 결과 : {result || '로딩 중...'}</p>
    </div>
  )
}