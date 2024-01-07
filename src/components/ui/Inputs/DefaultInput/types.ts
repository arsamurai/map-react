export interface DefaultInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
	type?: string;
  error?: boolean;
  className?: string;
  forceFocus?: boolean;
}