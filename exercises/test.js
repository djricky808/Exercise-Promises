/**
 * TESTING IN NODE JS
 * You can test your functions/promises here. Make sure to remove the 'export' keyword
 * to be able to run the functions successfully with
 * ```node exercises/test.js```
 */

const promise1 = new Promise((res) => setTimeout(res, 4000, "RESOLVED AGAIN"));
const promise2 = Promise.reject("Promise 2 REJECTED");
const promise3 = Promise.resolve("Promise 3 RESOLVED");
const promise4 = new Promise((res) => setTimeout(res, 3000, "RESOLVED AGAIN"));
const promiseArr = [promise1, promise2, promise3, promise4];

const newPromiseArr = promiseArr.filter((promise) => {
  // Your code goes here...
  return promise;
});

const handlePromise4 = (arr) => {
  return Promise.race(arr)
    .then((val) => val)
    .catch((e) => e); }

console.log(handlePromise4(newPromiseArr));