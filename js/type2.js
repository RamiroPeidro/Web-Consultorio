  const instance= new Typewriter('#h1-carousel', {
  });

  instance
  .typeString('Consultorio <strong style="color: #ff6666;">Cardiológico.</strong>')
  .start();
  

  const segundoh2 = new Typewriter('#h2-carousel', {
  });

  segundoh2
  .pauseFor(3000)
  .typeString('Cuidamos tu <strong style="color: #ff6666;">Corazón.</strong>')
  .pauseFor(100)
  .deleteChars(8)
  .typeString('<span style="color: #ff6666;">Salud.</span>')
  .start();


  const trabajosh2 = new Typewriter('.texto-trabajos1__h2', {
  });

  trabajosh2
  .typeString('ECO-DOPPLER <strong style="color: #ff6666;">CARDÍACO.</strong>')
  .start();

  const trabajosh22 = new Typewriter('.texto-trabajos2__h2', {
  });

  trabajosh22
  .typeString('APTO FISICO <strong style="color: #ff6666;">EN EL DIA.</strong>')
  .start();

  const trabajosh23 = new Typewriter('.texto-trabajos3__h2', {
  });

  trabajosh23
  .typeString('CHEQUEO POST <strong style="color: #ff6666;">COVID.</strong>')
  .start();