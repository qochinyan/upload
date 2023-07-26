export type UserMessage = {
  id: string
  text: string
  author: string
}

export type ServersToClient = {
  message: (msg: UserMessage) => void
}
export type ClientToServer = {
  message: (msg: Omit<UserMessage, 'id'>) => void
}