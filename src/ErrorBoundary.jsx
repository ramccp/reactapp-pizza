import { Link } from "@tanstack/react-router";
import { Component } from "react";
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error("ErrorBoundarSASASASA an error", error, errorInfo);
}

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <div>
        <h1 className="text-2xl font-bold text-red-600 mb-4">Uh! oH.</h1>
        <p className="text-gray-700">Something went wrong while loading this component.</p>
        <p>Please <Link to="/">click here</Link> to go back</p>
        
      </div>
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;