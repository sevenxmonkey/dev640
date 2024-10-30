import { TabId, useAppLayout } from "../../hooks/useAppLayout";
import Topics from "../Topics";

const AppBody = (): JSX.Element => {
  const { activeTabId } = useAppLayout();
  const tabItems: { tabId: TabId, value: JSX.Element }[] = [{
    tabId: TabId.TOPICS,
    value: <Topics />
  }, {
    tabId: TabId.NETWORK,
    value: <div>Network</div>
  }, {
    tabId: TabId.PROFILE,
    value: <div>Profile</div>
  }]
  const renderContent = tabItems.find(item => item.tabId === activeTabId)

  return renderContent?.value ?? <></>
}

export default AppBody;