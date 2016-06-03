import expect from 'expect'
import { testReducer }  from '../../reducers'

describe('test reducer', () => {
    it('should have an initial state of true', () => {
        expect(
            testReducer(undefined, {})
        ).toEqual(true)
    })
    it('should handle SWITCH', () => {
        expect(
            testReducer(true, {
                type: 'SWITCH'
            })
        ).toEqual(false)
    })
    it('should fail miserably', () => {
        expect(
            testReducer(true, {
                type: 'flimflomflam'
            })
        ).toEqual(false)
    })
})