const bannedWord = (arr, str) => {
  let comment = arr.filter((el, idx) => {
    let answer = [];
    if (!el[idx['comment'] === str]) {
      answer.push(el[idx]);
      return answer;
    }
  })
  return comment;
}

let theArr = [{id: 1, comment: "This is bad"}, {id: 2, comment: "This is good"}];
let aStr = 'bad';

console.log(bannedWord(theArr, aStr));

const filteredWord = (arr,banned) => {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    let comment = arr[i].comment;
    let splitComment = comment.split(' ');
    if (!splitComment.includes(banned)){
      answer.push(arr[i]);
    }
  }
  return answer;
}

// console.log(filteredWord(theArr, aStr))
