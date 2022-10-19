import { useCallback, useLayoutEffect, useMemo, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Button from '../../component/button/Button'
import DatePickerTest from '../../component/page/DatePicker'
import ProductList from '../../component/page/ProductList'

interface Todo {
  id: string
  name: string
  price: number
  isDrawColor?: boolean
}
function TodoIndex() {
  const [count, setCount] = useState(0)
  const [todoList, setTodoList] = useState<Todo[]>([])
  const [formValue, setFormValue] = useState({
    name: '',
    price: 0,
  })
  useLayoutEffect(() => {
    if (count > 4) {
      setCount(0)
    }
  }, [count])
  const handleClickAddProduct = () => {
    const formSubmit: Todo = {
      id: uuidv4(),
      ...formValue,
      isDrawColor: false,
    }
    const newTodoList = [...todoList]
    newTodoList.push(formSubmit)
    setTodoList(newTodoList)
  }
  const totalProduct = useMemo(() => {
    return todoList.length
  }, [todoList])
  const handleDeleteProduct = useCallback(
    (productId: string) => {
      const todoIdx = todoList.findIndex((item: Todo) => item.id === productId)
      const newTodoList = [...todoList]
      newTodoList.splice(todoIdx, 1)
      setTodoList(newTodoList)
    },
    [todoList]
  )
  const handleChageColor = useCallback(
    (productId: string) => {
      const todoIdx = todoList.findIndex((item: Todo) => item.id === productId)
      const newTodoList = [...todoList]
      newTodoList[todoIdx].isDrawColor = !newTodoList[todoIdx].isDrawColor
      setTodoList(newTodoList)
    },
    [todoList]
  )
  return (
    <div className="App">
      <h1 className="text-red-700 text-4xl font-bold"> Smart Phone</h1>
      <div className="form-add-product mt-10">
        <Button className="text-xl mb-3">Create Product</Button>
        <div className="grid gap-4 grid-cols-2 max-w-7xl">
          <div className="flex flex-col gap-4">
            <div className="flex gap-2 items-center">
              <label
                htmlFor="name-product-id"
                className="pr-2 font-semibold cursor-pointer hover:text-gray-700 transition-all w-2/5"
              >
                Enter name Product :
              </label>
              <input
                type="text"
                id="name-product-id"
                placeholder="Enter your name ..."
                className="outline-none shadow-lg text-gray-700 py-3 px-6 text placeholder:italic placeholder:text-slate-400 w-full"
                value={formValue.name}
                onChange={(e) =>
                  setFormValue({
                    ...formValue,
                    name: e.target.value,
                  })
                }
              />
            </div>
            <div className="flex gap-2 items-center">
              <label
                htmlFor="name-product-id"
                className="pr-2 font-semibold cursor-pointer hover:text-gray-700 transition-all  w-2/5"
              >
                Enter name Price :
              </label>
              <input
                type="number"
                id="name-product-id"
                placeholder="Enter your price ..."
                className="outline-none shadow-lg text-gray-700 py-3 px-6 text placeholder:italic placeholder:text-slate-400 w-full"
                value={formValue.price}
                onChange={(e) =>
                  setFormValue({
                    ...formValue,
                    price: Number(e.target.value),
                  })
                }
              />
            </div>
          </div>
          <div className="p-2">
            <Button
              className="h-full"
              bg="danger"
              onClick={handleClickAddProduct}
            >
              Add
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <h2 className="text-black font-semibold text-2xl">List Product</h2>
        <ProductList
          todoList={todoList}
          total={totalProduct}
          onDeleteProduct={handleDeleteProduct}
          onChangeColor={handleChageColor}
        />
      </div>
      <div className="my-10 flex gap-3 items-center">
        <p> Count : {count}</p>
        <button
          className="border border-gray-400 px-3 rounded text-2xl hover:bg-slate-300 transition-all"
          onClick={(e) => setCount((prev) => prev + 1)}
        >
          +
        </button>
      </div>
      <DatePickerTest />
    </div>
  )
}

export default TodoIndex
