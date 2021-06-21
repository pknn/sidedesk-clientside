import { Ticket, TicketBody, TicketCreationForm } from 'app/types/Ticket'
import axios, { AxiosInstance } from 'axios'

class TicketClient {
  baseURL: string
  client: AxiosInstance
  constructor() {
    this.baseURL = import.meta.env.VITE_SS_URL
    this.client = axios.create({
      baseURL: this.baseURL + '/tickets',
    })
  }

  async getTickets(): Promise<Ticket[]> {
    const { data } = await this.client.get('/')

    return data.map(
      (ticketBody: TicketBody): Ticket => ({
        id: ticketBody.id,
        title: ticketBody.title,
        description: ticketBody.description,
        reporterName: ticketBody.reporter_name,
        reporterEmail: ticketBody.reporter_email,
        status: ticketBody.status,
        createdAt: ticketBody.created_at,
        updatedAt: ticketBody.updated_at,
      }),
    )
  }

  async createTicket(ticket: TicketCreationForm) {
    const body = {
      title: ticket.title,
      description: ticket.description,
      reporter_name: ticket.reporterName,
      reporter_email: ticket.reporterEmail,
      status: ticket.status,
    }
    return this.client.post('/', body)
  }

  async updateTicket(ticket: Ticket) {
    const body = {
      title: ticket.title,
      description: ticket.description,
      reporter_name: ticket.reporterName,
      reporter_email: ticket.reporterEmail,
      status: ticket.status,
    }
    const { data } = await this.client.put(`/${ticket.id}`, body)

    return {
      id: data.id,
      title: data.title,
      description: data.description,
      reporterName: data.reporter_name,
      reporterEmail: data.reporter_email,
      status: data.status,
      createdAt: data.created_at,
      updatedAt: data.updated_at,
    }
  }
}

export const ticketClient = new TicketClient()
