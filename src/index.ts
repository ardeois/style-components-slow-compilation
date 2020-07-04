import { css, SystemStyleObject } from '@styled-system/css';

const BUTTON_HEIGHT = {
    xs: '24px',
    sm: '36px',
    md: '48px',
    lg: '64px',
};

type CssFnType = (input?: SystemStyleObject) => ReturnType<typeof css>;

const cssFn: CssFnType = css as any;

const ButtonRoot = cssFn({fontWeight: 'bold', padding: 0, textDecoration: 'none'});

const ButtonSize = {
    xs: {
        root: cssFn({
            fontSize: 'sm',
            lineHeight: '16px',
            height: BUTTON_HEIGHT.xs,
            minWidth: BUTTON_HEIGHT.xs,
            px: 'sm',
        }),
        Icon: {
            root: cssFn({
                width: '16px',
                height: '16px',
            }),

            left: cssFn({
                marginRight: '4px',
                marginLeft: '-4px',
            }),

            right: cssFn({
                marginLeft: '4px',
                marginRight: '-4px',
            }),
        },
    },
    sm: {
        root: cssFn({
            fontSize: 'md',
            lineHeight: '20px',
            height: BUTTON_HEIGHT.sm,
            minWidth: BUTTON_HEIGHT.sm,
            px: 'sm',
        }),
        Icon: {
            root: cssFn({
                width: '18px',
                height: '18px',
            }),

            left: cssFn({
                marginRight: '4px',
                marginLeft: '-4px',
            }),

            right: cssFn({
                marginLeft: '4px',
                marginRight: '-4px',
            }),
        },
    },
    md: {
        root: cssFn({
            fontSize: 'md',
            lineHeight: '24px',
            height: BUTTON_HEIGHT.md,
            minWidth: BUTTON_HEIGHT.md,
            px: 'md',
        }),
        Icon: {
            root: cssFn({
                width: '24px',
                height: '24px',
            }),
            left: cssFn({
                marginRight: '8px',
                marginLeft: '-4px',
            }),
            right: cssFn({
                marginLeft: '8px',
                marginRight: '-4px',
            }),
        },
    },
    lg: {
        root: cssFn({
            fontSize: 'lg',
            lineHeight: '24',
            height: BUTTON_HEIGHT.lg,
            minWidth: BUTTON_HEIGHT.lg,
            px: 'lg',
        }),
        Icon: {
            root: cssFn({
                width: '24px',
                height: '24px',
            }),
            left: cssFn({
                marginRight: '8px',
                marginLeft: '-4px',
            }),
            right: cssFn({
                marginLeft: '8px',
                marginRight: '-4px',
            }),
        },
    },
};

const ButtonKind = {
    solid: cssFn({}),
    minimal: cssFn({
        backgroundColor: 'transparent',
    }),
    link: cssFn({
        backgroundColor: 'transparent',
        border: 'none',
        height: 'initial',
        minWidth: 'initial',
        padding: 0,
        '&:hover': {
            textDecoration: 'underline',
        },
    }),
};

const ButtonShape = {
    default: cssFn({
        borderRadius: 'sm',
    }),
    rounded: cssFn({
        borderRadius: 'round',
    }),
};

