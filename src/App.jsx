import CSS from './App.module.css'

const App = () => {
  // document.title = "Todura - Home";
  const onClickAction = () => {
    console.log('clicked "get started"');
  }
  return (
    <div className={CSS.main}>
      <header id="header" className={CSS.header}>
        <div className={CSS.shade}></div>
        <div className={CSS.textWrapper}>
          <h1>Todura</h1>
          <p>The Future of Todo Apps</p>
          <button onClick={() => onClickAction()} className={CSS.button}>Get Started</button>
        </div>
      </header>
      <section className={CSS.pageSection} id={CSS.section02}>
        <span className={CSS.ultitle}>Key Features</span>
        <div className={CSS.featureGrid}>
          <div className={CSS.feature}>
            <h1>Aesthetic Excellence</h1>
            <p>Todura boasts a visually pleasing and intuitive interface, ensuring that every interaction is a pleasure.</p>
          </div>
          <div className={CSS.feature}>
            <h1>Open Source Prowess</h1>
            <p>Built on the foundations of open-source technology, Todura stands as a testament to collaborative innovation. Its codebase, crafted with JavaScript, Electron, React, and Vite, is a beacon of transparency and community-driven development.</p>
          </div>
          <div className={CSS.feature}>
            <h1>Unparalleled Customization</h1>
            <p> Tailor Todura to your unique workflow. With a myriad of customization options, you can mold the app to fit your specific needs and preferences.</p>
          </div>
          {/* <div className="feature">
            <h1>Unparalleled Customization</h1>
            <p> Tailor Todura to your unique workflow. With a myriad of customization options, you can mold the app to fit your specific needs and preferences.</p>
          </div> */}
        </div>
      </section>

      <section className={CSS.pageSection} id={CSS.section01}>
        <div className={CSS.textWrapperLeft}>
          <h1>Purely Function</h1>
          <p>
            Todura is an exquisitely designed productivity application that seamlessly combines elegance with functionality.
            Its stunning user interface provides a delightful experience, making task management a pleasure rather than a chore.
            <br /><br />
            Embrace the future of productivity with Todura. Experience elegance, openness, and efficiency like never before. Download
            now and join the community shaping the future of task management.
          </p>
        </div>
        <div className={CSS.uiExample}></div>
      </section>

      <section className={CSS.pageSection} id={CSS.section04}>
        <h1>Changelog (0.6.X)</h1>
        <ul>
          <li>Added Banner System</li>
          <li>Fixed Styling Issues</li>
          <li>Added UI Scale Accessibility Feature</li>
          <li>Updated Themes Template</li>
          <li>Updated All Themes to Latest Theme Version</li>
          <li>Created 'ThemeParser' Function</li>
          <li>Fixed Typo in All Themes</li>
          <li>Added Experimental Settings</li>
          <li>Added Debug Settings</li>
          <li>Bug Fixes</li>
        </ul>
      </section>

      <section className={CSS.pageSection} id={CSS.section05}>
        <div className={CSS.textWrapperLeft}>
          <h1>Theme Builder is here!</h1>
          <p>
            Todura's theme builder simplifies personalization in task management.
            With an intuitive interface and a diverse color palette, users can effortlessly
            create custom themes. What sets it apart is the ability to export themes as JSON files,
            ensuring seamless sharing and easy integration across devices. This feature elevates
            Todura's user experience, providing a level of convenience and customization unmatched
            by other todo apps.
          </p>
          <a href="./theme-builder"><button className={CSS.button}>Go To Theme Builder</button></a>
        </div>
      </section>

      <section className={CSS.pageSection} id={CSS.section03}>
        <h1>Downloads</h1>
        <div className={CSS["downloads-container"]}>

          <div className={CSS.download}>
            <div className={`${CSS.osImage} ${CSS.windows}`}></div>
            <div className={CSS.DownloadTextWrapper}>
              <h3>Download for </h3>
              <h2>Windows</h2>
              <a href="https://github.com/M1dnight-ofcl/Todura/releases/download/beta-release/latest-release.zip"><button>Download</button></a>
            </div>
          </div>

          <div className={CSS.download}>
            <div className={`${CSS.osImage} ${CSS.github}`}></div>
            <div className={CSS.DownloadTextWrapper}>
              <h3>View Source Code on </h3>
              <h2>GitHub</h2>
              <a href="https://github.com/M1dnight-ofcl/Todura/releases/download/beta-release/latest-release.zip"><button>Explore</button></a>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}

export default App;