interface ButtonProps {
  title: string;
  styles?: React.CSSProperties | undefined
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
}

export default function Button({
  title,
  styles,
  onClick,
  disabled
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`
        text-white 
        bg-blue-700 
        hover:bg-blue-800 
        focus:ring-4 
        focus:ring-blue-300 
        font-medium 
        rounded-lg 
        text-sm 
        px-5 
        py-2.5 
        dark:bg-blue-600 
        dark:hover:bg-blue-700 
        focus:outline-none 
        dark:focus:ring-blue-800
        ${disabled ? 'bg-blue-600 cursor-not-allowed hover:bg-blue-400 dark:bg-blue-500 dark:hover:bg-blue-500' : ''}
      `}
      style={styles}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
}
