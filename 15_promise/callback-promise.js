function getUser(userId){
  return new Promise((x, y)=>{
    setTimeout(()=>{
      // 1초 지나서 실행 할 내용
      try {
        const idol = {
          id : userId,
          name : '장원영',
        }
        x(idol);
      } catch (error) {
        y(error);
      }
    }, 1000);
  })
}

function getArticle(articleID){
  return new Promise((resolve, reject)=> {
    setTimeout(()=>{
      try {
        const articles = [
          {
            id : articleID,
            title : '장원영 첫 글',
          },
          {
            id : articleID,
            title : '장원영 두 번째 글',
          }
        ];
        resolve(articles);
      } catch (error) {
        reject(error);
      }
    },1000);
  })
}


function getComments(commentId){
  return new Promise((resolve, reject)=> {
    setTimeout(()=>{
      try {
        const comments = [
          {
            id : commentId,
            comment : '첫 댓글',
          },
          {
            id : commentId,
            comment : '두 번째 댓글',
          },
          {
            id : commentId,
            comment : '세 번째 댓글',
          }
        ];
        resolve(comments);
      } catch (error) {
        reject(error);
      }
    }, 1000)
  })
}


// Async : 비동기, await : 기다림...
// 늘 같이 다니는 짝...

getUser(10)
  .then((x) => {
    console.log(x);
    return getArticle(x.id);
  })
  .then((article) => {
    console.log(article);
    return getComments(article[0].id);
  })
  .then((comments)=>{
    console.log(comments);
  })
  .catch((err)=>{
    console.log('Error')
  })
  .finally(()=> console.log('Finally'));


async function runPromise(){
  await getUser(2)
    .then((user)=> {
      if(user != null){
        console.log('User : ' , user);
      } else {
        console.log('자료가 없어요');
      }
    })
}

runPromise();