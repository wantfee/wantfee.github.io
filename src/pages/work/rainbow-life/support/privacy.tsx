import React from "react";
import classes from "../../960-grid-life/support/privacy.module.css";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "../../../../css/animations.css";

export default function RainbowLifePrivacyPage() {
  return (
    <div className={classes.allContainer}>
      <div className={classes.backButton}>
        <Link to="/work/rainbow-life" className={classes.backButtonLink}>
          <ArrowLeftOutlined style={{ marginRight: "10px" }} />
          Back to Rainbow Life
        </Link>
      </div>
      <div>
        <h1>Rainbow Life Privacy Policy</h1>
        <p className={classes.description}>
          Effective October 12, 2026. This policy explains what Rainbow Life
          stores, how that information is used, and the choices you have.
        </p>

        <main className={classes.main}>
          <section className={classes.contact}>
            <h2>1. Who we are</h2>
            <p>
              Rainbow Life is a life-timeline app published by an individual
              developer. You can reach us at{" "}
              <a className={classes.inlineLink} href="mailto:wantfee@hotmail.com">
                wantfee@hotmail.com
              </a>
              . We do not run a separate account server for the app.
            </p>
          </section>

          <section className={classes.faq}>
            <h2>2. Information the app stores</h2>
            <p>Information you enter is stored on your device:</p>
            <div className={classes.faqItem}>
              <h3>People</h3>
              <ul className={classes.featuresList}>
                <li>Name</li>
                <li>Birth date</li>
                <li>Optional end-of-life date</li>
                <li>Avatar photo</li>
              </ul>
            </div>
            <div className={classes.faqItem}>
              <h3>Experiences</h3>
              <ul className={classes.featuresList}>
                <li>Title and note</li>
                <li>Start date and optional end date</li>
                <li>Emotion</li>
                <li>Country and city, if you enter them</li>
                <li>Photos you attach</li>
              </ul>
            </div>
            <div className={classes.faqItem}>
              <h3>Photos you select</h3>
              <p>
                When you choose a photo, Rainbow Life reads that photo’s
                capture date and location so it can fill in the experience.
                The app does not scan your photo library in the background.
              </p>
            </div>
          </section>

          <section className={classes.features}>
            <h2>3. How that information is used</h2>
            <ul className={classes.featuresList}>
              <li>To draw each person’s life timeline and life stage</li>
              <li>To show the experiences, dates, and photos you save</li>
              <li>
                To schedule birthday and life-progress notifications on your
                device
              </li>
              <li>
                To sync and back up this data through your personal iCloud
                account, across Apple devices signed in to that account
              </li>
            </ul>
            <p>
              We do not sell your information, and we do not use it for
              advertising.
            </p>
          </section>

          <section className={classes.links}>
            <h2>4. iCloud sync and backup</h2>
            <p>
              Rainbow Life uses your iCloud account to sync and back up the
              people, experiences, and photos stored by the app. That data
              stays in your iCloud account and is protected by Apple. You can
              turn iCloud off for Rainbow Life in iOS Settings. We do not
              receive a copy of your iCloud contents on a server of our own.
            </p>
          </section>

          <section className={classes.contact}>
            <h2>5. Purchases</h2>
            <p>
              Subscriptions are processed by Apple through the App Store. We
              receive your subscription status so the app can unlock paid
              features. We do not receive your payment card number.
            </p>
          </section>

          <section className={classes.faq}>
            <h2>6. Notifications</h2>
            <p>
              Birthday and life-progress reminders are scheduled locally with
              Apple’s notification system. They are delivered only if you
              allow notifications. You can turn them off in iOS Settings.
            </p>
          </section>

          <section className={classes.features}>
            <h2>7. Deleting information</h2>
            <p>
              Deleting a person, an experience, or an avatar in the app
              removes that item from the device and from the app’s iCloud
              data. Deleting the app removes its local copy. Data already
              stored in your iCloud account follows Apple’s iCloud controls.
            </p>
          </section>

          <section className={classes.links}>
            <h2>8. Children</h2>
            <p>
              Rainbow Life is meant for adults. You may add family members,
              including children, to a timeline on your own device. We do not
              offer separate accounts for children, and we do not knowingly
              collect information directly from children.
            </p>
          </section>

          <section className={classes.contact}>
            <h2>9. Changes</h2>
            <p>
              If this policy changes, the updated version will be posted on
              this page with a new effective date.
            </p>
          </section>

          <section className={classes.faq}>
            <h2>10. Contact</h2>
            <p>
              Questions about this policy:{" "}
              <a className={classes.inlineLink} href="mailto:wantfee@hotmail.com">
                wantfee@hotmail.com
              </a>
            </p>
            <p>
              The terms for using Rainbow Life are on the{" "}
              <Link to="/work/rainbow-life/support/terms" className={classes.inlineLink}>
                Terms of Use
              </Link>{" "}
              page.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
