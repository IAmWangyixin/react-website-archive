import React from 'react'
import EventMixingExploration from './synthetic-event/event-mixing-exploration'
import Form from './form/form'
import EmitEvent from './emit-event/emit-event'

export default function Overview () {
    return (
        <div>
            <EventMixingExploration />
            <Form />
            <EmitEvent />
        </div>
    )
}