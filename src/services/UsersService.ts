import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository";

class UsersService {
    private usersRepository: Repository<User>;

    constructor(){
        this.usersRepository = getCustomRepository(UsersRepository);
    }

    async findByEmail(email: string) {
        const connection = await this.usersRepository.findOne({
            email,
        });

        return connection;
    }

    async create(email: string) {
        const userExists = await this.usersRepository.findOne({
            email,
        });
        
        if ( userExists ) {
            return userExists;
        }

        const user = this.usersRepository.create({
            email,
        });

        await this.usersRepository.save(user);

        return user;
    }
}

export { UsersService };
