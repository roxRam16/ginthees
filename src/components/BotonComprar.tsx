import { type ButtonHTMLAttributes } from "react";

type BotonComprarVariant = "dorado" | "azul";

interface BotonComprarProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> {
  variant?: BotonComprarVariant;
  label?: string;
}

const baseClasses = [
  "inline-flex items-center justify-center",
  "h-[44px] w-[200px] rounded-[8px]",
  "font-alegreya text-[18px] uppercase tracking-[0.03em] leading-none",
  "transition-[background-position,transform] duration-300 ease-out",
  "hover:scale-[1.03] active:scale-[0.98]",
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-texto-botones",
].join(" ");

const variantClasses: Record<BotonComprarVariant, string> = {
  dorado:
    "bg-[url('/btn-dorado.svg')] bg-center bg-cover text-texto-botones hover:brightness-110",
  azul:
    "bg-degradado-azul bg-[length:200%_100%] bg-left hover:bg-right text-dorado-gradiente",
};

export function BotonComprar({
  variant = "dorado",
  label = "Comprar GINTHEÉS",
  onClick,
  ...rest
}: BotonComprarProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]}`}
      aria-label={label}
      {...rest}
    >
      {label}
    </button>
  );
}
