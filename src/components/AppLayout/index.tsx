import AppBody from '../AppBody';
import AppFooter from '../AppFooter';
import AppHeader from '../AppHeader';
import './app-layout.scss'

const AppLayout = (): JSX.Element => {
  return (
    <div className="app-layout">
      <div className="header-wrapper">
        <div className='header'>
          <AppHeader />
        </div>
      </div>
      <div className="body-wrapper">
        <div className='body'>
          <AppBody />
        </div>
      </div>
      <div className="footer-wrapper">
        <div className='footer'>
          <AppFooter />
        </div>
      </div>
    </div>
  )
}

export default AppLayout;