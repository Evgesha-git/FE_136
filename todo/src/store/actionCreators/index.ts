import * as user from './userActions';
import * as todos from './todoActions';

export const actions = {
    ...user,
    ...todos,
}