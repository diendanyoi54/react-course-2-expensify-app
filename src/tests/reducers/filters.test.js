import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_FILTER', sortBy: 'amount' });
    expect(state.sortBy).toBe('amount');
})

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const action = { type: 'SORT_BY_FILTER', sortBy: 'date' }
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
})

test('should set text to test', () => {
    const action = {
        type: 'SET_TEXT_FILTER',
        text: 'test'
    }
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe('test');
})

test('should set startDate to 0', () => {
    const startDate = moment();
    const action = {
        type: 'START_DATE_FILTER',
        startDate
    }
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toEqual(startDate);
})

test('should set endDate to 0', () => {
    const endDate = moment(0);
    const action = {
        type: 'END_DATE_FILTER',
        endDate
    }
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toEqual(endDate);
})