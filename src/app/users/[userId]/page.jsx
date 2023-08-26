"use client"

function UserPage({params}) {
    console.log(params)
  return (
    <div>
        <button onClick={() => {
            console.log('works!!!')
        }}>
            click
        </button>
    </div>
  )
}

export default UserPage