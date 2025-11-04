import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('3D Model Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className='w-full h-full flex items-center justify-center'>
          <p className='text-secondary'>Loading alternative view...</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
