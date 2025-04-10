
export class Soma {
    static calcular(a: number, b: number): number {
      return a + b;
    }
  }
  
  export class Subtracao {
    static calcular(a: number, b: number): number {
      return a - b;
    }
  }
  
  export class Multiplicacao {
    static calcular(a: number, b: number): number {
      return a * b;
    }
  }
  
  export class Divisao {
    static calcular(a: number, b: number): number {
      if (b === 0) throw new Error("Divisão por zero não é permitida.");
      return a / b;
    }
  }
  