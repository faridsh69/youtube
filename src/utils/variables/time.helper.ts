export const getRelativeTime = (createdAt: string): string => {
  const createdDate = new Date(createdAt)
  const now = new Date()

  // Compare calendar dates (not time diff in milliseconds)
  const isSameDay =
    createdDate.getFullYear() === now.getFullYear() &&
    createdDate.getMonth() === now.getMonth() &&
    createdDate.getDate() === now.getDate()

  if (isSameDay) {
    return 'Today'
  }

  // Calculate days difference using calendar days
  const msPerDay = 1000 * 60 * 60 * 24
  const utc1 = Date.UTC(createdDate.getFullYear(), createdDate.getMonth(), createdDate.getDate())
  const utc2 = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate())
  const diffDays = Math.floor((utc2 - utc1) / msPerDay)

  if (diffDays <= 7) {
    return `${diffDays}d`
  }

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }

  return createdDate.toLocaleDateString(undefined, options)
}
