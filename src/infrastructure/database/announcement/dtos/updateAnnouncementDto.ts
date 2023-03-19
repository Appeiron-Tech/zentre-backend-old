export interface UpdateAnnouncementDto {
  screenCode?: string
  app?: string
  title?: string
  description?: string
  url?: string
  color?: string
  initAt?: Date
  finishAt?: Date
  isActive?: boolean
}
