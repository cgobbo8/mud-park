export type ModalContextType = {
	isModalOpen: boolean;
	setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ModalContext = createContext<ModalContextType>({
	isModalOpen: false,
	setIsModalOpen: () => {},
});

export default ModalContext;

// Create a context provider
import { createContext, PropsWithChildren, useState } from "react";

export const ModalContextProvider = ({ children }: PropsWithChildren) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<ModalContext.Provider
			value={{
				isModalOpen,
				setIsModalOpen,
			}}
		>
			{children}
		</ModalContext.Provider>
	);
};
