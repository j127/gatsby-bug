import * as React from "react";
import type { HeadFC } from "gatsby";

const IndexPage = () => {
    const { GATSBY_MY_VAR } = process.env;
    if (!GATSBY_MY_VAR) {
        console.error("ENV VAR NOT FOUND");
        process.exit(1);
    }
    return (
        <main>
            <h1>Problem Below</h1>
            <p>{GATSBY_MY_VAR}</p>
        </main>
    );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
