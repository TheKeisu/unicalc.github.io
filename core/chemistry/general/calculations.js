import { molarMassFromFormula } from './formula_utils.js';

export const GAS_CONSTANT_R = 8.314462618;
export const AVOGADRO_NUMBER = 6.02214076e23;
export const MOLAR_VOLUME_NORMAL = 22.4;
export const FARADAY_CONSTANT = 96500;
export const PLANCK_CONSTANT = 6.62607015e-34;

export function _molar_mass_from_formula(formulaStr) {
  try {
    return molarMassFromFormula(formulaStr);
  } catch (e) {
    throw new Error(`Не удалось распознать химическую формулу: ${formulaStr}`);
  }
}

export const calc_substance_amount = (mass, molar_mass) => mass / molar_mass;
export const calc_mass_substance_amount = (substance_amount, molar_mass) => substance_amount * molar_mass;
export const calc_molar_mass = (mass, substance_amount) => mass / substance_amount;

export const calc_particles_count = (substance_amount) => substance_amount * AVOGADRO_NUMBER;
export const calc_substance_amount_particles_count = (particles_count) => particles_count / AVOGADRO_NUMBER;
export const calc_avogadro_number = (particles_count, substance_amount) => particles_count / substance_amount;

export const calc_substance_amount_by_formula = (mass, formula) => mass / _molar_mass_from_formula(formula);
export const calc_molar_mass_by_formula = (formula) => _molar_mass_from_formula(formula);

export const calc_ideal_gas_pressure = (substance_amount, temperature, volume) => (substance_amount * GAS_CONSTANT_R * temperature) / volume;
export const calc_ideal_gas_volume = (substance_amount, temperature, pressure) => (substance_amount * GAS_CONSTANT_R * temperature) / pressure;
export const calc_ideal_gas_substance_amount = (pressure, volume, temperature) => (pressure * volume) / (GAS_CONSTANT_R * temperature);
export const calc_ideal_gas_temperature = (pressure, volume, substance_amount) => (pressure * volume) / (GAS_CONSTANT_R * substance_amount);

export const calc_gas_volume_by_substance = (substance_amount) => substance_amount * MOLAR_VOLUME_NORMAL;
export const calc_substance_amount_gas_volume = (volume) => volume / MOLAR_VOLUME_NORMAL;
export const calc_molar_volume = (volume, substance_amount) => volume / substance_amount;

export const calc_gas_density = (molar_mass, molar_volume) => molar_mass / molar_volume;
export const calc_molar_mass_gas_density = (gas_density, molar_volume) => gas_density * molar_volume;

export const calc_mass_fraction = (substance_mass, solution_mass) => substance_mass / solution_mass;
export const calc_substance_mass_mass_fraction = (mass_fraction, solution_mass) => mass_fraction * solution_mass;
export const calc_solution_mass_mass_fraction = (substance_mass, mass_fraction) => substance_mass / mass_fraction;

export const calc_molar_concentration = (substance_amount, volume) => substance_amount / volume;
export const calc_substance_amount_molar_concentration = (concentration, volume) => concentration * volume;
export const calc_volume_molar_concentration = (substance_amount, concentration) => substance_amount / concentration;

export const calc_solution_mass = (substance_mass, solvent_mass) => substance_mass + solvent_mass;
export const calc_substance_mass_solution_mass = (solution_mass, solvent_mass) => solution_mass - solvent_mass;
export const calc_solvent_mass_solution_mass = (solution_mass, substance_mass) => solution_mass - substance_mass;

export const calc_mass_conservation = (reactants_mass) => reactants_mass;
export const calc_reactants_mass_conservation = (products_mass) => products_mass;

export const calc_reaction_yield = (practical_mass, theoretical_mass) => (practical_mass / theoretical_mass) * 100;
export const calc_practical_mass_reaction_yield = (reaction_yield, theoretical_mass) => (reaction_yield / 100) * theoretical_mass;
export const calc_theoretical_mass_reaction_yield = (practical_mass, reaction_yield) => practical_mass / (reaction_yield / 100);

export const calc_heat_amount = (heat_capacity, mass, delta_temperature) => heat_capacity * mass * delta_temperature;
export const calc_heat_capacity_heat_amount = (heat_amount, mass, delta_temperature) => heat_amount / (mass * delta_temperature);

export const calc_reaction_heat_effect = (substance_amount, enthalpy_change) => substance_amount * enthalpy_change;
export const calc_substance_amount_reaction_heat_effect = (heat_amount, enthalpy_change) => heat_amount / enthalpy_change;

export const calc_faraday_law = (molar_mass, current, time, electrons_count) => (molar_mass * current * time) / (electrons_count * FARADAY_CONSTANT);
export const calc_current_faraday_law = (deposited_mass, molar_mass, time, electrons_count) => (deposited_mass * electrons_count * FARADAY_CONSTANT) / (molar_mass * time);
export const calc_time_faraday_law = (deposited_mass, molar_mass, current, electrons_count) => (deposited_mass * electrons_count * FARADAY_CONSTANT) / (molar_mass * current);

export const calc_equilibrium_constant = (products_concentration, reactants_concentration) => products_concentration / reactants_concentration;
export const calc_equilibrium_constant_with_coefficients = (p_conc, p_coeff, r_conc, r_coeff) => (Math.pow(p_conc, p_coeff)) / (Math.pow(r_conc, r_coeff));

export const calc_reaction_rate = (delta_concentration, delta_time) => delta_concentration / delta_time;
export const calc_delta_concentration_reaction_rate = (rate, delta_time) => rate * delta_time;

export const calc_rate_constant_reaction_rate = (rate, conc_a, order_a, conc_b, order_b) => rate / (Math.pow(conc_a, order_a) * Math.pow(conc_b, order_b));
export const calc_reaction_rate_law = (rate_constant, conc_a, order_a, conc_b, order_b) => rate_constant * Math.pow(conc_a, order_a) * Math.pow(conc_b, order_b);

export const calc_ph = (hydrogen_ion_concentration) => -Math.log10(hydrogen_ion_concentration);
export const calc_poh = (hydroxide_ion_concentration) => -Math.log10(hydroxide_ion_concentration);
export const calc_hydrogen_ion_concentration = (ph) => Math.pow(10, -ph);
export const calc_hydroxide_ion_concentration = (poh) => Math.pow(10, -poh);
export const calc_poh_from_ph = (ph) => 14 - ph;
export const calc_ph_from_poh = (poh) => 14 - poh;

export const calc_freezing_point_depression = (cryoscopic_constant, molality) => cryoscopic_constant * molality;
export const calc_cryoscopic_constant = (freezing_point_depression, molality) => freezing_point_depression / molality;

export const calc_boiling_point_elevation = (ebullioscopic_constant, molality) => ebullioscopic_constant * molality;
export const calc_ebullioscopic_constant = (boiling_point_elevation, molality) => boiling_point_elevation / molality;

export const calc_photon_energy = (frequency) => PLANCK_CONSTANT * frequency;
export const calc_frequency_photon_energy = (energy) => energy / PLANCK_CONSTANT;