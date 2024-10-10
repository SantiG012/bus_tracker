import ApiService from "./apiService";

const routeService = new ApiService("routes");

export const fetchRoutes = () => routeService.fetchAll();
export const fetchRoute = (id) => routeService.fetchOne(id);
export const createRoute = (route) => routeService.create(route);
export const updateRoute = (id, route) => routeService.update(id, route);
export const deleteRoute = (id) => routeService.delete(id);