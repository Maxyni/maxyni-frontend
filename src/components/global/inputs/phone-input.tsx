import React from "react";

type PhoneInputProps = {
    phone: string;
    onChange: (phone: string) => void;
    onBlur?: () => void;
    isInError?: boolean;
    required?: boolean;
};

const PhoneInput: React.FC<PhoneInputProps> = ({ phone, onChange, onBlur, isInError }) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value.replace(/\D/g, ""); // Remove tudo que não é número
        if (value.length > 11) value = value.slice(0, 11); // Limita a 11 dígitos

        // Formata o valor com a máscara (11) 11111-1111
        if (value.length > 6) {
            value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
        } else if (value.length > 2) {
            value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
        } else if (value.length > 0) {
            value = `(${value}`;
        }

        onChange(value);
    };

    return (
        <div className="relative flex flex-col">
            <label htmlFor="number">
                Número de telefone {isInError && <span className="text-red-500">*</span>}
            </label>
            <div className={`bg-white flex items-center ${isInError ? "border border-red-400" : "border"}  rounded-md overflow-hidden group transition duration-300 ease-in-out focus-within:border-[#9800b6]`}>
                <span className="pl-3 text-sm font-medium">+55</span>
                <input
                    type="text"
                    name="number"
                    value={phone}
                    onChange={handleInputChange}
                    onBlur={onBlur}
                    placeholder="(00) 00000-0000"
                    className="flex-1 px-3 py-2 outline-none"
                    required
                />
            </div>
            {isInError && <p className='text-red-500 text-xs'>Campo obrigatório</p>}
        </div>
    );
};

export default PhoneInput;
