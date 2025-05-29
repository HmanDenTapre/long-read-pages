
document.querySelectorAll('.background').forEach(bgimg => {
  const imgs = bgimg.querySelectorAll('img');
  imgs.forEach((img, index) => {
      bgimg.style.setProperty(`--img${index + 1}`, `url(${img.src})`);
      img.style.display = 'none';
  });
});

document.querySelectorAll('.character1').forEach(bgimg => {
  const imgs = bgimg.querySelectorAll('img');
  imgs.forEach((img, index) => {
      bgimg.style.setProperty(`--img${index + 1}`, `url(${img.src})`);
      img.style.display = 'none';
  });
});

document.querySelectorAll('.coverbackground').forEach(bgimg => {
  const imgs = bgimg.querySelectorAll('img');
  imgs.forEach((img, index) => {
      bgimg.style.setProperty(`--img${index + 1}`, `url(${img.src})`);
      img.style.display = 'none';
  });
});

document.querySelectorAll("img.frame-cycle").forEach(img => {
  const frames = img.dataset.frames.split(",");
  let i = 0;

  setInterval(() => {
    i = (i + 1) % frames.length;
    img.src = frames[i].trim();
  }, 200); // 200ms per frame
});