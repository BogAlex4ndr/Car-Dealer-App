import { Suspense } from 'react'
import VehicleList from '@/components/VehicleList'
import Link from 'next/link'


export type paramsType = { params: { makeId: string, year: string } }

const ResultPage = ({ params }: paramsType) => {

    return (
        <main className="min-h-screen p-8">
            <Link href="/" className="inline-block mb-6 text-blue-500 hover:text-blue-600">
                ← Back to Filter
            </Link>
            <Suspense fallback={<div>Loading vehicles...</div>}>
                <VehicleList makeId={params.makeId} year={params.year} />
            </Suspense>
        </main>
    )
}

export default ResultPage
