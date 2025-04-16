import bcrypt from 'bcrypt';

const SAL_ROUNDS: number = 10;

export const hashPassword = async(password: string): Promise<string> => {
  return await bcrypt.hash(password, SAL_ROUNDS);
};

//leer y comparar con el hash de la base de datos
