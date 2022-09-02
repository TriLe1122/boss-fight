// @ts-nocheck
const heroes = [
  {
    name: 'Halbren Ironfist',
    race: 'Dwarf',
    damage: 10,
    health: 100,
    price: 200,
  },
  {
    name: 'Dave Hammerhand',
    race: 'Human',
    damage: 5,
    health: 50,
    price: 60,
  },
  {
    name: 'Kain Vernhearth',
    race: 'Elf',
    damage: 15,
    health: 30,
    price: 250,
  },
]

const monster = {
  health: 110,
  maxHealth: 110,
  damage: 5,
  level: 1
}



function attackBoss() {
  heroes.forEach(hero => {
    if (monster.health > 0) {
      monster.health -= hero.damage
    }
    if (monster.health < 0) {
      monster.health = 0
    }
  })
  document.getElementById('monsterHP').innerText = monster.health
}



function heroHealthTaken(health) {
  const dwarf = heroes.find(a => a.name == 'Halbren Ironfist')
  if (dwarf.health > 0) {
    dwarf.health -= monster.damage
  }
  document.getElementById('dwarfHP').innerHTML = dwarf.health



  const human = heroes.find(a => a.name == 'Dave Hammerhand')
  if (human.health > 0) {
    human.health -= monster.damage
  }
  document.getElementById('humanHP').innerHTML = human.health



  const elf = heroes.find(a => a.name == 'Kain Vernhearth')
  if (elf.health > 0) {
    elf.health -= monster.damage
  }
  document.getElementById('elfHP').innerHTML = elf.health
}






function monsterLevel() { }





//SECTION: GOALS
/*Will demonstrate the ability to manipulate objects in an array and maintain an updated page with all the current data values. As well as working with an interval.

- give boss variable damage?

Level up boss. Add logic to function that attacks the boss to determine if the boss is dead than increment level (increase max health and reset health to max) then re-draw boss after level up.
- add alerts or indications that show how many monsters have been defeated/what level boss is on.

*Give gold for killing boss that increases each level. Needs to be a global variable to hold the gold the hero has won, which can be displayed to the dom then.

*Add 'health packs'
*/



setInterval(heroHealthTaken, 5000)