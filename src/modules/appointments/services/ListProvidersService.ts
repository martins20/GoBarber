import { injectable, inject } from 'tsyringe';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import User from '@modules/users/infra/typeorm/entities/User';

interface IRequest {
    user_id: string;
}

@injectable()
class ListProvidersService {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,
    ) {}

    async execute({ user_id }: IRequest): Promise<User[]> {
        const providers = await this.usersRepository.findAllProviders({
            except_user_id: user_id,
        });

        return providers;
    }
}

export default ListProvidersService;