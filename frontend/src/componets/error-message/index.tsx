
const ErrorMessage = ({ error = "" }: { error: string }) => {
  return error && <p className="text-red-500 mt-2 mb-5">{error}</p>
}

export default ErrorMessage
