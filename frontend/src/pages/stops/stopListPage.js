import React, {useState, useEffect} from "react";
import {fetchStops, updateStop, createStop, deleteStop} from "src/api/stopApi";
import StopCard from "src/components/stops/stopCard";
import StopForm from "src/components/stops/stopForm";
import commonStyles from "src/common/common.module.css";

const StopsListPage = () => {
    const [stops, setStops] = useState([]);
    const [selected, setSelected] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        const getStops = async () => {
            const data = await fetchStops();
            setStops(data);
        }
        getStops();

    }, []);

    const createOrUpdate = async (stop) => {
        if (isEditing) {
            await updateStop(selected.id, stop);
            setSelected(null);
        } else {
            await createStop(stop);
        }
        const data = await fetchStops();
        setStops(data);
        setIsEditing(false);
    }

    const handleEdit = (stop) => {
        setSelected(stop);
        setIsEditing(true);
    };

    const handleDelete = async (stop) => {
        await deleteStop(stop.id);
        const data = await fetchStops();
        setStops(data);
    }

    return (
        <div className={commonStyles.gridContainer}>
            <div className={commonStyles.flexCentered}>
                <StopForm stopData={selected} onSubmit={createOrUpdate}/>
            </div>
            <div>
                {stops.map((stop) => (
                    <StopCard
                        key={stop.id}
                        stop={stop}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    />
                ))}
            </div>
        </div>
    );
}

export default StopsListPage;