export const Select = ({ children, ...props }) => <select {...props}>{children}</select>;
export const SelectItem = ({ value, children }) => <option value={value}>{children}</option>;