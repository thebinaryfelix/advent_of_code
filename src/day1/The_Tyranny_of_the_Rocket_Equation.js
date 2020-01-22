// https://adventofcode.com/2019/day/1

const getFuelPerMass = mass => Math.floor(mass / 3) - 2

const getFuelForAllModules = data =>
  data.reduce(
    (totalFuel, currentMass) => totalFuel + getFuelPerMass(currentMass),
    0
  )

const getTotalFuelPerMass = mass => {
  const fuelPerMass = getFuelPerMass(mass)
  return fuelPerMass <= 0 ? 0 : fuelPerMass + getTotalFuelPerMass(fuelPerMass)
}

const getFuelToLaunchRocket = data =>
  data.reduce(
    (totalFuel, currentMass) => totalFuel + getTotalFuelPerMass(currentMass),
    0
  )

module.exports = {
  getFuelPerMass,
  getFuelForAllModules,
  getTotalFuelPerMass,
  getFuelToLaunchRocket
}
