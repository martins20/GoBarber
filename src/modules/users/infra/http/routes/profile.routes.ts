import { Router } from 'express';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import ProfileController from '../controllers/ProfileController';

const ProfileRouter = Router();
const profileController = new ProfileController();

ProfileRouter.use(ensureAuthenticated);

ProfileRouter.get('/', profileController.show);
ProfileRouter.put('/', profileController.update);

export default ProfileRouter;
