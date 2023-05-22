import Navbar from "../Navbar/Navbar"
import "./PageContainer.scss"


export default function PageContainer({ children }) {
  return (
    <div className="page-container">
      <Navbar />
      {children}
    </div>
  )
}
