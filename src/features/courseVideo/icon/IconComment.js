export const IconChat = ({ width = '24', height = '24', className, fill = "currentColor" }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
        <path
            d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H6L4 18V4H20V16ZM7 9H9V11H7V9ZM11 9H13V11H11V9ZM15 9H17V11H15V9Z"
            fill={fill} />
    </svg>
)

export const IconLike = ({ width = '24', height = '24', className, fill = "currentColor" }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
        <path
            d="M13.11 5.72L12.54 8.61C12.42 9.2 12.58 9.81 12.96 10.27C13.34 10.73 13.9 11 14.5 11H20V12.08L17.43 18H9.34C9.16 18 9 17.84 9 17.66V9.82L13.11 5.72ZM14 2L7.59 8.41C7.21 8.79 7 9.3 7 9.83V17.66C7 18.95 8.05 20 9.34 20H17.44C18.15 20 18.8 19.63 19.16 19.03L21.83 12.88C21.94 12.63 22 12.36 22 12.08V11C22 9.9 21.1 9 20 9H14.5L15.42 4.35C15.47 4.13 15.44 3.89 15.34 3.69C15.11 3.24 14.82 2.83 14.46 2.47L14 2ZM4 9H2V20H4C4.55 20 5 19.55 5 19V10C5 9.45 4.55 9 4 9Z"
            fill={fill} />
    </svg>
)

export const IconThreeDots = ({ width = '24', height = '24', className, fill = "currentColor" }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 5 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="2.5" cy="2.5" r="2.5" fill={fill} />
        <circle cx="2.5" cy="10.5" r="2.5" fill={fill} />
        <circle cx="2.5" cy="18.5" r="2.5" fill={fill} />
    </svg>
)