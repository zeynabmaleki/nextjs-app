'use client'

export default function Error({ error, reset }) {
    return (
        <div>
            <h2>{error.massage}</h2>
            <button onClick={() => reset()}>
                تلاش دوباره
            </button>
        </div>
    )
}
