import { cn } from '@/lib/utils';
import { forwardRef, type HTMLAttributes, type ReactNode, JSX } from 'react';
import { LuCheckCircle, LuAlertCircle, LuInfo, LuXCircle } from 'react-icons/lu';

interface BlockquoteProps extends HTMLAttributes<HTMLDivElement> {
    title?: string;
    coloredTitle?: boolean;
    children: ReactNode;
    className?: string;
    icon?: JSX.Element;
    variant: 'info' | 'success' | 'warn' | 'danger';
}

// Definir ícones para cada variante
const icons = {
    info: <LuInfo className="h-5 w-5" />,
    success: <LuCheckCircle className="h-5 w-5" />,
    warn: <LuAlertCircle className="h-5 w-5" />,
    danger: <LuXCircle className="h-5 w-5" />,
};

export const Blockquote = forwardRef<HTMLDivElement, BlockquoteProps>((props, ref) => {
    const { title, className, children, coloredTitle = false, icon, variant, ...other } = props;

    return (
        <div
            ref={ref}
            data-variant={variant}
            className={cn(
                `
					flex-row p-px rounded-lg my-6 text-sm border min-w-0 flex gap-2 bg-fd-secondary group 
					data-[variant=info]:border-blue-500
					data-[variant=warn]:border-yellow-500
					data-[variant=danger]:border-red-500
					data-[variant=success]:border-green-500
				 `,
                className,
            )}
            {...other}
        >
            <div className="w-full h-full bg-fd-card p-3 rounded-md grid grid-cols-[min-content_1fr] gap-3 items-start">
                {/* Renderizar o ícone baseado na variante */}
                <span
                    className={cn(`
					flex items-center

						group-data-[variant=info]:text-blue-500
						group-data-[variant=warn]:text-yellow-500
						group-data-[variant=danger]:text-red-500
						group-data-[variant=success]:text-green-500
				`)}
                >
                    {icon || icons[variant || 'info']}
                </span>

                <div className="flex flex-col gap-2 items-start justify-start ">
                    {title ? (
                        coloredTitle ? (
                            <p
                                className="
									not-prose align-baseline font-medium
		
									group-data-[variant=info]:text-blue-500
									group-data-[variant=warn]:text-yellow-500
									group-data-[variant=danger]:text-red-500
									group-data-[variant=success]:text-green-500
								"
                            >
                                {title}
                            </p>
                        ) : (
                            <p className="not-prose align-baseline font-medium">{title}</p>
                        )
                    ) : null}
                    <div className="text-muted-foreground prose-no-margin">{children}</div>
                </div>
            </div>
        </div>
    );
});

Blockquote.displayName = 'Blockquote';
