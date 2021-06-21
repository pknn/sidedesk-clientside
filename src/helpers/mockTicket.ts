import faker from 'faker'

import { Ticket, TicketForm, TicketStatus } from 'app/types/Ticket'

export const ticketStatusOptions: TicketStatus[] = [
  TicketStatus.Pending,
  TicketStatus.Accepted,
  TicketStatus.Resolved,
  TicketStatus.Rejected,
]

type DateIndex = 0 | 1 | 2

const dates: Date[] = [
  new Date(1623862800),
  new Date(1623949200),
  new Date(1624035600),
]

const getFakeDate = (dateIndex: DateIndex): Date => dates[dateIndex]

const getFakeTicket = (
  status?: TicketStatus,
  dateIndex?: DateIndex,
): Ticket => {
  const firstName = faker.name.firstName()
  const lastName = faker.name.lastName()
  const fullName = `${firstName} ${lastName}`
  return {
    id: faker.datatype.number(),
    title: faker.lorem.sentence(10),
    description: faker.lorem.sentences(4),
    reporterName: fullName,
    reporterEmail: faker.internet.email(firstName, lastName),
    status: status || faker.random.arrayElement(ticketStatusOptions),
    createdAt: getFakeDate(dateIndex || 0),
    updatedAt: getFakeDate(dateIndex || 0),
  }
}

export const getMockTicket = (status?: TicketStatus): Ticket => {
  faker.seed(96421)
  return getFakeTicket(status)
}

export const getMockTickets = (n: number, status?: TicketStatus): Ticket[] => {
  faker.seed(96421)
  const tickets: Ticket[] = []
  for (let i = 0; i < n; i += 1) {
    const fa = i % 3 == 0
    const fb = i % 3 == 1
    tickets.push(getFakeTicket(status, fa ? 0 : fb ? 1 : 2))
  }
  return tickets
}

export const getTickets = (n: number, status: TicketStatus): Ticket[] => {
  const tickets: Ticket[] = []
  for (let i = 0; i < n; i += 1) {
    const fa = i % 3 == 0
    const fb = i % 3 == 1
    tickets.push(getFakeTicket(status, fa ? 0 : fb ? 1 : 2))
  }
  return tickets
}
