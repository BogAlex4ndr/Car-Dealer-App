import api from "@/api/api";

export const getVehicles = async (makeId: string, year: string) => {
    try {
        const response = await api.get(`/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`);
        return response.data.Results;
    } catch (error) {
        console.error("Error fetching vehicle models:", error);
        return [];
    }
};
