/*
eslint no-unused-vars: [
  "error",
  {
    "args": "none",
    "vars": "local",
    "varsIgnorePattern": "data"
  }
]
*/

const { animals, employees, hours, prices } = require('./data');
const data = require('./data');

function animalsByIds(...ids) {
  return animals.filter(animal => ids.includes(animal.id));
}

function animalsOlderThan(animal, age) {
  return animals.find(species => species.name === animal)
  .residents.every(resident => resident.age > age);
}

function employeeByName(employeeName) {
  const employeeObj = {};
  Object.assign(employeeObj, employees.find(employee => employee
    .firstName === employeeName || employee.lastName === employeeName));
  return employeeObj;
}

function createEmployee(personalInfo, associatedWith) {
  // return { ...personalInfo, ...associatedWith };
  return Object.assign(personalInfo, associatedWith);
}

function isManager(id) {
  return employees.some(employee => employee.managers.some(managerId => managerId === id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  if (species === undefined) {
    return animals.reduce((animalsQuantities, animal) => {
      animalsQuantities[animal.name] = animal.residents.length;
      return animalsQuantities;
    }, {});
  }
  return animals.reduce((accumulator, animal) => {
    if (animal.name === species) {
      accumulator = (animal.residents).length;
    }
    return accumulator;
  }, 0);
}

function entryCalculator(entrants) {
  if (!entrants) {
    return 0;
  }
  return Object.keys(entrants).reduce((total, key) =>
  total + (prices[key] * entrants[key]), 0);
}

function animalMap(options) {
  const locationObj = { NE: [], NW: [], SE: [], SW: [] };
  if (options === undefined || options === {} || !options.includeNames) {
    animals.forEach(({ name, location }) => {
      locationObj[location].push(name);
    });
    return locationObj;
  }
  animals.forEach(({ name, location, residents }) => {
    const animalsNames = {};
    animalsNames[name] = residents.reduce((accumulator, { name: residentName, sex }) => {
      const auxiliar = accumulator;
      if (!options.sex) auxiliar.push(residentName);
      else if (options.sex === sex) auxiliar.push(residentName);
      return auxiliar;
    }, []);
    if (options.sorted) animalsNames[name].sort();

    locationObj[location].push(animalsNames);
  });

  return locationObj;
}

function schedule(dayName) {
  const result = Object.entries(hours).reduce((acc, [key, val]) => {
    const { open, close } = val;
    acc[key] = close - open > 0 ? `Open from ${open}am until ${close % 12}pm` : 'CLOSED';
    return acc;
  }, {});
  if (dayName !== undefined) return { [dayName]: result[dayName] };
  return result;
}

function oldestFromFirstSpecies(id) {
  const emplo = employees.filter(employee => employee.id === id);
  const responsible = animals.filter(animal => animal.id === emplo[0].responsibleFor[0]);
  const result = responsible[0].residents.reduce((acc, curr) => (acc.age > curr.age ? acc : curr));
  return Object.values(result);
}

function increasePrices(percentage) {
  Object.keys(prices).forEach(key =>
  (prices[key] = Math.round((prices[key] * ((percentage / 100) + 1)) * 100) / 100));
}

function employeeCoverage(idOrName) {
  const results = employees.reduce((acc, employee) => {
    acc[getEmployeeFullName(employee)] = employee.responsibleFor
      .map((animalsByIds) => animalsByIds(animalsIds)[0])
      .map(({ name }) => name);
    return acc;
  }, {});
  if(idOrName !== undefined) {
    const employee = emplyeeById(idOrName) || employeeByName(idOrName);
    const employeeFullName = getEmployeeFullName(employee);
    if(employee) return { [employeeFullName]: results [employeeFullName] }
  }
  return results;
}

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  animalMap,
  animalsByIds,
  employeeByName,
  employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  oldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
