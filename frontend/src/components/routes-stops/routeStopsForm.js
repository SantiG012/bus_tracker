import React, { useState, useEffect } from "react";
import commonStyles from "src/common/common.module.css";

const RouteStopsForm = ({ routeStopData, onSubmit }) => {
    const emptyForm = {
        order:"",
        route_id:"",
        stop_id:"",
        status:"A"
    };

    const [routeStop, setRouteStop] = useState(emptyForm);

    useEffect(() => {
        if (routeStopData) {
            setRouteStop(routeStopData);
        }
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
        setRouteStop(emptyForm);
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
                <input
                    type="text"
                    name="route_id"
                    value={routeStop.route_id}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className={commonStyles.formGroup}>
                <label>Stop ID</label>
                <input
                    type="text"
                    name="stop_id"
                    value={routeStop.stop_id}
                    onChange={handleChange}
                    required
                />
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
            {!routeStopData && <button type="submit" className={commonStyles.createteButton}>Create</button>}
        </form>
    );

};

export default RouteStopsForm;