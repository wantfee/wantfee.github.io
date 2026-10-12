import React from "react";
import classes from "./privacy.module.css";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "../../../../css/animations.css";

export default function RainbowLifeTermsPage() {
  return (
    <div className={classes.allContainer}>
      <div className={classes.backButton}>
        <Link to="/work/rainbow-life" className={classes.backButtonLink}>
          <ArrowLeftOutlined style={{ marginRight: "10px" }} />
          Back to Rainbow Life
        </Link>
      </div>
      <div>
        <h1>Rainbow Life Terms of Use</h1>
        <p className={classes.description}>
          Effective October 12, 2026. These terms are the agreement between
          you and the developer of Rainbow Life. They are specific to this
          app.
        </p>

        <main className={classes.main}>
          <section className={classes.contact}>
            <h2>1. The app</h2>
            <p>
              Rainbow Life lets you keep a life timeline for yourself and for
              people you add: names, dates, experiences, and photos. The app
              is licensed to you, not sold.
            </p>
          </section>

          <section className={classes.faq}>
            <h2>2. Your content</h2>
            <p>
              Text, dates, and photos you add remain yours. You give Rainbow
              Life permission to store that content on your device and to sync
              and back it up through your iCloud account, only so the app can
              function. We do not claim ownership of your content.
            </p>
          </section>

          <section className={classes.features}>
            <h2>3. Subscription</h2>
            <p>
              Rainbow Life offers an auto-renewable yearly subscription
              through the App Store. The price is the price shown in the App
              Store and in the app at the time you subscribe.
            </p>
            <ul className={classes.featuresList}>
              <li>
                A free trial, when offered, lasts 7 days. Unless you cancel at
                least 24 hours before the trial ends, it converts to a paid
                yearly subscription.
              </li>
              <li>
                Payment is charged to your Apple ID. The subscription renews
                for another year unless you cancel at least 24 hours before
                the end of the current period.
              </li>
              <li>
                You can cancel or manage the subscription in Settings, under
                your Apple ID, then Subscriptions.
              </li>
              <li>
                Restore Purchases in the app puts an existing subscription
                back on this device.
              </li>
              <li>
                The subscription unlocks a family timeline for up to 6 people,
                and iCloud sync and backup of the app’s data.
              </li>
            </ul>
            <p>
              Apple processes the payment. App Store purchases are also
              subject to Apple’s payment terms. These Rainbow Life terms still
              govern your use of the app.
            </p>
          </section>

          <section className={classes.links}>
            <h2>4. Acceptable use</h2>
            <p>
              Do not use Rainbow Life to break the law, to upload content you
              do not have rights to, or to interfere with the app. You are
              responsible for the people and experiences you choose to record.
            </p>
          </section>

          <section className={classes.contact}>
            <h2>5. Privacy</h2>
            <p>
              How the app handles information is described in the{" "}
              <Link
                to="/work/rainbow-life/support/privacy"
                className={classes.inlineLink}
              >
                Privacy Policy
              </Link>
              .
            </p>
          </section>

          <section className={classes.faq}>
            <h2>6. The app is provided as is</h2>
            <p>
              Rainbow Life is provided as available. Timelines, dates, and
              notifications can be interrupted by device settings, iCloud, or
              Apple’s services. To the extent the law allows, we are not
              liable for lost content or for decisions you make based on the
              app. Nothing in these terms limits rights you have under
              consumer protection laws that cannot be waived.
            </p>
          </section>

          <section className={classes.features}>
            <h2>7. Changes and contact</h2>
            <p>
              Updated terms will be posted on this page with a new effective
              date. Continuing to use the app after that date means you accept
              the update.
            </p>
            <p>
              Questions:{" "}
              <a className={classes.inlineLink} href="mailto:wantfee@hotmail.com">
                wantfee@hotmail.com
              </a>
            </p>
          </section>

          <section className={classes.links}>
            <h2>8. Governing law</h2>
            <p>
              These terms are governed by the laws of the People’s Republic of
              China, except where the consumer protection laws of your country
              give you rights that cannot be limited by this sentence.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
