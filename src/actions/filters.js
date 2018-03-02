export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

export const sortByAmount = () => ({
    type: 'SORT_BY_FILTER',
    sortBy: 'amount'
})

export const sortByDate = () => ({
    type: 'SORT_BY_FILTER',
    sortBy: 'date'
})

export const setStartDate = (startDate) => ({
    type: 'START_DATE_FILTER',
    startDate
})

export const setEndDate = (endDate) => ({
    type: 'END_DATE_FILTER',
    endDate
})