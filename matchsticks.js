function matchHouses(step) {
    if (step === 0) {
        return 0
    } else if (step === 1) {
            return 6
        } else {
            const additionalSticks = (step - 1) * 5
            return additionalSticks + 6
        }
    }