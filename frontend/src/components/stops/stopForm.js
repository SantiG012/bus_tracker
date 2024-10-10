import React, { useState, useEffect } from "react";
import commonStyles from "src/common/common.module.css";

const StopForm = ({ stopData, onSubmit }) => {
    const emptyForm = {
        name: "",
        latitude: "",
        longitude: "",
        status: "A"
    };

    const [stop, setStop] = useState(emptyForm);
    
    useEffect(() => {
        if (stopData) {
            setStop(stopData);
        }
    }, [stopData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStop({
            ...stop,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(stop);
        setStop(emptyForm);
    };

    return (
        <form onSubmit={handleSubmit}>
            <p className="message">Create or edit a stop</p>
            <div className={commonStyles.formGroup}>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    value={stop.name}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className={commonStyles.formGroup}>
                <label>Latitude</label>
                <input
                    type="text"
                    name="latitude"
                    value={stop.latitude}
                    onChange={handleChange}
                    pattern="^?[0-9]\d*(\.\d+)?$"
                    required
                />
            </div>

            <div className={commonStyles.formGroup}>
                <label>Longitude</label>
                <input
                    type="text"
                    name="longitude"
                    value={stop.longitude}
                    onChange={handleChange}
                    pattern="^?[0-9]\d*(\.\d+)?$"
                    required
                />
            </div>

            <div className={commonStyles.formGroup}> 
                <label>Status</label>
                <select
                    name="status"
                    value={stop.status}
                    onChange={handleChange}
                >
                    <option value="A">Active</option>
                    <option value="I">Inactive</option>
                </select>
            </div>

            {stopData && <button type="submit" className={commonStyles.createButton}>Update</button>}
            {!stopData && <button type="submit" className={commonStyles.updateButton}>Create</button>}
        </form>
    );
}

export default StopForm;
