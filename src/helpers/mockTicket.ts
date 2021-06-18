import faker from 'faker'

import { Ticket, TicketStatus } from 'app/types/Ticket'

const ticketStatusOptions: TicketStatus[] = [
  TicketStatus.Pending,
  TicketStatus.Accepted,
  TicketStatus.Resolved,
  TicketStatus.Rejected,
]

export const getMockTicket = (): Ticket => {
  faker.seed(96421)
  const firstName = faker.name.firstName()
  const lastName = faker.name.lastName()
  const fullName = `${firstName} ${lastName}`
  return {
    id: faker.datatype.number(),
    title: faker.lorem.sentence(10),
    description: faker.lorem.sentences(4),
    reporterName: fullName,
    reporterEmail: faker.internet.email(firstName, lastName),
    status: faker.random.arrayElement(ticketStatusOptions),
    createdAt: faker.date.future(),
    updatedAt: faker.date.future(),
  }
}

export const getMockTickets = (n: number): Ticket[] => {
  const tickets: Ticket[] = []
  for (let i = 0; i < n; i += 1) {
    tickets.push(getMockTicket())
  }
  return tickets
}
