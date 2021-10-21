import React from 'react'

export const Header = (props) => {
    return (
        <header>
            <img className="face ring-4 ring-yellow-500 ring-opacity-50" src="../img/chad_hicks.jpg" alt="" />
            <h2 className="select-none">Chad Hicks</h2>
            <ul className="p-4">
                <li><a href="/" onClick={ props.toAbout }>About Me</a></li>
                <li><a href="https://github.com/hickscj">GitHub</a></li>
                <li><a href="../resources/chad.hicks_Oct2021.pdf">Resume</a></li>
            </ul>
            <div className="pt-1">
                <img align="right"
                    src="https://github-readme-stats.vercel.app/api/top-langs?username=hickscj&show_icons=true&locale=en&layout=compact&langs_count=10"
                    alt="hickscj" />
            </div>
        </header>
    );
}
