const backimg = "https://image.tmdb.org/t/p/w500"
const genre ="https://api.themoviedb.org/3/genre/movie/list?language=en"
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MmJmZjdlYTE3NDc0ODA0Y2FhZDM0ZjhkYTlmNDU1YiIsIm5iZiI6MTczMzUzMDI4Mi4yMTI5OTk4LCJzdWIiOiI2NzUzOTJhYWFiNmNjM2E0YzhmYzlhOTkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.sJiDaZY2U5HbEU8YIxyzsSA4hNU8VTqAPd-iwLmEOmg'
  }
};
// fetch('https://api.themoviedb.org/3/account/21674180/watchlist/movies?language=en-US&page=1&sort_by=created_at.asc', options)
// .then((res) => res.json())
// .then(({results}) => {
//   console.log(results)
//   const title1 = document.getElementById("title1")
//   const title2 = document.getElementById("title2")
//   const title3 = document.getElementById("title3")
//   const title4 = document.getElementById("title4")
//   const dis1 = document.getElementById("dis1")
//   const dis2 = document.getElementById("dis2")
//   const dis3 = document.getElementById("dis3")
//   const dis4 = document.getElementById("dis4")
//   for (let i = 0; i < results.length; i++) {
//     title1.innerHTML=`${results[0].title}`
//     title2.innerHTML=`${results[1].title}`
//     title3.innerHTML=`${results[2].title}`
//     title4.innerHTML=`${results[3].title}`
//     dis1.innerHTML=`${results[0].overview}`
//     dis2.innerHTML=`${results[1].overview}`
//     dis3.innerHTML=`${results[2].overview}`
//     dis4.innerHTML=`${results[3].overview}`
//   }
// })



fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
  .then(res => res.json())
  .then((data) => {
    console.log(data)
    
    const p = document.getElementById("con")

   const posterCards =  data.results.map((movie)=> {
      return `
        <div id="con1">
        <a href="film.html" target="blank"><img id="sec2-img" src="${backimg + movie.poster_path}"></a>
        <p id="sec2-title">${movie.title}</p>
        <p id="sec2-rating">&#11088;${movie.vote_average}<span class="material-symbols-outlined">
bookmark
</span><span id="material-symbols-outlined">favorite</span></p>
        </div>`
      })
      p.innerHTML = posterCards
  })

  let scrollbar = document.getElementById("con")
  let next1 = document.getElementById("next1")
  let prev1 = document.getElementById("prev1")

  next1.addEventListener("click", () => {
    scrollbar.style.scrollBehavior="smooth"
    scrollbar.scrollLeft +=300
  })
  prev1.addEventListener("click", () => {
    scrollbar.style.scrollBehavior="smooth"
    scrollbar.scrollLeft -=300
  })


  fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
  .then(res => res.json())
  .then((data) => {
    console.log(data)
    const lay = document.getElementById("yup")

    const posterCards =  data.results.map((movie)=> {
       return `
         <div id="yup1">
         <a href="film.html"><img id="sec2-img" src="${backimg + movie.poster_path}"></a>
         <p id="sec2-title">${movie.title}</p>
         <p id="sec2-rating">&#11088;${movie.vote_average}<span class="material-symbols-outlined">
bookmark
</span><span class="material-symbols-outlined">favorite</span></p>
         </div>`
       })
       lay.innerHTML = posterCards
  })

  let scrollbar1 = document.getElementById("yup")
  let next2 = document.getElementById("next2")
  let prev2 = document.getElementById("prev2")

  next2.addEventListener("click", () => {
    scrollbar1.style.scrollBehavior="smooth"
    scrollbar1.scrollLeft +=300
  })
  prev2.addEventListener("click", () => {
    scrollbar1.style.scrollBehavior="smooth"
    scrollbar1.scrollLeft -=300
  })

  fetch('https://api.themoviedb.org/3/account/21674180/favorite/tv?language=en-US&page=1&sort_by=created_at.asc', options)
  .then(res => res.json())
  .then((data) => {
    console.log(data)
    const run = document.getElementById("hit")
        const posterCards =  data.results.map((movie)=> {
       return `
         <div id="hit1">
         <a href="series.html"><img id="sec2-img" src="${backimg + movie.poster_path}"></a>
         <p id="sec2-title">${movie.name}</p>
         <p id="sec2-rating">&#11088;${movie.vote_average}<span class="material-symbols-outlined">
bookmark
</span><span class="material-symbols-outlined">favorite</span></p>
         </div>`
 
       })
       run.innerHTML = posterCards
    
  })

  let scrollbar2 = document.getElementById("hit")
  let next3 = document.getElementById("next3")
  let prev3 = document.getElementById("prev3")

  next3.addEventListener("click", () => {
    scrollbar2.style.scrollBehavior="smooth"
    scrollbar2.scrollLeft +=500
  })
  prev3.addEventListener("click", () => {
    scrollbar2.style.scrollBehavior="smooth"
    scrollbar2.scrollLeft -=300
  })

  fetch('https://api.themoviedb.org/3/account/21674180/favorite/movies?language=en-US&page=1&sort_by=created_at.asc', options)
  .then(res => res.json())
  .then((data) => {
    console.log(data)
    const run1 = document.getElementById("hi")
    const posterCards =  data.results.map((movie)=> {
      return `
        <div id="hi1">
        <a href="film.html"><img id="sec2-img" src="${backimg + movie.poster_path}"></a>
        <p id="sec2-title">${movie.title}</p>
        <p id="sec2-rating">&#11088;${movie.vote_average} <span class="material-symbols-outlined">
bookmark
</span><span class="material-symbols-outlined">favorite</span></p>
        </div>`
      })
      run1.innerHTML = posterCards
  })

  let scrollbar3 = document.getElementById("hi")
  let next4 = document.getElementById("next4")
  let prev4 = document.getElementById("prev4")

  next4.addEventListener("click", () => {
    scrollbar3.style.scrollBehavior="smooth"
    scrollbar3.scrollLeft +=300
  })
  prev4.addEventListener("click", () => {
    scrollbar3.style.scrollBehavior="smooth"
    scrollbar3.scrollLeft -=300
  })

      //  let like = document.getElementById("like1")
      //  let fav = document.getElementById("fav")
      //    like.addEventListener("click", () =>{
      //    like.style.color="red"
      //  })

  let input = document.querySelector(".input")
  let search = document.querySelector(".search")
  search.addEventListener("click", () =>{
    search.style.height="14px"
    search.style.marginLeft="-35px"
    search.style.marginTop="10px"
    input.classList.toggle("dis")
    
    // input.style.display="flex"
    // if (input.style.display="flex") {
    //   search.addEventListener("click", () =>{
    //     search.style.height="30px"
    //     input.style.display="none"
    //   })
    // }
  })

  // const react = document.querySelectorAll("material-symbols-outlined")
  // let fav = document.getElementById("fav")
  // react.addEventListener('click', () => {
  // fav.style.display="flex"
  // })
