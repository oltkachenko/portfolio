import {Flex, Text} from '@sanity/ui'
import React from 'react'
import styled from 'styled-components'
import ReactCountryFlag from "react-country-flag"

const SquareFlex = styled(Flex)`
    & img {
        position: static;
    }
`

type TranslatedDocType = {
    languageIcon?: string | undefined
}

export default function TranslatedDoc(props: TranslatedDocType) {
    const { languageIcon } = props

    return (
        <SquareFlex align="center" justify="center">
            <ReactCountryFlag countryCode={languageIcon === 'EN' ? 'GB' : languageIcon || 'GB'}
                svg
                style={{
                    width: '20px',
                    height: '20px',
                }} 
            />
        </SquareFlex>
    )
}
