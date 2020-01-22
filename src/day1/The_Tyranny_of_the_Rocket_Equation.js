// https://adventofcode.com/2019/day/1

const data = require('../resources/rocketModulesData')

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

const getFuelToLaunchRocketWithMemoized = data => {
  let totalFuel = 0
  const computedValues = {}

  const getTotalFuelPerMass = mass => {
    const fuelPerMass = getFuelPerMass(mass)
    return fuelPerMass <= 0
      ? 0
      : fuelPerMass + (computedValues[mass] || getTotalFuelPerMass(fuelPerMass))
  }

  for (let i = 0; i < data.length; i += 1) {
    totalFuel += getTotalFuelPerMass(data[i])
  }

  return totalFuel
}

module.exports = {
  getFuelPerMass,
  getFuelForAllModules,
  getTotalFuelPerMass,
  getFuelToLaunchRocket,
  getFuelToLaunchRocketWithMemoized
}
