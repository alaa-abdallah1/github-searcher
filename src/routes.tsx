import GithubList from "@/pages/GithubList"
import NotFound from "@/pages/NotFound"

const routes = [
  {
    path: "/",
    element: <GithubList />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]

export default routes
