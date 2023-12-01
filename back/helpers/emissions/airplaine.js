const airplaineEmission = (kms, numberOfSeats = 1, roundTrip = true) => {
    const seatKgCo = .08
    const result = kms * seatKgCo * numberOfSeats
    return Math.floor(roundTrip ? result * 2 : result)
}
module.exports = airplaineEmission