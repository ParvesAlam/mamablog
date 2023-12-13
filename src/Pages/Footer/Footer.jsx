import React from 'react'

function Footer() {
  return (
    <footer
      className="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">

      {/* <!--Copyright section--> */}
      <div className="bg-neutral-200 p-6 text-center dark:bg-neutral-700">
        <span>© 2023 Copyright:</span>
        <p
          className="font-semibold text-neutral-600 dark:text-neutral-400"
          
        >Parves Alam</p>
      </div>
    </footer>
  )
}

export default Footer