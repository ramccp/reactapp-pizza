import { Component } from "react";
import { Link } from "@tanstack/react-router";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        console.error("ErrorBoundary caught an error", error, info);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="error-boundary flex flex-col items-center justify-center h-screen space-y-4 bg-white p-4 rounded-lg shadow-lg border border-gray-200">
                    <h2 className="text-2xl font-bold text-red-500 text-center">Uh oh!</h2>
                    <p className="text-gray-500 text-center">
                        There was an error with this listing. <Link to="/">Click here</Link>{" "}
                        to back to the home page.
                    </p>
                </div>
            );
        }
        return this.props.children;
    }
}
export default ErrorBoundary;