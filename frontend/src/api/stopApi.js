import ApiService from "./apiService";

const stopService = new ApiService("routes/stops");

export const fetchStops = () => stopService.fetchAll();
export const fetchStop = (id) => stopService.fetchOne(id);
export const createStop = (stop) => stopService.create(stop);
export const updateStop = (id, stop) => stopService.update(id, stop);
export const deleteStop = (id) => stopService.delete(id);
