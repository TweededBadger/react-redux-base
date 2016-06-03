import { connect } from 'react-redux'
import TestComponent from '../components/TestComponent'
import {testActionToggle} from '../actions'

const mapStateToProps = (state) => {
    return {
        testState: state.testReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTestClick: (id) => {
            dispatch(testActionToggle())
        }
    }
}

const TestContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TestComponent)

export default TestContainer