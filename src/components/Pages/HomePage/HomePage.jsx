import React from "react";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="home">
      <h2 className="home__title home__title--top">What's New</h2>
      <span className="home__date">{new Date().toLocaleDateString()}</span>
      <div className="home__wrapper">
        <h3 className="home__title home__title--features">NEW FEATURES</h3>
        <ul className="home__section list">
          <li className="list__text">
            <span className="list__title">Video Backgrounds have arrived.</span>{" "}
            Add a blur or an official Discord preset background to your video
            calls. And, if you have Nitro, upload a custom video background.
          </li>
          <li className="list__text">
            <span className="list__title">
              You can finally upload multiple files at once.
            </span>{" "}
            I can’t believe it either and I work here.
          </li>
          <li className="list__text">
            <span className="list__title">
              Image uploads can now have descriptions.
            </span>{" "}
            Click on the pencil icon while uploading an image to add alt text.
            People who use screen readers will no longer be missing out.
          </li>
          <li className="list__text">
            <span className="list__title">New video preview toggle.</span> You
            can now preview your camera before you go on video. Visit User
            Settings Voice, Video to turn this feature on/off, but leave it on
            if you keep your laundry on that one chair behind you.
          </li>
          <li className="list__text">
            <span className="list__title">
              Add bots directly from bot profiles.
            </span>{" "}
            Bot developers can now enable an "Add to Server" button on a bot's
            user profile, so people can add it to their own servers way more
            easily.
          </li>
          <li className="list__text">
            <span className="list__title">Improvements to GIF cropper.</span>{" "}
            It's now faster and smoother to crop GIFs for avatars and profile
            banners. Also, we fine-tuned the cancel button. And by fine-tuned we
            mean it actually works now.
          </li>
        </ul>
        {/* /. home__section  */}
        <h3 className="home__title home__title--safety">SAFETY</h3>
        <ul className="home__section list">
          <li className="list__text">
            <span className="list__title">New server time-out function. </span>
            Moderators and admins of a server can now temporarily prevent a user
            from interacting to help curb disruptive behavior. Also known as the
            “yo dude stop you’re being really weird.” button.
          </li>
          <li className="list__text">
            <span className="list__title">
              You can now directly report spam.{" "}
            </span>
            Added a prominent Report Spam button in DMs so you can give us a
            faster signal when you’re being bothered. Also added a Roast Spam
            button for a faster way to make musubi.
          </li>
          <li className="list__text">
            <span className="list__title">
              Beefed up our suspicious link warning.{" "}
            </span>
            This new system can also better warn you before you visit a
            malicious domain. Don't click suspicious links. Free Nitro for your
            login information is a lie. Discord employees don’t want your
            password. We can barely remember our own.
          </li>
        </ul>
        {/* /. home__section  */}
        <h3 className="home__title home__title--other">OTHER</h3>
        <ul className="home__section list">
          <li className="list__text">
            <span className="list__title">Fix display of current time. </span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi,
            nostrum repellendus. Minima excepturi, reiciendis vel hic assumenda
            minus! Accusamus, molestias autem? Ad unde magni vero assumenda
            corrupti blanditiis ut, ipsum voluptatibus.
          </li>
          <li className="list__text">
            <span className="list__title">Add animation for friend-list. </span>
            Quasi, nostrum repellendus. Molestias sed perspiciatis distinctio!
            Consectetur officia perspiciatis dolorum quasi voluptate. Minima
            excepturi, reiciendis vel hic assumenda minus! Accusamus, molestias
            autem? Ad blanditiis ut, ipsum voluptatibus, ducimus ipsa tempora at
            voluptate laudantium impedit a odit quas adipisci similique
            delectus, porro quam iusto dicta.
          </li>
          <li className="list__text">
            <span className="list__title">
              Fix wrong behavior of channel-list scroll.{" "}
            </span>
            Accusamus, molestias autem? Ad unde magni vero assumenda corrupti
            blanditiis ut, ipsum voluptatibus, ducimus ipsa tempora at voluptate
            laudantium impedit a odit quas adipisci similique delectus, porro
            quam iusto dicta. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
