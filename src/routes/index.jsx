import { createFileRoute } from '@tanstack/react-router'
import Navigation from '../Navigation'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <h1 className="text-4xl font-bold">Welcome to CAT Pizzeria</h1>
  )
}
