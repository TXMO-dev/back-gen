import React from 'react'

export const Searchbox = ({placeholder,hasChanged}) => (
    <input type = "search" placeholder = {placeholder} onChange = {hasChanged}/>
);