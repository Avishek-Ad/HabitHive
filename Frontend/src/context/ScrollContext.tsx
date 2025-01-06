import { createContext, useRef } from "react";

type scrollStateType = {
    aboutRef: React.RefObject<HTMLDivElement>;
    contactRef: React.RefObject<HTMLDivElement>;
    featuresRef: React.RefObject<HTMLDivElement>;
    scrollToContact: () => void;
    scrollToAbout: () => void;
    scrollToFeatures: () => void;
}

export const scrollState = createContext<scrollStateType>({
    aboutRef: {current: null},
    contactRef: {current: null},
    featuresRef: {current: null},
    scrollToContact: () => {},
    scrollToAbout: () => {},
    scrollToFeatures: () => {}
});

function ScrollProvider({ children }: any) {

    const aboutRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);
    const featuresRef = useRef<HTMLDivElement>(null);

    const scrollToContact = () => {
        contactRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    const scrollToAbout = () => {
        aboutRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    const scrollToFeatures = () => {
        featuresRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }

  return <scrollState.Provider value={{aboutRef, contactRef, featuresRef, scrollToContact, scrollToAbout, scrollToFeatures}}>{children}</scrollState.Provider>;
}

export default ScrollProvider;