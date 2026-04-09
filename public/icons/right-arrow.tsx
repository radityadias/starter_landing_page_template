export const RightArrowIcon = () => {
    return (
        <svg
            fill="#FAFAFA"
            width="16px"
            height="16px"
            viewBox="0 0 24 24"
            id="right-arrow"
            xmlns="http://www.w3.org/2000/svg"
            className="icon flat-line"
            stroke="#FAFAFA"
        >
            <line
                id="primary"
                x1="3" y1="12" x2="21" y2="12"
                style={{
                    fill: 'none',
                    stroke: '#fafafa',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: 2
                }}
            />
            <polyline
                id="primary-2"
                points="18 15 21 12 18 9"
                style={{
                    fill: 'none',
                    stroke: '#fafafa',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                    strokeWidth: 2
                }}
            />
        </svg>
    )
}