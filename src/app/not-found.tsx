import Link from 'next/link';

const NotFound = () => {
    return (
        <div className='flex justify-center h-screen items-center w-full'>
            <div className='flex flex-col text-center gap-2'>
                <h1 className='text-2xl'>404 - Page Not Found</h1>
                <p>Couldn&apos;t find what you&apos;re looking for</p>
                <Link className='text-blue-500' href="/">
                    Go back to the homepage
                </Link>
            </div>
        </div>
    );
}

export default NotFound;