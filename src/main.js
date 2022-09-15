import "./style.css";
/* Import af Motion One bibliotek */
import { animate, stagger, inView, scroll, timeline } from "motion";

animate("h1", { opacity: [0, 1] }, { duration: 5 });

//section2 





//section 3

animate(".myScale" ,
   {scale: [1, 0.8, 1,] }, 
   {duration: 3, repeat: Infinity, }
 )

//play css animation when object in view

const observer = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('tracking-in-expand');
    }
  });
});
//select element to animate in view
observer.observe(document.querySelector('.stockfoto'));

//en skillevej flip, animation: flipX target class: myFlip 

const object = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('flipX');
    }
  });
});
//select element to animate in view
object.observe(document.querySelector('.myFlip'));



/*----Sektion 5-----*/

const items = document.querySelectorAll("#horisontalliste li");
scroll(
  animate("#horisontalliste", {
    transform: ["none", `translateX(-${items.length - 1}00vw)`],
  }),
  { target: document.querySelector("#horisontalscrollsection") }
);
/*------sektion 5 slut------*/

//paralax
document.querySelectorAll(".parallaxcontainer").forEach((parallaxcontainer) => {
  const elementderskalparallaxes = parallaxcontainer.querySelector("p, h3");
  scroll(animate(elementderskalparallaxes, { y: [10, 500] }), {
    target: elementderskalparallaxes,
  });
});

//

scroll(
  animate(".scrollzoomimg", {
    scale: [1, 1.5],
  }),
  {
    target: document.querySelector(".scrollzoom"),
    offset: ["0.25 0.25", "1 1"],
  }
);
scroll(
  animate(".scrollzoomimg2", {
    scale: [1, 1.7],
  }),
  {
    target: document.querySelector(".scrollzoom2"),
    offset: ["1 1", "0.5 0.5"],
  }
);
scroll(animate(".progress-bar", { scaleX: [0, 1] }));
   


scroll(
  animate(".scrollzoomimg3", { 
    scale: [0.5, 1.9]    
  }),
  { 
    target: document.querySelector(".scrollzoom3"),
    offset: ["1 1", "0.5 0.5"]
 }
)

scroll(
  animate(".scrollzoomin4", { 
    scale: [1, 1.4]    
  }),
  { 
    target: document.querySelector(".scrollzoom4"),
    offset: ["1 1", "0.1 0.1"]
 }
)

// media queries

const mediaQuery = window.matchMedia("(max-width:1060px)");

if (mediaQuery.matches) {

  // section 2 mobileview animation
  inView(".inviewMobile", ({ target }) => {
    animate(
      target.querySelectorAll("li:nth-child(1)"),
      { x: [-1000, 0] },
      { duration: 1, delay: 0 }
    );
  });
  //animate li 2
  inView(".inviewMobile", ({ target }) => {
    animate(
      target.querySelectorAll("li:nth-child(2)"),
      { x: [-1000, 0] },
      { duration: 1, delay: 0.5 }
    );
  });
  //animate li 3
  inView(".inviewMobile", ({ target }) => {
    animate(
      target.querySelectorAll("li:nth-child(3)"),
      { x: [-1000, 0] },
      { duration: 1, delay: 1 }
    );
  });
 } else {
  //animate li 1
inView(".inview", ({ target }) => {
  animate(
    target.querySelectorAll("li:nth-child(1)"),
    { x: [-2000, -300] },
    { duration: 1, delay: 0 }
  );
});
//animate li 2
inView(".inview", ({ target }) => {
  animate(
    target.querySelectorAll("li:nth-child(2)"),
    { x: [-2000, 0] },
    { duration: 1, delay: 0.5 }
  );
});
//animate li 3
inView(".inview", ({ target }) => {
  animate(
    target.querySelectorAll("li:nth-child(3)"),
    { x: [-2000, 300] },
    { duration: 1, delay: 1 }
  );
});

 }
