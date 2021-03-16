import React from 'react'

const Wrapper = ({ children, ...otherProps }) => (
  <div
    className='prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto'
    {...otherProps}
  >
    {children}
  </div>
)

export default Wrapper
