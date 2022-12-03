import { PropsWithChildren } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { ModalContextProvider } from "./ModalContext";
import { ScrollContextProvider } from "./ScrollContext";

export const Providers = ({ children }: PropsWithChildren) => {
	return (
		<ParallaxProvider>
			<ModalContextProvider>
				<ScrollContextProvider>{children}</ScrollContextProvider>
			</ModalContextProvider>
		</ParallaxProvider>
	);
};
