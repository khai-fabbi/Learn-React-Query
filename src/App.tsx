import { Route, Routes } from 'react-router-dom'
import { AuthProvider } from './contexts/auth-context'
import TodoIndex from './pages/todo/TodoIndex'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import PostList from './pages/post/PostIndex'
import LayoutMain from './component/layout/LayoutMain'
const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Routes>
          <Route
            path="/home"
            element={
              <LayoutMain>
                <TodoIndex />
              </LayoutMain>
            }
          />
          <Route
            path="/post"
            element={
              <LayoutMain>
                <PostList />
              </LayoutMain>
            }
          />
        </Routes>
      </AuthProvider>
      <ReactQueryDevtools initialIsOpen={false} position="top-right" />
    </QueryClientProvider>
  )
}

export default App
