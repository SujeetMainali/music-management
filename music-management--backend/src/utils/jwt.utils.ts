import jwt, { JwtPayload } from "jsonwebtoken";
import { dotenvConfig } from "./../config/env.config";

export class JwtUtils {
  static sign(payload: any, secret: string) {
    const expiresIn = dotenvConfig.JWT_EXPIRES_IN;
    return jwt.sign(payload, secret, {
      expiresIn,
      issuer: dotenvConfig.JWT_ISSUER,
      audience: dotenvConfig.JWT_AUDIENCE,
    });
  }

  static verify(token: string, secret: string): any {
    return jwt.verify(token, secret);
  }

  async usePasswordHashToMakeToken(
    password: string,
    userId: string
  ): Promise<string> {
    const secret = password;
    const token = jwt.sign({ userId }, secret, {
      expiresIn: 3600, // 60 minutes
    });
    return token;
  }

  async decode(token: string): Promise<string | JwtPayload | null> {
    const payload = jwt.decode(token);
    return payload;
  }
}
