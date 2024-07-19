let joke = document.getElementById('jokeText');
let btn = document.getElementById('newJokeBtn');

const api = "https://v2.jokeapi.dev/joke/Any?blacklistFlag=nsfw,religious,political,racist,sexist,explicit&type=single";

 let Jokes = ()=> {
    fetch(api).then(res => res.json()).then(item =>{
       joke.innerText = item.joke;
    })
}
Jokes(); 
 btn.addEventListener('click' , Jokes);

// const getQuotes = async () => {
//     const api = "joke.json";
//     try {
//       let data = await fetch(api);
//       realData = await data.json();
//       getNewQuotes();
//       // console.log(realData);
//     } catch (error) {}
//   };
//   getQuotes();