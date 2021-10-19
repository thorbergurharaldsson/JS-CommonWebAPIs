import home from "./views/home.js";
import blog from "./views/blog.js";
import err404 from "./views/err404.js";

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const router = async () => {
  const routes = [
    { path: "/", view: home },
    { path: "/blog", view: blog },
    { path: "/404", view: err404 },
  ];

  // Test each route for potential match
  const potentialMatchs = routes.map((route) => {
    return {
      route: route,
      isMatch: location.pathname === route.path,
    };
  });

  let match = potentialMatchs.find((potentialMatch) => potentialMatch.isMatch);

  // TODO: 404 error page if page is not found
  if (!match) {
    match = {
      route: routes[2],
      isMatch: true,
    };
  }

  const view = new match.route.view();

  document.querySelector(".content").innerHTML = await view.getHTML();
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });
  router();
});
