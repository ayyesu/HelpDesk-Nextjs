import {Suspense} from 'react';
import TicketList from './TicketList';
import Loading from '../loading';
import Link from 'next/link';

export default function Ticket() {
    return (
        <main>
            <nav>
                <h2>Tickets</h2>
                <p>
                    <small>Currently open tickets</small>
                </p>
            </nav>

            <Suspense fallback={<Loading />}>
                <TicketList />
            </Suspense>
        </main>
    );
}
