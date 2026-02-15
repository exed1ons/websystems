import { AlertCircle } from 'lucide-react';

interface InputFieldProps {
    label: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
    type?: string;
    placeholder?: string;
    name?: string;
}

const InputField: React.FC<InputFieldProps> = ({
                                                   label, value, onChange, error, type = "text", placeholder, name
                                               }) => (
    <div className="mb-4 w-full text-left">
        <label className="block text-sm font-medium text-gray-600 mb-2">
            {label}
        </label>
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`w-full px-4 py-2 border rounded transition-all outline-none text-sm
        ${error ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-blue-500 bg-white'}`}
        />
        {error && (
            <p className="text-red-600 text-xs font-medium mt-1 flex items-center">
                <AlertCircle size={12} className="mr-1" /> {error}
            </p>
        )}
    </div>
);

export default InputField;