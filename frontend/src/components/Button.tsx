import React from 'react'

const Button = ({ text, disabled = false }: { text: string; disabled?: boolean }) => {
  return (
    <button
      className="mt-6 max-w-fit rounded-lg bg-green-600 px-2 py-2 text-left text-white"
      type="submit"
      disabled={disabled}>
      {text}
    </button>
  )
}

export default Button
