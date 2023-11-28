import Link from 'next/link';

export default function NotFound() {
    return (
        <main className='text-center'>
            <div className='card'>
                <h2 className='text-3xl'>Not Found</h2>
                <p>
                    The page you are looking for does not exist. Please check
                    the URL and try again.
                </p>
                <p>
                    Go back to the <Link href='/'>Dashboard</Link>
                </p>
            </div>
        </main>
    );
}
