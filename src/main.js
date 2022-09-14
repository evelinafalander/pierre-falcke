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
  scroll(animate(elementderskalparallaxes, { y: [10, 500] }), {
    target: elementderskalparallaxes,
  });
});

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
