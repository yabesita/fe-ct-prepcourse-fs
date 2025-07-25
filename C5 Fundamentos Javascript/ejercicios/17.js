function esPositivo(num) {
  // La función recibe un argumento llamado num el cual es un numero entero.
  // Retorna como resultado un string que indica si el número es positivo o negativo.
  // Por ejemplo: 
  // Si el número es positivo ---> "Es positivo".
  // Si el número es negativo ---> "Es negativo".
  // Si el número es 0, devuelve false.
  // Tu código:
  if (num > 0) {
    return "Es positivo";
  } else if (num < 0) {
    return "Es negativo";
  } else { // Si no es mayor que 0 y no es menor que 0, entonces es 0.
    return false;
  }
}

module.exports = esPositivo;