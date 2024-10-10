import React, { useState, useEffect } from "react";
import commonStyles from "src/common/common.module.css";

const RouteForm = ({ routeData, onSubmit }) => {
    const emptyForm = {
        name: "",
        description: "",
        status: "A"
    };

    const [route, setRoute] = useState(emptyForm);

    useEffect(() => {
        if (routeData) {
            setRoute(routeData);
        }
    }, [routeData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRoute({
            ...route,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(route);
        setRoute(emptyForm);
    }

    return (
        <form onSubmit={handleSubmit}>
            <p className="message">Create or edit a route</p>
            <div className={commonStyles.formGroup}>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    value={route.name}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className={commonStyles.formGroup}>
                <label>Description</label>
                <input
                    type="text"
                    name="description"
                    value={route.description}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className={commonStyles.formGroup}>
                <label>Status</label>
                <select
                    name="status"
                    value={route.status}
                    onChange={handleChange}
                >
                    <option value="A">Active</option>
                    <option value="I">Inactive</option>
                </select>
            </div>

            {routeData && <button type="submit" className={commonStyles.updateButton}>Update</button>}
            {!routeData && <button type="submit" className={commonStyles.createteButton}>Create</button>}
        </form>
    );
}

export default RouteForm;