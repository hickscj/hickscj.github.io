export const Background = () => {
    return (
    <div className="absolute top-0 left-0 w-full h-100 z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
            <pattern id="diagonalLines" patternUnits="userSpaceOnUse" width="10" height="20" patternTransform="rotate(45)">
                <line x1="0" y1="0" x2="0" y2="20" stroke="#444" stroke-width="3"/>
            </pattern>
            </defs>
            <rect width="100%" height="100%" fill="#333"/>
            <rect width="100%" height="100%" fill="url(#diagonalLines)"/>
        </svg>
    </div>
    );
}