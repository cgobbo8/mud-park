export type ScrollContextType = {
	courseSectionRef: React.RefObject<HTMLDivElement> | null;
	tarifSectionRef: React.RefObject<HTMLDivElement> | null;
	faqSectionRef: React.RefObject<HTMLDivElement> | null;
	contactSectionRef: React.RefObject<HTMLDivElement> | null;
	courseOnScreen: boolean;
	tarifOnScreen: boolean;
	faqOnScreen: boolean;
	contactOnScreen: boolean;
	setCourseSectionRef: React.Dispatch<
		React.SetStateAction<React.RefObject<HTMLDivElement> | null>
	>;
	setTarifSectionRef: React.Dispatch<
		React.SetStateAction<React.RefObject<HTMLDivElement> | null>
	>;
	setFaqSectionRef: React.Dispatch<
		React.SetStateAction<React.RefObject<HTMLDivElement> | null>
	>;
	setContactSectionRef: React.Dispatch<
		React.SetStateAction<React.RefObject<HTMLDivElement> | null>
	>;
	setCourseOnScreen: React.Dispatch<React.SetStateAction<boolean>>;
	setTarifOnScreen: React.Dispatch<React.SetStateAction<boolean>>;
	setFaqOnScreen: React.Dispatch<React.SetStateAction<boolean>>;
	setContactOnScreen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ScrollContext = createContext<ScrollContextType | null>(null);

export default ScrollContext;

// Create a context provider
import { createContext, PropsWithChildren, useState } from "react";

export const ScrollContextProvider = ({ children }: PropsWithChildren) => {
	const [courseSectionRef, setCourseSectionRef] = useState(null) as [
		React.RefObject<HTMLDivElement> | null,
		React.Dispatch<React.SetStateAction<React.RefObject<HTMLDivElement> | null>>
	];
	const [tarifSectionRef, setTarifSectionRef] = useState(null) as [
		React.RefObject<HTMLDivElement> | null,
		React.Dispatch<React.SetStateAction<React.RefObject<HTMLDivElement> | null>>
	];
	const [faqSectionRef, setFaqSectionRef] = useState(null) as [
		React.RefObject<HTMLDivElement> | null,
		React.Dispatch<React.SetStateAction<React.RefObject<HTMLDivElement> | null>>
	];
	const [contactSectionRef, setContactSectionRef] = useState(null) as [
		React.RefObject<HTMLDivElement> | null,
		React.Dispatch<React.SetStateAction<React.RefObject<HTMLDivElement> | null>>
	];
	const [courseOnScreen, setCourseOnScreen] = useState(false);
	const [tarifOnScreen, setTarifOnScreen] = useState(false);
	const [faqOnScreen, setFaqOnScreen] = useState(false);
	const [contactOnScreen, setContactOnScreen] = useState(false);

	return (
		<ScrollContext.Provider
			value={{
				courseSectionRef,
				tarifSectionRef,
				faqSectionRef,
				contactSectionRef,
				courseOnScreen,
				tarifOnScreen,
				faqOnScreen,
				contactOnScreen,
				setCourseSectionRef,
				setTarifSectionRef,
				setFaqSectionRef,
				setContactSectionRef,
				setCourseOnScreen,
				setTarifOnScreen,
				setFaqOnScreen,
				setContactOnScreen,
			}}
		>
			{children}
		</ScrollContext.Provider>
	);
};
