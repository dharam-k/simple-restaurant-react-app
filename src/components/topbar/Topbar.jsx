import './topbar.css'


import '../../../node_modules/material-icons/iconfont/material-icons.css'


export default function Topbar() {
  return (
    <div className='topbar'>
      <div className="wrapper">
        <div className="left">
          <a href='#intro' className='logo'>.dharamK</a>
          <div className="itemContainer">
            <span className="material-icons">person</span>
            <span>+91 7011571659</span>
          </div>
          <div className="itemContainer">
            <span className="material-icons">mail</span>
            <span>iamdharam21@gmail.com</span>
          </div>
        </div>
        <div className="right">
          
        </div>
        
      </div>
    </div>
  )
}