const ButtonVariant = {
    primary: {
        solid: {
            normal: cssFn({
                color: 'neutral.50',
                backgroundColor: 'primary.500',
            }),
            hover: cssFn({
                backgroundColor: 'primary.700',
            }),
        },
        minimal: {
            normal: cssFn({
                color: 'primary.500',
            }),
            hover: cssFn({
                color: 'neutral.50',
                backgroundColor: 'primary.700',
            }),
        },
        link: {
            normal: cssFn({
                color: 'primary.500',
            }),
            hover: cssFn({
                color: 'primary.700',
            }),
        },
    },
    secondary: {
        solid: {
            normal: cssFn({
                color: 'neutral.50',
                backgroundColor: 'neutral.900',
            }),
            hover: cssFn({
                backgroundColor: 'neutral.700',
            }),
        },
        minimal: {
            normal: cssFn({
                color: 'neutral.900',
            }),
            hover: cssFn({
                color: 'neutral.50',
                backgroundColor: 'neutral.700',
            }),
        },
        link: {
            normal: cssFn({
                color: 'neutral.900',
            }),
            hover: cssFn({
                color: 'neutral.700',
            }),
        },
    },
    subtle: {
        solid: {
            normal: cssFn({
                color: 'neutral.1000',
                backgroundColor: 'neutral.0',
            }),
            hover: cssFn({
                backgroundColor: 'neutral.200',
            }),
        },
        minimal: {
            normal: cssFn({
                color: 'neutral.1000',
            }),
            hover: cssFn({
                color: 'neutral.1000',
                backgroundColor: 'neutral.0',
            }),
        },
        link: {
            normal: cssFn({
                color: 'neutral.900',
            }),
            hover: cssFn({
                color: 'neutral.700',
            }),
        },
    },
    accent: {
        solid: {
            normal: cssFn({
                backgroundColor: 'secondary.500',
                color: 'neutral.50',
            }),
            hover: cssFn({backgroundColor: 'secondary.700'}),
        },
        minimal: {
            normal: cssFn({
                color: 'secondary.500',
            }),
            hover: cssFn({color: 'neutral.50', backgroundColor: 'secondary.700'}),
        },
        link: {
            normal: cssFn({
                color: 'secondary.500',
            }),
            hover: cssFn({color: 'secondary.700'}),
        },
    },
    ghost: {
        solid: {
            normal: cssFn({
                color: 'neutral.900',
                backgroundColor: 'neutral.200',
            }),
            hover: cssFn({
                backgroundColor: 'neutral.400',
            }),
        },
        minimal: {
            normal: cssFn({
                color: 'neutral.500',
            }),
            hover: cssFn({
                color: 'neutral.50',
                backgroundColor: 'neutral.800',
            }),
        },
        link: {
            normal: cssFn({
                color: 'neutral.500',
            }),
            hover: cssFn({
                color: 'neutral.900',
            }),
        },
    },
    danger: {
        solid: {
            normal: cssFn({
                color: 'neutral.50',
                backgroundColor: 'danger.500',
            }),
            hover: cssFn({
                backgroundColor: 'danger.700',
            }),
        },
        minimal: {
            normal: cssFn({
                color: 'danger.500',
            }),
            hover: cssFn({
                color: 'neutral.50',
                backgroundColor: 'danger.700',
            }),
        },
        link: {
            normal: cssFn({
                color: 'danger.500',
            }),

            hover: cssFn({
                color: 'danger.700',
            }),
        },
    },
    warning: {
        solid: {
            normal: cssFn({
                color: 'neutral.50',
                backgroundColor: 'warning.500',
            }),
            hover: cssFn({
                backgroundColor: 'warning.700',
            }),
        },
        minimal: {
            normal: cssFn({
                color: 'warning.500',
            }),
            hover: cssFn({
                color: 'neutral.50',
                backgroundColor: 'warning.700',
            }),
        },
        link: {
            normal: cssFn({
                color: 'warning.500',
            }),
            hover: cssFn({
                color: 'warning.700',
            }),
        },
    },
    success: {
        solid: {
            normal: cssFn({
                color: 'neutral.50',
                backgroundColor: 'success.500',
            }),
            hover: cssFn({
                backgroundColor: 'success.700',
            }),
        },
        minimal: {
            normal: cssFn({
                color: 'success.500',
            }),
            hover: cssFn({
                color: 'neutral.50',
                backgroundColor: 'success.700',
            }),
        },
        link: {
            normal: cssFn({
                color: 'success.500',
            }),
            hover: cssFn({
                color: 'success.700',
            }),
        },
    },
    facebook: {
        solid: {
            normal: cssFn({
                color: 'neutral.50',
                backgroundColor: 'facebook.500',
            }),
            hover: cssFn({
                backgroundColor: 'facebook.700',
            }),
        },
        minimal: {
            normal: cssFn({
                color: 'facebook.500',
            }),
            hover: cssFn({
                color: 'neutral.50',
                backgroundColor: 'facebook.700',
            }),
        },
        link: {
            normal: cssFn({
                color: 'facebook.500',
            }),
            hover: cssFn({
                color: 'facebook.700',
            }),
        },
    },
    twitter: {
        solid: {
            normal: cssFn({
                color: 'neutral.50',
                backgroundColor: 'twitter.500',
            }),
            hover: cssFn({
                backgroundColor: 'twitter.700',
            }),
        },
        minimal: {
            normal: cssFn({
                color: 'twitter.500',
            }),
            hover: cssFn({
                color: 'neutral.50',
                backgroundColor: 'twitter.700',
            }),
        },
        link: {
            normal: cssFn({
                color: 'twitter.500',
            }),
            hover: cssFn({
                color: 'twitter.700',
            }),
        },
    },
};

const ButtonDisabled = {
    solid: cssFn({
        color: 'neutral.400',
        backgroundColor: 'neutral.200',
    }),
    minimal: cssFn({
        color: 'neutral.400',
    }),
    link: cssFn({
        color: 'neutral.400',
    }),
};

const styles = {
    root: ButtonRoot,
    size: ButtonSize,
    kind: ButtonKind,
    shape: ButtonShape,
    variant: ButtonVariant,
    disabled: ButtonDisabled,
    height: BUTTON_HEIGHT,
};

export default styles;
