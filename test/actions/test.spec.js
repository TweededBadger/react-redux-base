import expect from 'expect'
import * as actions from '../../actions'

describe('test actions', () => {
    it('testActionToggle should create SWITCH action', () => {
        expect(actions.testActionToggle()).toEqual({
            type: 'SWITCH'
        })
    })
})