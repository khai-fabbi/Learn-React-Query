import clsx from 'clsx'
import {
  useState,
  useRef,
  createElement,
  forwardRef,
  useEffect,
  useMemo,
} from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function InputDateCustom(props: React.HTMLProps<HTMLInputElement>, _ref: any) {
  const inputRef = useRef<HTMLInputElement>(null)
  function handleClick() {
    if (inputRef && inputRef.current && inputRef.current.click) {
      inputRef.current.click()
    }
  }
  return (
    <div className="flex" onClick={handleClick}>
      <input
        ref={inputRef}
        {...props}
        className={clsx(
          props.className,
          'input input-primary input-bordered shadow max-w-xl'
        )}
      />
    </div>
  )
}

export default function DatePickerTest() {
  const [date, setDate] = useState(new Date())
  const calDateLive = (date: Date) => {
    const t = Number(new Date()) - Number(date)
    const millisecondsPerDay = 1000 * 60 * 60 * 24
    return Math.trunc(t / millisecondsPerDay)
  }
  const dayLive = useMemo(() => calDateLive(date || new Date()), [date])
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor="dateId"
        className="label-text font-semibold cursor-pointer"
      >
        Enter your date:{' '}
      </label>
      <div className="max-w-xs">
        <DatePicker
          closeOnScroll={(e) => e.target === document}
          selected={date}
          id="dateId"
          isClearable
          className="w-full"
          dateFormat="dd/MM/yyyy"
          placeholderText="DD/MM/YYYY"
          onChange={(date) => setDate(date || new Date())}
          customInput={createElement(forwardRef(InputDateCustom))}
          maxDate={new Date()}
          strictParsing
          showTimeInput
        />
      </div>
      <div className="alert alert-success shadow-lg max-w-xs">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current flex-shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Ban da song : {dayLive}</span>
        </div>
      </div>
    </div>
  )
}
