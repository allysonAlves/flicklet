export const cpfMask = (getState: any) => (callback: any) => {
    getState((value: string) => {
        const cleanValue = value.replace(/\D/g, '');
        
        const cpf = cleanValue.slice(0, 11);
        
        let result = cpf;
        
        if (cpf.length > 3) {
            result = cpf.replace(/(\d{3})(\d{1,3})(\d{0,3})(\d{0,2})/, (_, g1, g2, g3, g4) => {
                let masked = `${g1}.${g2}`;
                if (g3) masked += `.${g3}`;
                if (g4) masked += `-${g4}`;
                return masked;
            });
        }

        callback(result);
    });
}