import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
    <Layout>
        <SEO title="Contact" />
        <div className="max-w-3xl xl:mwx-w-5xl m-auto min-h-screen">
            <h1 className="text-4xl font-semibold py-4">Contact Me</h1>
            <p className="text-lg">email, etc</p>
        </div>
    </Layout>
)

export default Contact
