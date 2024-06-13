import { useLocale, useTranslations } from "next-intl";
import Link from "next/link"

export default function Logo() {
    const locale = useLocale();
    const t = useTranslations('Logo');

    return (
        <Link href={`/${locale}`} title={t('title')}>
            <svg viewBox="0 0 100 100" width="50" height="50" aria-label={t('label')}>
                <g transform="matrix(1.231527, 0, 0, 1.231527, -11.576344, -11.576344)" fill="#ACD8AA">
                    <circle cx="50" cy="50" r="17.8"></circle>
                    <path d="M50,78.9c16,0,28.9-13,28.9-28.9c0-8.9-4-17.1-10.9-22.6l-5.3,6.7c4.9,3.9,7.7,9.7,7.7,15.9c0,11.2-9.1,20.4-20.4,20.4   c-11.2,0-20.4-9.1-20.4-20.4S38.8,29.6,50,29.6c0.9,0,1.8,0.1,2.7,0.2l1.1-8.5c-1.3-0.2-2.6-0.3-3.9-0.3c-16,0-28.9,13-28.9,28.9   C21.1,66,34,78.9,50,78.9z"></path>
                    <path d="M50,82.1c-7.3,0-14.1-2.4-19.8-6.9l-5.3,6.7c7.2,5.7,15.9,8.7,25.1,8.7c15.2,0,29-8.4,36-21.8l-7.5-3.9   C72.9,75.5,62,82.1,50,82.1z"></path>
                    <path d="M46.4,18.1c1.2-0.1,2.4-0.2,3.6-0.2c17.7,0,32.1,14.4,32.1,32.1h8.5C90.6,27.6,72.4,9.4,50,9.4c-1.5,0-3,0.1-4.5,0.2   C24.9,11.9,9.4,29.3,9.4,50c0,4.4,0.7,8.7,2.1,12.8l8.1-2.7c-1.1-3.3-1.6-6.7-1.6-10.2C17.9,33.6,30.2,19.9,46.4,18.1z"></path>
                </g>
                {/* <g
                    id="SvgjsG1172"
                    featurekey="dVtZHI-0"
                    transform="matrix(3.9872408414753724,0,0,3.9872408414753724,60,-16.905900255248575)"
                    fill="#393e46"
                >
                    <path d="M7 20 c2.2134 0 4.1 -0.78 5.66 -2.34 c0.77334 -0.76 1.3567 -1.58 1.75 -2.46 s0.59 -1.88 0.59 -3 c0 -2.2266 -0.78 -4.1066 -2.34 -5.64 c-1.56 -1.52 -3.4866 -2.2866 -5.78 -2.3 c-1.4133 0.01334 -2.74 0.36668 -3.98 1.06 c-1.2133 0.70666 -2.18 1.6867 -2.9 2.94 l0.58 0.32 c0.65334 -1.16 1.54 -2.06 2.66 -2.7 c1.1067 -0.64 2.32 -0.96666 3.64 -0.98 c2.1334 0.01334 3.9066 0.72668 5.32 2.14 c1.4133 1.3867 2.1266 3.1066 2.14 5.16 c0 1.0267 -0.18 1.9433 -0.54 2.75 s-0.88666 1.5633 -1.58 2.27 c-1.4267 1.4267 -3.1666 2.14 -5.22 2.14 c-1.28 0 -2.44 -0.27334 -3.48 -0.82 l-0.3 0.58 c1.1333 0.58666 2.3934 0.88 3.78 0.88 z M23.46 4.5 l-0.000019531 -0.26 l-5.86 0 l0 0.64 l3.38 0 l0 15.12 l0.7 0 l0 -15.12 l1.8 0 c-0.02666 -0.21334 -0.03332 -0.34 -0.01998 -0.38 z M23.98 4.24 l0 0.64 l1.1 0 l0 -0.64 l-1.1 0 z"></path>
                </g> */}
            </svg>
        </Link>
    );
}
