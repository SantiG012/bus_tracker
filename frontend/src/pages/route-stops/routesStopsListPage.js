import React, {useState, useEffect} from "react";
import { fetchRouteStops, updateRouteStop, createRouteStop, deleteRouteStop } from "src/api/routeStopsApi";
import RouteStopsCard from "src/components/route-stops/routeStopCard";
import RouteStopsForm from "src/components/route-stops/routeStopsForm";
import commonStyles from "src/common/common.module.css";

const RoutesStopsListPage = () => {
    const [routeStops, setRouteStops] = useState([]);
    const [selected, setSelected] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        const getRouteStops = async () => {
            const data = await fetchRouteStops();
            setRouteStops(data);
        }
        getRouteStops();
    }, []);

    const createOrUpdate = async (routeStop) => {
        if (isEditing) {
            await updateRouteStop(selected.id, routeStop);
            setSelected(null);
        } else {
            await createRouteStop(routeStop);
        }
        const data = await fetchRouteStops();
        setRouteStops(data);
        setIsEditing(false);
    }

    const handleEdit = (routeStop) => {
        setSelected(routeStop);
        setIsEditing(true);
    };

    const handleDelete = async (routeStop) => {
        await deleteRouteStop(routeStop.id);
        const data = await fetchRouteStops();
        setRouteStops(data);
    }

    return (
        <div className={commonStyles.gridContainer}>
            <div className={commonStyles.flexCentered}>
                <RouteStopsForm routeStopData={selected} onSubmit={createOrUpdate}/>
            </div>

            <div>
                {routeStops.map((routeStop) => (
                    <RouteStopsCard
                        key={routeStop.id}
                        routeStop={routeStop}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    />
                ))}
            </div>

        </div>
    );

}

export default RoutesStopsListPage;