import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <h1>Helpdesk</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  );
}
