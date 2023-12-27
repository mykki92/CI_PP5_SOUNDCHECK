import { rest } from "msw";

const baseURL = "https://soundcheck-drf-api-15efb796f01f.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
      ctx.json({
        pk: 4,
        username: "mykki92",
        email: "",
        first_name: "",
        last_name: "",
        profile_id: 4,
        profile_image: "https://res.cloudinary.com/dssjpogsp/image/upload/v1/media/../soundcheck_default_profile",
      })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];