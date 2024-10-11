import ApiService from "./apiService";

const routeStopsService = new ApiService("routes/route-stops/");

export const fetchRouteStops = () => routeStopsService.fetchAll();
export const fetchRouteStop = (id) => routeStopsService.fetchOne(id);
export const createRouteStop = (routeStop) => routeStopsService.create(routeStop);
export const updateRouteStop = (id, routeStop) => routeStopsService.update(id, routeStop);
export const deleteRouteStop = (id) => routeStopsService.delete(id);