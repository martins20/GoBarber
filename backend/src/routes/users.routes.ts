import { Router } from "express";

import CreateUserService from "../services/CreateUserService";

const UsersRouter = Router();

UsersRouter.post("/", async (request, response) => {
    try {
        const { name, email, password } = request.body;

        const createUser = new CreateUserService();

        const user = await createUser.execute({
            name,
            email,
            password,
        });

        delete user.password;

        return response.json(user);
    } catch (err) {
        return response.status(400).json({ message: err.message });
    }
});

export default UsersRouter;