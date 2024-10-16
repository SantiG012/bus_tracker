import React, { useState, useEffect } from "react";
import { fetchRoutes } from "src/api/routeApi";
import { fetchStops } from "src/api/stopApi";
import commonStyles from "src/common/common.module.css";

const RouteStopsForm = ({ routeStopData, onSubmit }) => {
    const form = {
        order:"",
        route:"",
        stop:"",
        status:"A"
    };

    const [routeStop, setRouteStop] = useState(form);
    const [routes, setRoutes] = useState([]);
    const [stops, setStops] = useState([]);


    useEffect(() => {
        if (routeStopData) {
            setRouteStop(routeStopData);
        }

        const getRoutes = async () => {
            const data = await fetchRoutes();
            setRoutes(data);
        };

        getRoutes();

        const getStops = async () => {
            const data = await fetchStops();
            setStops(data);
        };

        getStops();

    }, [routeStopData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRouteStop({
            ...routeStop,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(routeStop);
        setRouteStop(form);
    };

    return (
        <form onSubmit={handleSubmit}>
            <p className="message">Create or edit a route stop</p>
            <div className={commonStyles.formGroup}>
                <label>Order</label>
                <input
                    type="text"
                    name="order"
                    value={routeStop.order}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className={commonStyles.formGroup}>
                <label>Route ID</label>
                <select 
                    required
                    name="route"
                    value={routeStop.route}
                    onChange={handleChange}
                >
                    <option value=""></option>
                    {routes.map((route) => (
                        <option key={route.id} value={route.id}>
                            {route.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className={commonStyles.formGroup}>
                <label>Stop ID</label>
                <select 
                    required
                    name="stop"
                    value={routeStop.stop}
                    onChange={handleChange}
                >
                    <option value=""></option>
                    {stops.map((stop) => (
                        <option key={stop.id} value={stop.id}>
                            {stop.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className={commonStyles.formGroup}>
                <label>Status</label>
                <select
                    name="status"
                    value={routeStop.status}
                    onChange={handleChange}
                >
                    <option value="A">Active</option>
                    <option value="I">Inactive</option>
                </select>
            </div>

            {routeStopData && <button type="submit" className={commonStyles.updateButton}>Update</button>}
            {!routeStopData && <button type="submit" className={commonStyles.createButton}>Create</button>}
        </form>
    );

};

export default RouteStopsForm;