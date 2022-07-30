const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const routes = {
	// 404: "/pages/404.html",
    "/": "/pages/home.html",
    "/insects/insects": "/insects/insects.html",
    "/fish/fish": "/fish/fish.html",
    "/carnivores/carnivores": "/carnivores/carnivores.html",
    "/birds/birds": "/birds/birds.html",
};

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("main-page").innerHTML = html;
};
//console.log("start page");
//window.addEventListener("popstate", () => {
    /// render();
    //alert("loaded")
//});

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
