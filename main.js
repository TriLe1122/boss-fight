const heros = [
  {
    name: 'Halbren Ironfist',
    race: 'Dwarf',
    damage: 10,
    health: 100,
  },
  {
    name: 'Dave Hammerhand',
    race: 'Human',
    damage: 5,
    health: 50,
  },
  {
    name: 'Halbren Ironfist',
    race: 'Elf',
    damage: 15,
    health: 30,
  },
]

const boss = {
  health: 110,
  maxHealth: 110,
  damage: 5,
  level: 1
}




function () {

}






//SECTION: GOALS
/*Will demonstrate the ability to manipulate objects in an array and maintain an updated page with all the current data values. As well as working with an interval.

*Add images

*Label creatures

*Add click attribute to boss for attacking it. This should reduce it with the COMBINED damaged from heros. Use look or forEach function to add up the damage than reduce boss

*Boss damage per second (5?). Function that loops over heros array and reduces their health by boss damage.
- give boss variable damage?

Level up boss. Add logic to function that attacks the boss to determine if the boss is dead than increment level (increase max health and reset health to max) then re-draw boss after level up.
- add alerts or indications that show how many monsters have been defeated/what level boss is on.

*Give gold for killing boss that increases each level. Needs to be a global variable to hold the gold the hero has won, which can be displayed to the dom then.

*Add 'health packs'
*/