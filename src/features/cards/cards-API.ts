import axios from 'axios'

import { CardType } from './cards-reduser'

export const instance = axios.create({
  baseURL: 'https://neko-back.herokuapp.com/2.0',
  withCredentials: true,
})

export const cardsAPI = {
  getCards(data: GetCardsRequestType) {
    return instance.get<GetCardsResponseType>('/cards/card', { params: { ...data } })
  },
  addCard(data: CreateCardRequestType) {
    return instance.post('/cards/card', data)
  },
  deleteCard(data: { id: string }) {
    return instance.delete('/cards/card', { params: { ...data } })
  },
  updateCard(data: CardType) {
    return instance.put('/cards/card', { card: data })
  },
}

// types
export type GetCardsRequestType = {
  cardsPack_id: string
  cardAnswer?: string
  cardQuestion?: string
  min?: number
  max?: number
  sortCards?: string
  page?: number
  pageCount?: number
}

export type GetCardsResponseType = {
  cards: CardType[]
  cardsTotalCount: number
  maxGrade: number
  minGrade: number
  page: number
  pageCount: number
  packUserId: string
}

export type CreateCardRequestType = {
  card: {
    cardsPack_id: string
    question?: string
    answer?: string
    grade?: number
    shots?: number
    answerImg?: string
    questionImg?: string
    questionVideo?: string
    answerVideo?: string
  }
}
