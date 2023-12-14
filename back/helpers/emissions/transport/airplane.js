const airplaineEmission = (kms = 0, numberOfSeats = 1, roundTrip = true) => {
    const seatKgCo = .08
    const result = kms * seatKgCo * numberOfSeats
    return Number((roundTrip ? result * 2 : result).toFixed(1))
}
module.exports = airplaineEmission