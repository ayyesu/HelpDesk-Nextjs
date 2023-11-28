import Link from 'next/link';

async function getTickets() {
    // Simulate a slow network connection
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const res = await fetch('http://localhost:4000/tickets', {
        next: {
            revalidate: 0,
        },
    });

    return res.json();
}

export default async function TicketList() {
    const ticket = await getTickets();

    return (
        <>
            {ticket.map((ticket) => (
                <div key={ticket.id} className='card my-5'>
                    <Link href={`/tickets/${ticket.id}`}>
                        <h3>{ticket.title}</h3>
                        <p>{ticket.body.slice(0, 200)}...</p>
                        <div className={`pill ${ticket.priority}`}>
                            {ticket.priority} priority
                        </div>
                    </Link>
                </div>
            ))}
            {ticket.length === 0 && (
                <p className='text-center'>There are no open tickets</p>
            )}
        </>
    );
}
