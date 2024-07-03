'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Menu from '@/components/Menu'

export default function Navigation() {

  const pathname = usePathname()

  /**
   * URLs
   * @type {Array<string>} - The URLs to display in the navigation.
   */
  const URLs = [
      ['Dashboard', '/dashboard'],
      ['Posts', '/posts'],
      ['Elements', '/elements'],
      ['Login', '/login'],
      ['Signup', '/signup'],
      ['Forgot Password', '/forgot-password'],
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
    // For Sub-paths of Posts eg: posts/something
    if (pathname.includes('/posts') && slug === '/posts')  {
      return 'active'
    }
    return ''
  }

  return (
    <>
    <div className="navbar bg-base-100">
       <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {URLs.map(([title, url]) => (
              <li>
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
        <button className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
        <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
              </ul>
            </div>
      </div>
    </div>
    <Menu>
    {URLs.map(([title, url]) => (
      <li>
        <Link href={url} className={`${highlightNav(url)}`}>{title}</Link>
      </li>
    ))}
    </Menu>
    </>
  )
}
