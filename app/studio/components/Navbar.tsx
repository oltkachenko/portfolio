import {Box, Card, Flex} from '@sanity/ui'
import type {NavbarProps} from 'sanity'


export default function Navbar(props: NavbarProps) {

  return (
    <Card scheme="dark">
      <Flex align="center">
        <Box flex={1}>{props.renderDefault(props)}</Box>
      </Flex>
    </Card>
  )
}
