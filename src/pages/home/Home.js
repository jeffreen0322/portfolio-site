import "./Home.css";

export default function HomePage() {
  return (
    <div className="home">
      <div className="pitch">
        <IntroHeader />
        <Details />
      </div>
    </div>
  );
}

function IntroHeader() {
  return (
    <div
      className="fronter
    "
    >
      <div className="name">
        <h1 className="text intro">
          Hello, I'm <span style={{ color: "#B5C6E0" }}>Jeffrey</span>!
        </h1>
        <h1 className="text occupation">I'm an Aspring</h1>

        <h1 className="text occupation-2">
          <span style={{ color: "#B5C6E0" }}>SW Developer</span>!
        </h1>
      </div>
    </div>
  );
}

function Details() {
  return (
    <div className="personal">
      <img
        className="intro-image"
        src="https://cdn.discordapp.com/attachments/641520626498273280/1310420913392586832/jeff.png?ex=67452814&is=6743d694&hm=95c480290324ae3149d2182174e53a0b0375e8da9007128e7cf9e948a4397400&"
        alt="Jeffrey"
      />
    </div>
  );
}
