import React from 'react'
import EventMixingExploration from './synthetic-event/event-mixing-exploration'
import Form from './form/form'

export default function Overview () {
    return (
        <div>
            <EventMixingExploration />
            <Form />
        </div>
    )
}