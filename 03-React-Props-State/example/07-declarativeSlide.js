const SLIDE = {
  title: "React is declarative ",
  bullets: [
    "Imperative vs Declarative",
    "The browser API aren't fun to work with",
    "React allows us to write what we want, and the library will take care of the DOM manipulation",
  ]
}

function createSlide(slide){
  return(
    <div>
      <h1>{slide.title}</h1>
      <ul>
        {slide.bullets.map(bullet => <li>{bullet}</li>)}
      </ul>
    </div>
  )
}