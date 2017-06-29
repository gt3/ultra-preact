import Preact from 'preact'
import { render } from 'react-dom'
import { Anchor } from 'ultra'

export function Anchor(props, ctx) {
	return <Anchor getUltra={() => ctx.services.ultra} {...props}  />
}

