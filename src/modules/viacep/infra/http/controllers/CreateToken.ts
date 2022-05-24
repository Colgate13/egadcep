import { Response, Request } from 'express';
import { sign } from 'jsonwebtoken';
import authConfig from '../../../../../shared/config/auth';

class CreateToken {
  public async create(
    request: Request,
    response: Response,
  ): Promise<unknown> {
    const { email } = request.body;
    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({ email }, secret, {
      subject: email,
      expiresIn,
    });

    return response.json({
      token,
      expiresIn,
    });
  }
}

export default CreateToken;
