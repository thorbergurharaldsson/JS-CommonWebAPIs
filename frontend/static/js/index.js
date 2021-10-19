const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const router = async () => {
  const routes = [
    { path: "/", view: () => console.log("Viewing home") },
    { path: "/blog", view: () => console.log("Viewing blog") },
    { path: "/404", view: () => console.log("Viewing 404") },
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

  console.log(match.route.view());
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
