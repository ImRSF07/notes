import React from 'react';

class ErrorBoundary extends React.Component {
  state = { hasError: false, errorMessage: '' };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  componentDidMount() {
    // Add an event listener for unhandled promise rejections
    window.addEventListener(
      'unhandledrejection',
      this.handleUnhandledRejection
    );
  }

  componentWillUnmount() {
    // Remove the event listener when the component is unmounted
    window.removeEventListener(
      'unhandledrejection',
      this.handleUnhandledRejection
    );
  }

  handleUnhandledRejection = (event) => {
    // Handle the unhandled promise rejection here
    console.error('Unhandled Promise Rejection:', event.reason);

    // You can update the component state or perform other actions as needed
    this.setState({ hasError: true, errorMessage: event.reason.toString() });
  };

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
