import React, { useState, useEffect } from "react";
import styles from "./busForm.module.css";

const BusForm = ({ busData, onSubmit }) => {
    const emptyForm = {
        plate: "",
        status: "",
        current_latitude: "0.0",
        current_longitude: "0.0"
    };

    const [bus, setBus] = useState(emptyForm);

    useEffect(() => {
        if (busData) {
            setBus(busData);
        }
    }, [busData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBus({
            ...bus,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(bus);
        setBus(emptyForm);
    };

    return (
        <form onSubmit={handleSubmit}>
            <p className="message">Create or edit a bus</p>
            <div className={styles.busForm}>
                <div className={styles.busFormGroup}>
                    <label>Plate</label>
                    <input
                        type="text"
                        name="plate"
                        value={bus.plate}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className={styles.busFormGroup}>
                    <label>Status</label>
                    <input
                        type="text"
                        name="status"
                        value={bus.status}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className={styles.busFormGroup}>
                    <label>Latitude</label>
                    <input
                        type="number"
                        name="current_latitude"
                        value={bus.current_latitude}
                        onChange={handleChange}
                        readOnly
                    />
                </div>

                <div className={styles.busFormGroup}>
                    <label>Longitude</label>
                    <input
                        type="number"
                        name="current_longitude"
                        value={bus.current_longitude}
                        onChange={handleChange}
                        readOnly
                    />
                </div>
            {busData && <button type="submit">Update</button>}
            {!busData && <button type="submit">Create</button>}
            </div>
        </form>
    )
};

export default BusForm;