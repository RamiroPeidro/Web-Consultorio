  const instance= new Typewriter('#h1-carousel', {
  });

  instance
  .typeString('Consultorio <strong style="color: #ff6666;">Cardiologico.</strong>')
  .start();
  

  const segundoh2 = new Typewriter('#h2-carousel', {
  });

  segundoh2
  .pauseFor(5000)
  .typeString('Cuidamos tu <strong style="color: #ff6666;">Corazon.</strong>')
  .pauseFor(3000)
  .deleteChars(8)
  .typeString('<span style="color: #ff6666;">Salud.</span>')
  .start();