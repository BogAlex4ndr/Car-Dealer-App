'use client'

import Link from 'next/link'
import useVehicleMakes from '@/hooks/useVehicleMakes'
import CustomLinkButton from '../CustomLinkButton';

export const CarsFilter = () => {

    const { makes, selectedMake, setSelectedMake, selectedYear, setSelectedYear, years } = useVehicleMakes();

    return (
        <div className="max-w-md mx-auto space-y-6 mt-[10%]">
            <h1 className="text-2xl font-bold text-center">Car Dealer App</h1>
            <select
                className="w-full bg-slate-600 p-2 border rounded"
                value={selectedMake}
                onChange={(e) => setSelectedMake(e.target.value)}
            >
                <option value="">Select Make</option>
                {makes && makes.map((make) => (
                    <option key={make.MakeId} value={make.MakeId}>
                        {make.MakeName}
                    </option>
                ))}
            </select>

            <select
                className="w-full bg-slate-600 p-2 border rounded"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
            >
                <option value="">Select Year</option>
                {years.map((year) => (
                    <option key={year} value={year}>
                        {year}
                    </option>
                ))}
            </select>
            <CustomLinkButton selectedMake={selectedMake} selectedYear={selectedYear} />
        </div>
    )
}

export default CarsFilter;