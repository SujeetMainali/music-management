import BcryptService from "../../utils/bcrypt";
import { RegisterUserDTO, UserLoginDTO } from "../../DTOs/auth/auth.dto";
import { pool } from "../../config/database.config";
import { HttpExceptionError } from "../../utils/httpException.utils";

class AuthService {
  async registerUser(data: RegisterUserDTO) {
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
    const hashedPassword = await BcryptService.hash(password);
    const query =
      'INSERT INTO "users" (first_name, last_name, email, password, phone, dob, gender, address) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)';
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

    return result.rows[0];
  }

  async userLogin(data: UserLoginDTO) {
    const user = await pool.query('SELECT * FROM "users" WHERE email = $1', [
      data.email,
    ]);
    if (!user.rows[0]) {
      throw HttpExceptionError.notFound("User not found");
    }
    const isPasswordValid = await BcryptService.compare(
      data.password,
      user.rows[0].password
    );
    if (!isPasswordValid) {
      throw HttpExceptionError.unauthorized("Invalid password");
    }
    return user.rows[0];
  }
}

export default new AuthService();
