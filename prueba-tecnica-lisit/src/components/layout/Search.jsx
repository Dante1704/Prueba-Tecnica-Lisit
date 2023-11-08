import React from 'react'

export const Search = () => {
    return (
        <form className="form-control flex-row">
            <input type="text" name='search' placeholder="Search" className="input input-bordered w-24 md:w-auto" />
            <button className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
        </form>
    )
}
