export const UNITS = {
  LENGTH: { meter: 1, kilometer: 1000, centimeter: 0.01, millimeter: 0.001 },
  MASS: { kilogram: 1, gram: 0.001, milligram: 1e-6, ton: 1000 },
  TIME: { second: 1, minute: 60, hour: 3600, day: 86400 },
  CURRENT: { ampere: 1, milliampere: 0.001 },
  TEMPERATURE: { kelvin: 1, celsius: 1 } // Обработка шкалы Цельсия реализуется отдельно (+273.15)
};