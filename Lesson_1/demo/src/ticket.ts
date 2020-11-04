function arrangeTickets(tickets: string[], criteria: string): string {

    class Ticket {
        constructor(
            public destination: string,
            public price: number,
            public status: string) { }
    }

    const orderedTickets: Ticket[] = [];

    for (const ticketData of tickets) {
        const ticket: Ticket = createTicket(ticketData);

        orderedTickets.push(ticket);
    }

    orderedTickets.sort((a, b) => sortTickets(a, b, criteria));

    return JSON.stringify(orderedTickets);

    function createTicket(ticketData: string): Ticket {
        const ticketItems: string[] = ticketData.split('|');

        const destination: string = ticketItems[0];
        const price: number = Number(ticketItems[1]);
        const status: string = ticketItems[2];

        const madeTicket = new Ticket(destination, price, status);

        return madeTicket;
    }

    function sortTickets(a: Ticket, b: Ticket, criteria: string): number {
        if (criteria === 'price') {
            return a.price - b.price;
        } else {
            const aValue: string = a[criteria as keyof Ticket].toString();
            const bValue: string = b[criteria as keyof Ticket].toString();

            return aValue.localeCompare(bValue);
        }
    }
}

const result1 = arrangeTickets([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
],
    'destination'
);

const result2 = arrangeTickets([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'

],
    'status'
);

const result3 = arrangeTickets([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'

],
    'price'
);

console.log(result1);
console.log();
console.log(result2);
console.log();
console.log(result3);
console.log();