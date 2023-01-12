import Housings from '../../api/logements.json';

export async function getHousings() {
  await fakeNetwork();

  let housings = Housings;
  if (!housings) housings = [];
  return housings;
}

export async function getHousing(id) {
  await fakeNetwork();

  let housings = Housings;
  let housing = housings.find((housing) => housing.id === id);
  return housing ?? null;
}

// Simulation d'une latence internet
// https://reactrouter.com/en/main/start/tutorial
// https://gist.githubusercontent.com/ryanflorence/1e7f5d3344c0db4a8394292c157cd305/raw/f7ff21e9ae7ffd55bfaaaf320e09c6a08a8a6611/contacts.js

async function fakeNetwork() {
  return new Promise((res) => {
    setTimeout(res, Math.random() * 800);
  });
}
