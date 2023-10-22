import {memo } from 'react';

export const Small =memo(({value})=>{

    // const {counter,}

    console.log('Me volvi a dibujar :()')
    return (
        <>
          <small>{value}</small>
        </>
    )
})