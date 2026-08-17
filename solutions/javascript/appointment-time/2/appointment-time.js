// @ts-check

/**
 * Create an appointment
 *
 * @param {number} days
 * @param {number} [now] (ms since the epoch, or undefined)
 *
 * @returns {Date} the appointment
 */
export function createAppointment(days, now = undefined) {
  const date = now ? new Date(now) : new Date() 
  date.setDate(date.getDate()+days)
  return date
}

/**
 * Generate the appointment timestamp
 *
 * @param {Date} appointmentDate
 *
 * @returns {string} timestamp
 */
export function getAppointmentTimestamp(appointmentDate) {
   return appointmentDate.toISOString()
}

/**
 * Get details of an appointment
 *
 * @param {string} timestamp (ISO 8601)
 *
 * @returns {Record<'year' | 'month' | 'appointmentDate' | 'hour' | 'minute', number>} the appointment details
 */
export function getAppointmentDetails(timestamp) {
  timestamp = new Date(timestamp)
  const year = timestamp.getFullYear();
  const month = timestamp.getMonth()
  const date = timestamp.getDate()
  const hour = timestamp.getHours()
  const minute = timestamp.getMinutes()
  const result = {year, month, date, hour, minute}
  return result
}

/**
 * Update an appointment with given options
 *
 * @param {string} timestamp (ISO 8601)
 * @param {Partial<Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>>} options
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function updateAppointment(timestamp, options) {
  const appointment = new Date(timestamp)

  for (const key in options) {
    switch(key){      
        case 'year':
          appointment.setFullYear(options[key])
          break
        case 'month':
          appointment.setMonth(options[key])
          break
        case 'date':
          appointment.setDate(options[key])
          break
        case 'hour':
          appointment.setHours(options[key])
          break
        case 'minute':
          appointment.setMinutes(options[key])
          break
    }
  }
  return getAppointmentDetails(appointment)
}

/**
 * Get available time in seconds (rounded) between two appointments
 *
 * @param {string} timestampA (ISO 8601)
 * @param {string} timestampB (ISO 8601)
 *
 * @returns {number} amount of seconds (rounded)
 */
export function timeBetween(timestampA, timestampB) {
  const timeA = new Date(timestampA)
  const timeB = new Date(timestampB)
  
  return Math.abs(Math.round((timeA.getTime()-timeB.getTime())/1000))
  
}

/**
 * Get available times between two appointment
 *
 * @param {string} appointmentTimestamp (ISO 8601)
 * @param {string} currentTimestamp (ISO 8601)
 */
export function isValid(appointmentTimestamp, currentTimestamp) {
  return new Date(appointmentTimestamp) > new Date(currentTimestamp)
  // const appointmentTime = new Date(appointmentTimestamp)
  // const currentTime = new Date(currentTimestamp)

  // return (currentTime-appointmentTime) > 0 ? false : true

  
}
