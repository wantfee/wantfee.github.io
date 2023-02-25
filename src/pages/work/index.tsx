import React from "react";
import Layout from "@theme/Layout";
import classes from "./work.module.css";

export default function Hello() {
  return (
    <Layout title="Work" description="Here's the work page">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          fontSize: "16px",
        }}
      >
        <p>All my works will display here.</p>
        {/* <p>
          <a href="/work/floenvy">FloEnvy.</a>
        </p> */}
      </div>
    </Layout>
  );
}
