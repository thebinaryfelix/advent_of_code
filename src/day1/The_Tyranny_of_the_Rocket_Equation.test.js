const {
  getFuelPerMass,
  getFuelForAllModules,
  getTotalFuelPerMass,
  getFuelToLaunchRocket,
  getFuelToLaunchRocketWithMemoized
} = require('./The_Tyranny_of_the_Rocket_Equation')

const rocketModulesMock = [9, 12, 14, 1969, 100756]

describe('Should return the necessary fuel', () => {
  describe('getFuelPerMass', () => {
    test('for a given mass', () => {
      expect(getFuelPerMass(9)).toBe(1)
      expect(getFuelPerMass(12)).toBe(2)
      expect(getFuelPerMass(14)).toBe(2)
      expect(getFuelPerMass(1969)).toBe(654)
      expect(getFuelPerMass(100756)).toBe(33583)
    })
  })

  describe('getFuelForAllModules', () => {
    test('to launch all modules', () => {
      expect(getFuelForAllModules(rocketModulesMock)).toBe(34242)
    })
  })

  describe('getTotalFuelPerMass', () => {
    test('to launch a single module', () => {
      expect(getTotalFuelPerMass(9)).toBe(1)
      expect(getTotalFuelPerMass(12)).toBe(2)
      expect(getTotalFuelPerMass(14)).toBe(2)
      expect(getTotalFuelPerMass(1969)).toBe(966)
      expect(getTotalFuelPerMass(100756)).toBe(50346)
    })
  })

  describe('getFuelToLaunchRocket', () => {
    test('to launch the rocket', () => {
      const fuelSum = 1 + 2 + 2 + 966 + 50346

      expect(getFuelToLaunchRocket(rocketModulesMock)).toBe(fuelSum)
    })
  })
  describe('getFuelToLaunchRocketWithMemoized', () => {
    test('to launch the rocket', () => {
      const fuelSum = 1 + 2 + 2 + 966 + 50346

      expect(getFuelToLaunchRocketWithMemoized(rocketModulesMock)).toBe(
        fuelSum
      )
    })
  })
})
