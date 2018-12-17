import { setTextFilter, setVisibilityFilter } from '../filters'

it('should generate setTextFilter action object', () => {
    const text = 'this is todo text'
    const action = setTextFilter(text)
    expect(action).toEqual({
        type: 'SET_TEXT-FILTER',
        text
    })
})

it('should generate setVisibilityFilter action object', () => {
    const action = setVisibilityFilter()
    expect(action).toEqual({
        type: 'SET_VISIBILITY_FILTER'
    })
})