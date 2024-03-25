export function getEnvironmentalVariable(constantKey: string) {
    const variable = import.meta.env[constantKey];
    if (!variable) {
      throw new Error(`Environmental variable not defined: ${constantKey}`);
    }
  
    return variable;
  }