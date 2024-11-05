import { profileModel } from "~/server/models/profile";

export default defineEventHandler(async e => {

  switch (e.method) {
    case "GET":
      return profileModel().getData()
    case "POST":
      const body = await readBody(e)
      return profileModel().saveData(body)
  }
});
