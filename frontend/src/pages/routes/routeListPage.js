import React, {useState, useEffect} from "react";
import {fetchRoutes, updateRoute, createRoute, deleteRoute} from "src/api/routeApi";
import RouteCard from "src/components/routes/routeCard";
import RouteForm from "src/components/routes/routeForm";
import commonStyles from "src/common/common.module.css";

const RoutesListPage = () => {
    const [routes, setRoutes] = useState([]);
    const [selected, setSelected] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        const getRoutes = async () => {
            const data = await fetchRoutes();
            setRoutes(data);
        }
        getRoutes();

    }, []);

    const createOrUpdate = async (route) => {
        if (isEditing) {
            await updateRoute(selected.id, route);
            setSelected(null);
        } else {
            await createRoute(route);
        }
        const data = await fetchRoutes();
        setRoutes(data);
        setIsEditing(false);
    }

    const handleEdit = (route) => {
        setSelected(route);
        setIsEditing(true);
    };

    const handleDelete = async (route) => {
        await deleteRoute(route.id);
        const data = await fetchRoutes();
        setRoutes(data);
    }

    return (
        <div className={commonStyles.gridContainer}>
            <div className={commonStyles.flexCentered}>
                <RouteForm routeData={selected} onSubmit={createOrUpdate}/>
            </div>
            <div>
                {routes.map((route) => (
                    <RouteCard
                        key={route.id}
                        route={route}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    />
                ))}
            </div>
        </div>
    );
}

export default RoutesListPage;