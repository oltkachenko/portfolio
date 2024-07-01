import groq from "groq";

import { LINK_EXTERNAL } from "../links/linkExternal";
import { LINK_INTERNAL } from "../links/linkInternal";

export const MARK_DEFS = groq`
	...,
	(_type == 'annotationLinkExternal') => {
	    ${LINK_EXTERNAL}
	},
	(_type == 'annotationLinkInternal') => {
	    ${LINK_INTERNAL}
	}
`;
