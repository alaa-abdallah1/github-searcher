import "./styles/App.css"
import routes from "./routes"
import {Routes, Route, useLocation} from "react-router-dom"
import {Header, GithubSearch} from "@/components"

const App = () => {
  const location = useLocation()
  const isGithubListPage = location.pathname === "/"

  return (
    <div id="app" className="App">
      <nav className="navbar">
        <Header />
        {isGithubListPage && <GithubSearch />}
      </nav>
      <main className="main">
        <Routes>
          {routes.map(route => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </main>
    </div>
  )
}

export default App
