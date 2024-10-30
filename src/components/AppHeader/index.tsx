import { TabId, useAppLayout } from '../../hooks/useAppLayout';
import './app-header.scss'

const AppHeader = (): JSX.Element => {
  const { activeTabId, setActiveTabId } = useAppLayout();

  const buttonItems = Object.values(TabId).map((id: TabId) => (
    <button key={id} onClick={() => setActiveTabId(id)} className={activeTabId === id ? 'active' : ''}>{id}</button>
  ))

  return (
    <div className="app-header-wrapper">
      <div className='title'>
        <h2 className='main-title'>Morale River </h2>
        <p className='sub-title'>
          Social networking app to build
          <span style={{ color: 'lightgreen' }}> community </span>
          and
          <span style={{ color: 'orange' }}> morale </span></p>
      </div>
      <div className='menu'>
        {buttonItems}
      </div>
    </div>
  )
}

export default AppHeader;