import { jsx } from '@emotion/react'
import { CSSProperties, FC } from 'react'

const { isArray } = Array

type Margin = CSSProperties['margin']
type Padding = CSSProperties['padding']
type Position = CSSProperties['position']

interface ViewNormalProps {
  isMounted?: boolean
  isHidden?: boolean
  id?: string
  as?: string
  position?: Position
  margin?: Margin | [Margin] | [Margin, Margin] | [Margin, Margin, Margin, Margin]
  marginTop?: Margin
  marginRight?: Margin
  marginBottom?: Margin
  marginLeft?: Margin
  padding?: Padding | [Padding] | [Padding, Padding] | [Padding, Padding, Padding, Padding]
  paddingTop?: Padding
  paddingRight?: Padding
  paddingBottom?: Padding
  paddingLeft?: Padding
  backgroundImageUrl?: string
}

export interface ViewProps extends ViewNormalProps {
  externalProps?: ViewNormalProps
  xxxl?: ViewNormalProps
  xxl?: ViewNormalProps
  xl?: ViewNormalProps
  lg?: ViewNormalProps
  md?: ViewNormalProps
  sm?: ViewNormalProps
}

const defaultValues = {
  as: 'div',
  isMounted: true,
  isHidden: false,
} as const

export const View: FC<ViewProps> = (props) => {
  const properties = Object.assign({}, defaultValues, props)

  const {
    as,
    id,
    position,
    margin,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    padding,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    backgroundImageUrl,
    children,
    isMounted,
    isHidden,
  } = properties

  if (!isMounted) {
    return null
  }

  const css: CSSProperties = {
    position,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
  }

  if (isHidden) {
    css.display = 'none'
  }

  if (margin) {
    if (isArray(margin)) {
      css.margin = margin.map((m) => `${m}px`).join(' ')
    } else {
      css.margin = margin
    }
  }

  if (padding) {
    if (isArray(padding)) {
      css.padding = padding.map((m) => `${m}px`).join(' ')
    } else {
      css.padding = padding
    }
  }

  if (backgroundImageUrl) {
    css.backgroundImage = `url("${backgroundImageUrl}")`
  }

  return jsx(
    as,
    {
      id,
      css,
    },
    children,
  )
}
