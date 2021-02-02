import { format, parseISO } from 'date-fns'

export const parseIsoDate = (date: string) => format(parseISO(date), 'HH:mm  MM.dd.yyyy')