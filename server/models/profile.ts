import { baseModel } from "./base";

interface Profile {
    name: string,
    description: string,
    imageUrl: string;
    cvUrl: string;
}
export function profileModel() {
    const model = baseModel<Profile>();
    model.setDbName('users');
    return model
}
