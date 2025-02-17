import Link from 'next/link';

export default function NotFound() {
    return (
        <div className='flex justify-center h-screen items-center w-full'>
            <div className='flex flex-col text-center gap-2'>
                <h1 className='text-2xl'>404 - Page Not Found</h1>
                <p>Oops! The page you're looking for doesn't exist.</p>
                <Link className='text-blue-500' href="/">
                    Go back to the homepage
                </Link>
            </div>
        </div>
    );
}