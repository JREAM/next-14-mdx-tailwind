
export default function Menu({children}) {
  return (
    <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
      {children}
      {/* <li><a>Item</a></li> */}
    </ul>
  )
}
