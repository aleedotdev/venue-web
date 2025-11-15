import { cva, VariantProps } from "class-variance-authority";

const buttonStyles = cva(
    "h-full flex justify-center cursor-pointer items-center  transition-all duration-500 rounded-xl focus:outline-none",
   {
    variants: {
    theme:{
        solid: 'bg-white text-orange',
    },
 
    size:{
        xl: 'text-xl',
        lg: 'text-lg',
        md: 'text-md',
        sm: 'text-sm',
        xs: 'text-xs'
    },
    weight:{
       normal: ["font-normal"],
        medium: ["font-medium"],
        semibold: ["font-semibold"],
        bold: ["font-bold"],
        extrabold: ["font-extrabold"],
    },
    },
    defaultVariants:{
     theme: 'solid',
     size: 'md',
     weight: 'medium',
   
    }
   }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonStyles> {
  loading?: boolean;
}

export const Button: React.FC<ButtonProps>=({
  theme, 
  size,
  weight,
  className,
  loading=false,
  children,
  ...props

}) =>{
    return( 
        <button className={`${buttonStyles({ theme, size, weight})} ${className}`}{...props} 
          disabled={loading || props.disabled}>
          {loading ? (
        <span className="w-5 h-5 border-2 rounded-full loader animate-spin border-t-transparent"></span>
      ) : (
        children
      )}
        </button>
    )
}

