import React from 'react';

function Nav(props) {
    const {
        setAboutSelected,
        setContactSelected,
        setPortfolioSelected,
        setLinksSelected
    } = props;

    return (
        <header className = "flex-row px-1 header-background">
            <h2 href="about" onClick={()=> setAboutSelected(true)}>
                Jani Muhlestein
            </h2>
            <nav>
                <ul className = "flex-row">
                    <li className = "mx-2">
                        <a href = "#contact" className = "nav">Contact</a>
                    </li>
                    <li className = "mx-2">
                        <a href = "#portfolio" className = "nav">Portfolio</a>
                    </li>
                    <li className = "mx-2">
                        <a href = "#links" className = "nav">Links</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;