import React from 'react'
import { vehicleItemProps } from './vehickeItem.type';

const VehicleItem = ({ vehicle, year }: vehicleItemProps) => {
    return (
        <div
            key={vehicle.Model_ID}
            className="p-4 border rounded shadow hover:shadow-md transition-shadow"
        >
            <h2 className="text-xl font-semibold">{vehicle.Model_Name}</h2>
            <p className="text-gray-600">Model ID: {vehicle.Model_ID}</p>
            <p className="text-gray-600">Year: {year}</p>
        </div>
    )
}

export default VehicleItem;