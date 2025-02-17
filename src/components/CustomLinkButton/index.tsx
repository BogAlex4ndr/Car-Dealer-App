import Link from 'next/link'
import React from 'react'

const CustomLinkButton = ({
    selectedMake,
    selectedYear
}: {
    selectedMake: string,
    selectedYear: string
}) => {
    return (
        <Link
            href={selectedMake && selectedYear ? `/result/${selectedMake}/${selectedYear}` : '#'}
            className={`block w-full p-2 text-center rounded ${selectedMake && selectedYear
                ? 'bg-blue-500 text-white font-bold hover:bg-blue-600'
                : 'bg-gray-300 cursor-not-allowed text-black font-bold'
                }`}
        >
            Next
        </Link>
    )
}

export default CustomLinkButton