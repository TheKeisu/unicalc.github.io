// Закон преломления света: n21 = n2 / n1 = v1 / v2
export const calc_n21_from_n2_n1 = (n2, n1) => n2 / n1;
export const calc_n2_from_n21_n1 = (n21, n1) => n21 * n1;
export const calc_n1_from_n2_n21 = (n2, n21) => n2 / n21;

export const calc_n21_from_v1_v2 = (v1, v2) => v1 / v2;
export const calc_v1_from_n21_v2 = (n21, v2) => n21 * v2;
export const calc_v2_from_v1_n21 = (v1, n21) => v1 / n21;

// Показатель преломления через синусы углов: n21 = sin(alpha) / sin(gamma)
export const calc_n21_from_sin_alpha_sin_gamma = (sin_alpha, sin_gamma) => sin_alpha / sin_gamma;
export const calc_sin_alpha_from_n21_sin_gamma = (n21, sin_gamma) => n21 * sin_gamma;
export const calc_sin_gamma_from_sin_alpha_n21 = (sin_alpha, n21) => sin_alpha / n21;

// Формула тонкой линзы: 1/F = 1/d + 1/f
export const calc_F_from_d_f = (d, f) => 1.0 / ((1.0 / d) + (1.0 / f));
export const calc_d_from_F_f = (F, f) => 1.0 / ((1.0 / F) - (1.0 / f));
export const calc_f_from_F_d = (F, d) => 1.0 / ((1.0 / F) - (1.0 / d));

// Оптическая сила линзы: D = 1 / F
export const calc_D_from_F = (F) => 1.0 / F;
export const calc_F_from_D = (D) => 1.0 / D;

// Интерференция
// Максимум: delta = k * lambda
export const calc_delta_from_k_lambda = (k, lam) => k * lam;
export const calc_k_from_delta_lambda = (delta, lam) => delta / lam;
export const calc_lambda_from_delta_k = (delta, k) => delta / k;

// Минимум: delta = (2k + 1) * lambda / 2
export const calc_delta_min_from_k_lambda = (k, lam) => ((2 * k) + 1) * lam / 2.0;
export const calc_k_from_delta_min_lambda = (delta, lam) => (delta / lam) - 0.5;
export const calc_lambda_from_delta_min_k = (delta, k) => (2.0 * delta) / ((2 * k) + 1);

// Дифракционная решетка: d * sin(phi) = k * lambda
export const calc_d_from_k_lambda_phi = (k, lam, phi) => (k * lam) / Math.sin(phi);

export const calc_phi_from_k_lambda_d = (k, lam, d) => {
  const value = (k * lam) / d;
  const clampedValue = Math.max(Math.min(value, 1.0), -1.0);
  return Math.asin(clampedValue);
};

export const calc_k_from_d_lambda_phi = (d, lam, phi) => (d * Math.sin(phi)) / lam;
export const calc_lambda_from_d_phi_k = (d, phi, k) => (d * Math.sin(phi)) / k;