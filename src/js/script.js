const bg = ScrollReveal({
  origin: "top",
  distance: "50px",
  duration: 2000,
  reset: true,
});
bg.reveal("#bg", { delay: 20 });

const texts = ScrollReveal({
  origin: "right",
  distance: "50px",
  duration: 6000,
  reset: true,
});
texts.reveal("#texts", { delay: 50 });

const header = ScrollReveal({
  origin: "right",
  distance: "50px",
  duration: 6000,
  reset: true,
});
header.reveal("header", { delay: 50 });
