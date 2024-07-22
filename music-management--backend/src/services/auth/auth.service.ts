import BcryptService from "../../utils/bcrypt";
import { RegisterUserDTO } from "../../DTOs/auth/auth.dto";
import { pool } from "../../config/database.config";

class AuthService {
  async registerUser(data: RegisterUserDTO) {
    console.log("1");
    const {
      first_name,
      last_name,
      address,
      dob,
      email,
      gender,
      password,
      phone,
    } = data;
    console.log("2");
    const hashedPassword = await BcryptService.hash(password);
    console.log("3");
    const query =
      'INSERT INTO "users" (first_name, last_name, email, password, phone, dob, gender, address) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)';
    console.log("4");
    const result = await pool.query(query, [
      first_name,
      last_name,
      email,
      hashedPassword,
      phone,
      dob,
      gender,
      address,
    ]);

    console.log("5");

    return result.rows[0];
  }
}

export default new AuthService();
