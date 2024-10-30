import { createContext, useContext, useState } from "react"

export enum TabId {
  TOPICS = 'Topics',
  NETWORK = 'Network',
  PROFILE = 'Profile',
  ABOUT = 'About'
}

interface AppLayoutProps {
  activeTabId: TabId;
  setActiveTabId: (id: TabId) => void;
}

export const AppLayoutContext = createContext<AppLayoutProps>({
  activeTabId: TabId.TOPICS,
  setActiveTabId: () => { }
})

export const AppLayoutContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeTabId, setActiveTabId] = useState<TabId>(TabId.TOPICS)

  return (
    <AppLayoutContext.Provider
      value={{ activeTabId, setActiveTabId }}
    >{children}
    </AppLayoutContext.Provider>
  )
}

export const useAppLayout = () => {
  return useContext(AppLayoutContext);
}