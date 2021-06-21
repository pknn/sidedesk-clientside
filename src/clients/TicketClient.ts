import { Ticket, TicketCreationForm } from 'app/types/Ticket'
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

  async getTickets() {
    return (await this.client.get('/')).data
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
    return (await this.client.put(`/${ticket.id}`, body)).data as Ticket
  }
}

export const ticketClient = new TicketClient()
