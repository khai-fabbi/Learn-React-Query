import clsx from 'clsx'
import * as React from 'react'
import { useAuth, UserAuthType } from '../../contexts/auth-context'

interface Todo {
  id: string
  name: string
  price: number
  isDrawColor?: boolean
}
export interface ProductListProps {
  todoList: Todo[]
  total: number
  onDeleteProduct?: (id: string) => void
  onChangeColor?: (id: string) => void
}
function convertToVND(num: number): string {
  const rs = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(num)

  return rs
}

function ProductList({
  todoList,
  total,
  onDeleteProduct,
  onChangeColor,
}: ProductListProps) {
  const valueContext = useAuth()
  const handleClickChangeUser = () => {
    const newUser: UserAuthType = {
      username: 'Quang Khai',
      email: 'vukhaiabc@gmail.com',
    }
    valueContext?.updateUser(newUser)
  }
  console.log(valueContext?.user)
  return (
    <>
      <div className="flex gap-2 mb-4">
        <h3 className="italic">Total Product : </h3>
        <span>{total}</span>
      </div>
      <ul>
        {todoList.length > 0 &&
          todoList.map((item: Todo) => (
            <div className="flex gap-4 items-center mb-3" key={item.id}>
              <li
                className={clsx('w-1/3 cursor-pointer hover:opacity-90', {
                  ['text-red-500']: item.isDrawColor, //lay tu bien phai dung dau []
                })}
                onClick={() => onChangeColor?.(item.id)}
              >{`${item.name} - ${convertToVND(item.price)}`}</li>
              <button
                className="border border-gray-400 px-3 rounded text-2xl hover:bg-slate-300 transition-all"
                onClick={() => onDeleteProduct?.(item.id)}
              >
                -
              </button>
            </div>
          ))}
      </ul>
      <button
        className="btn btn-primary btn-md text-base-100"
        onClick={handleClickChangeUser}
      >
        Chage User
      </button>
    </>
  )
}
export default React.memo(ProductList)
