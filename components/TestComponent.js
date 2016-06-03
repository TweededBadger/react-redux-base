import React, { PropTypes } from 'react'

const TestComponent = ({testState, onTestClick}) => {
    return (
        <a href="#" onClick={e => {
            e.preventDefault()
            onTestClick()
        }}>
            {testState.toString()}
        </a>
    )
}

TestComponent.propTypes = {
    testState: PropTypes.bool.isRequired
}

export default TestComponent