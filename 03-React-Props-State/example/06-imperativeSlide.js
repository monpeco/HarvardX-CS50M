const SLIDE = {
  title: "React is declarative ",
  bullets: [
    "Imperative vs Declarative",
    "The browser API aren't fun to work with",
    "React allows us to write what we want, and the library will take care of the DOM manipulation",
  ]
}

function createSlide(slide){
  const slideElement = document.createElement('div')
  const title = document.createElement('h1')
  title.innerHTML = SLIDE.title
  return slideElement
}