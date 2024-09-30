export function calcularImc(peso: number, altura: number) {
  return peso / altura ** 2;
}

export function calcularClassificacaoImc(imc: number, idade: number) {
  // Adultos
  if (idade < 60) {
    if (imc < 18.4) return 'Desnutrição';
    if (imc < 24.9) return 'Eutrofia';
    if (imc < 29.9) return 'Sobrepeso';
    return 'Obesidade';
  }

  // Idosos
  if (imc < 22) return 'Desnutrição';
  if (imc < 27) return 'Eutrofia';
  return 'Sobrepeso';
}

export function calcularPesoIdeal(altura: number, idade: number) {
  let imcIdeal;
  // Adultos
  if (idade < 60) {
    imcIdeal = (18.5 + 24.9) / 2;
  }
  // Idosos
  else {
    imcIdeal = (22 + 27) / 2;
  }
  return imcIdeal * altura ** 2;
}

export function calcularNecessidadeCalorica(peso: number, caloriasPorKg: number) {
  return peso * caloriasPorKg;
}

export function calcularNecessidadeProteica(peso: number, proteinasPorKg: number) {
  return peso * proteinasPorKg;
}
