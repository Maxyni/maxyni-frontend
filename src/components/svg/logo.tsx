type LogoProps = {
    width?: number
    height?: number
    className?: string
}

export function Logo({ width, height, className }: LogoProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width || 50}
            height={height || 50}
            fill="none"
            viewBox="0 0 423 395"
            className={className}
            aria-label="Maxyni"
        >
            <rect
                width="334.567"
                height="69.757"
                fill="url(#paint0_linear_7_4)"
                rx="34.878"
                transform="matrix(.82667 .56268 -.58447 .81141 144.771 0)"
            ></rect>
            <rect
                width="334.567"
                height="69.757"
                fill="url(#paint1_linear_7_4)"
                rx="34.878"
                transform="matrix(.82667 -.56268 .58447 .81141 105.652 337.52)"
            ></rect>
            <path
                fill="url(#paint2_linear_7_4)"
                d="M120.818 106H49.244c-2.926 2.465-3.057 3.987 0 7h71.574l5.182-3.244-5.182-3.756z"
            ></path>
            <path
                fill="url(#paint3_linear_7_4)"
                d="M73.818 256H2.244c-2.926 2.465-3.057 3.987 0 7h71.574L79 259.756 73.818 256z"
            ></path>
            <path
                fill="url(#paint4_linear_7_4)"
                d="M212.703 194h-86.976c-3.556 2.465-3.715 3.987 0 7h86.976l6.297-3.244-6.297-3.756z"
            ></path>
            <defs>
                <linearGradient
                    id="paint0_linear_7_4"
                    x1="0"
                    x2="334.567"
                    y1="34.878"
                    y2="34.878"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0.3" stopColor="#4682B4"></stop>
                    <stop offset="1" stopColor="#73BFFF"></stop>
                </linearGradient>
                <linearGradient
                    id="paint1_linear_7_4"
                    x1="0"
                    x2="334.567"
                    y1="34.878"
                    y2="34.878"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0.3" stopColor="indigo"></stop>
                    <stop offset="1" stopColor="#9A35E4"></stop>
                </linearGradient>
                <linearGradient
                    id="paint2_linear_7_4"
                    x1="47"
                    x2="126"
                    y1="109.5"
                    y2="109.5"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0.3" stopColor="indigo"></stop>
                    <stop offset="1" stopColor="#9A35E4"></stop>
                </linearGradient>
                <linearGradient
                    id="paint3_linear_7_4"
                    x1="0"
                    x2="79"
                    y1="259.5"
                    y2="259.5"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0.3" stopColor="#73BFFF"></stop>
                    <stop offset="1" stopColor="#4682B4"></stop>
                </linearGradient>
                <linearGradient
                    id="paint4_linear_7_4"
                    x1="123"
                    x2="219"
                    y1="197.5"
                    y2="197.5"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0.3" stopColor="#9A35E4"></stop>
                    <stop offset="1" stopColor="#4682B4"></stop>
                </linearGradient>
            </defs>
        </svg>
    )
}