import bouquet from 'src/img/bouquet_snap_150.jpg';
import cactus from 'src/img/cactus_snap_150.jpg';
import flamant from 'src/img/flamant_snap_150.jpg';
import homard from 'src/img/homard_snap_150.jpg';
import logo from 'src/img/lapetiteourse_150.png';
import poulette from 'src/img/poulette_snap_150.jpg';
import promenade from 'src/img/promenade_snap_150.jpg';

const kittySrcs = [
  bouquet, cactus, flamant, homard, logo, poulette, promenade
];

const kittyImages = Array(7).fill(null).map((_, idx) => {
  const kitty = new Image();
  kitty.src = kittySrcs[idx];
  return kitty;
});

function randomKittyImage() {
  const idx = Math.floor(Math.random() * kittyImages.length);
  return kittyImages[idx];
}

export default randomKittyImage;
