import { IconType } from "./types";

function PencilSquare({ color }: IconType) {
    return (
        <svg color={color} className="w-6 h-6 cursor-pointer" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.0001 4H4.00014C3.4697 4 2.961 4.21071 2.58592 4.58579C2.21085 4.96086 2.00014 5.46957 2.00014 6V20C2.00014 20.5304 2.21085 21.0391 2.58592 21.4142C2.961 21.7893 3.4697 22 4.00014 22H18.0001C18.5306 22 19.0393 21.7893 19.4144 21.4142C19.7894 21.0391 20.0001 20.5304 20.0001 20V13" stroke="#8667F2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M18.5001 2.49998C18.898 2.10216 19.4375 1.87866 20.0001 1.87866C20.5627 1.87866 21.1023 2.10216 21.5001 2.49998C21.898 2.89781 22.1215 3.43737 22.1215 3.99998C22.1215 4.56259 21.898 5.10216 21.5001 5.49998L12.0001 15L8.00014 16L9.00014 12L18.5001 2.49998Z" stroke="#8667F2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export default PencilSquare;