import { cn } from '../../common/utils';

interface ButtonProps {
    className?: string;
    conditionalClassName?: Record<string, boolean>;
    disabled?: boolean;
    onClick?: () => void;
    children?: React.ReactNode | string | number;
}

const Button = ({
    className,
    conditionalClassName,
    disabled,
    onClick,
    children
}: ButtonProps) => {
    return (
        <button
            className={cn([
                'px-3 py-2 text-white dark:bg-[#1a1a1a] dark:hover:bg-[#038686]',
                className,
                conditionalClassName
            ])}
            disabled={disabled}
            onClick={onClick}
        >
            {children && children}
        </button>
    );
};

export default Button;
