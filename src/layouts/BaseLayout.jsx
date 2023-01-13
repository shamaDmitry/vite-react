import Navigation from "../components/Navigation/Navigation";

const BaseLayout = ({ children }) => {
  return (
    <div>
      <Navigation />

      {children}
    </div>
  )
}

export default BaseLayout;