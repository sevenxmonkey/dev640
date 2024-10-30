import { TabId, useAppLayout } from "../../hooks/useAppLayout";
import Network from "../Network";
import Profile from "../Profile";
import Topics from "../Topics";

const AppBody = (): JSX.Element => {
  const { activeTabId } = useAppLayout();
  const tabItems: { tabId: TabId, value: JSX.Element }[] = [{
    tabId: TabId.TOPICS,
    value: <Topics />
  }, {
    tabId: TabId.NETWORK,
    value: <Network />
  }, {
    tabId: TabId.PROFILE,
    value: <Profile />
  }]
  const renderContent = tabItems.find(item => item.tabId === activeTabId)

  return renderContent?.value ?? <></>
}

export default AppBody;