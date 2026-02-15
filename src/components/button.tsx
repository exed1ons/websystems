interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'outline' | 'danger';
    className?: string;
    type?: 'button' | 'submit';
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
                                           children, onClick, variant = 'primary', className = '', type = 'button', disabled = false
                                       }) => {
    const variants = {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "bg-gray-100 text-gray-800 hover:bg-gray-200",
        outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50",
        danger: "bg-red-500 text-white hover:bg-red-600"
    };

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`px-6 py-2 rounded font-semibold transition-all flex items-center justify-center disabled:opacity-50 text-sm ${variants[variant]} ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;