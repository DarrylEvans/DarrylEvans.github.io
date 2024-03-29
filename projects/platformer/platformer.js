$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the loops below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can give you a better idea of where to create new platforms
     * Comment the lines out to remove the grid
     */

    // for (let i = 100; i < canvas.width; i += 100) {
    //   createPlatform(i, canvas.height, -1, -canvas.height);
    // }
    // for (let i = 100; i < canvas.height; i += 100) {
    //   createPlatform(canvas.width, i, -canvas.width, -1);
    // }

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)
createPlatform(200, 625, 150, 40); //
createPlatform(400, 550, 150, 40)
createPlatform(600, 450, 150, 40)
createPlatform(400, 350, 150, 40)
createPlatform(200, 250, 150, 40)
createPlatform(45, 150, 150, 40)
createPlatform(800, 450,150, 40)  
createPlatform(1000, 350, 150, 40)
createPlatform(1150, 250, 150,40)
createPlatform(1300, 200, 100,40)
createPlatform(1000, 550, 150, 40)
createPlatform(1200, 625 , 150, 40)

// TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)
createCollectable("steve", 150, 625, 1, 1.1)
createCollectable("grace", 600, 300, 1, 1.1)
createCollectable("database", 1350, 100, 1, 1)
createCollectable("max",1350, 650,1, 1)
createCollectable("kennedi",850, 400,1,1)
    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)
createCannon("left", 600, 1000)
createCannon("top", 300, 1000)
createCannon("top", 500, 900)
createCannon("top", 650, 800)
createCannon("top", 800, 700)
createCannon("top", 950, 800)
createCannon("top", 1100, 800)
createCannon("top", 1250, 1000)
createCannon("top", 1400, 1400)
createCannon("right",580, 800)
createCannon("left", 350, 2000)




    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
