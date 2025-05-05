export type Style = { [key: string]: any } & {
    // Propriedades de layout
    display?: 'flex' | 'none' | 'block' | 'inline' | 'inline-block' | 'grid';
    flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
    justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
    alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
    flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
    flex?: number;
    flexGrow?: number;
    flexShrink?: number;
    flexBasis?: number | string;
    gap?: number | string;
    rowGap?: number | string;
    columnGap?: number | string;

    // Propriedades de dimensão
    width?: number | string;
    height?: number | string;
    minWidth?: number | string;
    minHeight?: number | string;
    maxWidth?: number | string;
    maxHeight?: number | string;
    aspectRatio?: number;

    // Propriedades de margem e padding
    margin?: number | string;
    marginTop?: number | string;
    marginBottom?: number | string;
    marginLeft?: number | string;
    marginRight?: number | string;
    marginHorizontal?: number | string;
    marginVertical?: number | string;
    padding?: number | string;
    paddingTop?: number | string;
    paddingBottom?: number | string;
    paddingLeft?: number | string;
    paddingRight?: number | string;
    paddingHorizontal?: number | string;
    paddingVertical?: number | string;

    // Propriedades de posicionamento
    position?: 'absolute' | 'relative' | 'fixed' | 'sticky';
    top?: number | string;
    bottom?: number | string;
    left?: number | string;
    right?: number | string;
    zIndex?: number;

    // Propriedades de borda
    borderWidth?: number;
    borderTopWidth?: number;
    borderBottomWidth?: number;
    borderLeftWidth?: number;
    borderRightWidth?: number;
    borderColor?: string;
    borderTopColor?: string;
    borderBottomColor?: string;
    borderLeftColor?: string;
    borderRightColor?: string;
    borderRadius?: number | string;
    borderTopLeftRadius?: number | string;
    borderTopRightRadius?: number | string;
    borderBottomLeftRadius?: number | string;
    borderBottomRightRadius?: number | string;

    // Propriedades de fundo
    backgroundColor?: string;
    opacity?: number;
    backgroundImage?: string;
    backgroundSize?: 'cover' | 'contain' | 'auto' | string;
    backgroundPosition?: string;
    backgroundRepeat?: 'repeat' | 'repeat-x' | 'repeat-y' | 'no-repeat';

    // Propriedades de texto
    color?: string;
    fontSize?: number | string;
    fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
    fontStyle?: 'normal' | 'italic';
    fontFamily?: string;
    textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
    textDecorationLine?: 'none' | 'underline' | 'line-through' | 'underline line-through';
    textDecorationColor?: string;
    textDecorationStyle?: 'solid' | 'double' | 'dotted' | 'dashed';
    textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
    lineHeight?: number | string;
    letterSpacing?: number | string;

    // Propriedades de sombra
    shadowColor?: string;
    shadowOffset?: { width: number; height: number };
    shadowOpacity?: number;
    shadowRadius?: number;
    elevation?: number; // Para Android

    // Propriedades de transformação
    transform?: Array<{ perspective?: number } | { rotate?: string } | { rotateX?: string } | { rotateY?: string } | { rotateZ?: string } | { scale?: number } | { scaleX?: number } | { scaleY?: number } | { translateX?: number } | { translateY?: number } | { skewX?: string } | { skewY?: string }>;
    transformOrigin?: string;

    // Propriedades de overflow
    overflow?: 'visible' | 'hidden' | 'scroll';

    // Propriedades de cursor (para web)
    cursor?: 'auto' | 'pointer' | 'text' | 'move' | 'not-allowed';

    // Propriedades de transição (para web)
    transition?: string;
    transitionDuration?: string;
    transitionTimingFunction?: string;
    transitionDelay?: string;

    // Propriedades de animação (para web)
    animationName?: string;
    animationDuration?: string;
    animationTimingFunction?: string;
    animationDelay?: string;
    animationIterationCount?: number | 'infinite';
    animationDirection?: 'normal' | 'reverse' | 'alternate' | 'alternate-reverse';
    animationFillMode?: 'none' | 'forwards' | 'backwards' | 'both';
    boxShadow?: string
}

export interface Styles {
    [key: string]: Style;
}