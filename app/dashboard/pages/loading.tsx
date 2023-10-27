import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import PageActions from "../_components/PageActions"

const LoadingPages = () => {
  const pages = [1, 2, 3, 4, 5]
  return (
    <div className="space-y-2">
      <PageActions />
      <div className="overflow-x-auto w-full">
        <table className="table border-gray-200 border">
          <thead>
            <tr className="m-2">
              <th>Page Title</th>
              <th>Page Slug</th>
              <th>Published</th>
            </tr>
          </thead>
          <tbody>
            {pages.map((page) => (
              <tr key={page}>
                <td>
                  <Skeleton />
                </td>
                <td>
                  <Skeleton />
                </td>
                <td>
                  <Skeleton />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default LoadingPages
