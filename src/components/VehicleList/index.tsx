import VehicleItem from "./VehicleItem"
import { getVehicles } from "@/services/getVehicles"
import { vehicle } from './vehicles.type'

const VehicleList = async ({
    makeId,
    year,
}: {
    makeId: string
    year: string
}) => {
    const vehicles: vehicle[] = await getVehicles(makeId, year)

    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {vehicles?.map((vehicle: vehicle) => (
                <VehicleItem
                    key={vehicle.Model_ID}
                    vehicle={vehicle}
                    year={year}
                />
            ))}
        </div>
    )
}

export default VehicleList
