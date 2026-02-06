import { useBrand } from '../context/BrandContext';

export const useTheme = () => {
    const { theme, setTheme } = useBrand();
    return { theme, setTheme };
};
