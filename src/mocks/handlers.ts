// src/mocks/handlers.js
import { rest } from "msw";

const cartMockApi = rest.post("/api/cart/", (req, res, ctx) => {
  console.log(req);
  return res(
    ctx.delay(1000),
    // ctx.status(500),
    ctx.status(200),
    // ctx.status(300),
    ctx.json({ success: false })
  );
});

export const handlers = [
  cartMockApi,
  rest.post("/login", (req, res, ctx) => {
    // Persist user's authentication in the session
    sessionStorage.setItem("is-authenticated", "true");
    return res(
      // Respond with a 200 status code
      ctx.status(200)
    );
  }),
  rest.get("/user", (req, res, ctx) => {
    // Check if the user is authenticated in this session
    const isAuthenticated = sessionStorage.getItem("is-authenticated");
    if (!isAuthenticated) {
      // If not authenticated, respond with a 403 error
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: "Not authorized",
        })
      );
    }
    // If authenticated, return a mocked user details
    return res(
      ctx.status(200),
      ctx.json({
        username: "admin",
      })
    );
  }),
];
