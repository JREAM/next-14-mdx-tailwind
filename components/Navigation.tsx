'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav() {

  const pathname = usePathname()

  /**
   * URLs
   * @type {Array<string>} - The URLs to display in the navigation.
   */
  const URLs = [
      ['Home', '/'],
      ['Posts', '/posts'],
      ['Elements', '/elements'],
      ['Login', '/login'],
      ['Signup', '/signup'],
      ['Forgot Password', '/forgot-password'],
    ]


  /**
   * User URLs
   * @type {{Array<string>}} to display in the navigation.
   */
    const UserURLs = [
      ['Dashboard', '/dashboard'],
      ['Profile', '/dashboard/profile'],
      ['Settings', '/dashboard/settings'],
      ['Logout', '/logout'],
    ]

  /**
   * Determines if the given slug is active based on the current pathname.
   *
   * @param {string} slug - The slug to check.
   * @return {string} Returns 'active' if the slug is active, otherwise an empty string.
   */
  const highlightNav = (slug: string) => {
    if (slug === pathname) {
      return 'active'
    }
    // @TODO
    // For Sub-paths of Posts eg: posts/something
    if (pathname.includes('/posts') && slug === '/posts')  {
      return 'active'
    }
    return ''
  }

  return (
    <>
    <div className="navbar">
       <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </div>
          {/* Main DropDown Menu */}
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {URLs.map(([title, url]) => (
              <li key={title}>
                <Link href={url} className={`${highlightNav(url)}`}>{title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link href="/" className={``}>JREAM</Link>
      </div>
      <div className="navbar-end">
        <div className="form-control">
          <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img alt="Sample User"src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          {/* User DropDown Menu */}
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {UserURLs.map(([title, url]) => (
              <li key={title}>
                <Link href={url}>{title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    {/* Expanded Menu */}
    <div className="container text-center">
      <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
        {URLs.map(([title, url]) => (
          <li key={title}>
            <Link href={url} className={`${highlightNav(url)}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
    </>
  )
}

