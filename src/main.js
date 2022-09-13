import "./style.css";
/* Import af Motion One bibliotek */
import { animate, stagger, inView, scroll, timeline } from "motion";

animate("h1", { opacity: [0, 1] }, { duration: 5 });

inView(".fotogalleryinview", ({ target }) => {
  animate(
    target.querySelectorAll("li"),
    { x: [-2000, 0] },
    { duration: 1, delay: stagger(1, { start: 0.25 }) }
  );
});

/*----Sektion 5-----*/
inView(".h3inview", () => {
  animate(".h3inview", { y: [-30, 0] }, { duration: 1 });
});

const items = document.querySelectorAll("#horisontalliste li");
scroll(
  animate("#horisontalliste", {
    transform: ["none", `translateX(-${items.length - 1}00vw)`],
  }),
  { target: document.querySelector("#horisontalscrollsection") }
);
/*------sektion 5 slut------*/
document.querySelectorAll(".parallaxcontainer").forEach((parallaxcontainer) => {
  const elementderskalparallaxes = parallaxcontainer.querySelector("p");
  scroll(animate(elementderskalparallaxes, { y: [100, 1000] }), {
    target: elementderskalparallaxes,
  });
});
