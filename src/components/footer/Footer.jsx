
import { useLocation } from 'react-router-dom'

export default function Footer() {
  const location = useLocation()
  const { pathname } = location
  return <>
    <div className={pathname.startsWith('/admin/') || pathname.startsWith('/admin') ? 'hidden' : ''}>footer</div>
  </>

}

