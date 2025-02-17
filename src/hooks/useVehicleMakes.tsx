import api from "@/api/api";
import { useState, useEffect } from "react";

interface Make {
    MakeId: number;
    MakeName: string;
}

const useVehicleMakes = () => {
    const [makes, setMakes] = useState<Make[]>([]);
    const [selectedMake, setSelectedMake] = useState("");
    const [selectedYear, setSelectedYear] = useState("");
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: currentYear - 2014 }, (_, i) => (2015 + i).toString());

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await api.get("/vehicles/GetMakesForVehicleType/car?format=json");
                setMakes(res.data.Results);
            } catch (error) {
                console.error("Error fetching makes:", error);
            }
        };

        fetchData();
    }, []);

    return {
        makes,
        selectedMake,
        setSelectedMake,
        selectedYear,
        setSelectedYear,
        years
    };
};

export default useVehicleMakes;
