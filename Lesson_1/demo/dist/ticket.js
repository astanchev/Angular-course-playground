function arrangeTickets(tickets, criteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    const orderedTickets = [];
    for (const ticketData of tickets) {
        const ticket = createTicket(ticketData);
        orderedTickets.push(ticket);
    }
    orderedTickets.sort((a, b) => sortTickets(a, b, criteria));
    return JSON.stringify(orderedTickets);
    function createTicket(ticketData) {
        const ticketItems = ticketData.split('|');
        const destination = ticketItems[0];
        const price = Number(ticketItems[1]);
        const status = ticketItems[2];
        const madeTicket = new Ticket(destination, price, status);
        return madeTicket;
    }
    function sortTickets(a, b, criteria) {
        if (criteria === 'price') {
            return a.price - b.price;
        }
        else {
            const aValue = a[criteria].toString();
            const bValue = b[criteria].toString();
            return aValue.localeCompare(bValue);
        }
    }
}
const result1 = arrangeTickets([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
], 'destination');
const result2 = arrangeTickets([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
], 'status');
const result3 = arrangeTickets([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
], 'price');
console.log(result1);
console.log();
console.log(result2);
console.log();
console.log(result3);
console.log();
//# sourceMappingURL=ticket.js.map