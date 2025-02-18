import { humanize } from '@/lib/utils/textConverter'
import React from 'react'
import type { IconProps } from 'react-feather'
import * as Icon from 'react-feather'

/**
 * @see astro.config.js
 * @see https://www.npmjs.com/package/astro-auto-import?activeTab=readme
 * @param props
 * @returns
 */
export default function FeatherIcon(props: IconProps) {

    const iconName = props.name?.startsWith("_") ? props.name.substring(1,props.name.length) : humanize(props.name as string)

    const IconI = Icon[iconName]

    return (
        <IconI {...props} />
    )
}
