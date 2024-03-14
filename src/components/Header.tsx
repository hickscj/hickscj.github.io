import React from 'react';

export const Header = (props: any) => {
    return (
        <header className="pt-5 mb-10">
          <div className="flex justify-between">
            <div className='flex flex-col w-100'>
              <div className='flex-row'>
                <div><img className="face ring-4 ring-yellow-500 ring-opacity-50" src="../img/chad_hicks.jpg" alt="" /></div>
                <h2 className="select-none pl-2">Chad Hicks</h2>
              </div>
            </div>
            <div className='flex flex-wrap pl-20'>
              <ul className="p-4">
                  <li><a href="/" onClick={ props.toAbout }>About Me</a></li>
                  <li><a href="https://github.com/hickscj">GitHub</a></li>
                  <li><a href="../resources/chad.hicks_Oct2021_resume.pdf">Resume (pdf)</a></li>
                  <li><a href="../resources/chad.hicks_Oct2021_resume.docx">Resume (docx)</a></li>
              </ul>
              <div className="pt-1 sm:pb-3">
                  <img src="https://github-readme-stats.vercel.app/api/top-langs?username=hickscj&show_icons=true&locale=en&layout=compact&langs_count=10" alt="hickscj" />
              </div>
            </div>
          </div>
          <div className="header-image flex flex-row"></div>
        </header>
    );
}
